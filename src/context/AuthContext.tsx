"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { createClient } from "@/lib/supabase";
import type { User as SupabaseUser, Session } from "@supabase/supabase-js";

export type Plano = "free" | "pro";

type User = { id: string; nome: string; email: string; plano: Plano };

type AuthCtx = {
  user: User | null;
  session: Session | null;
  carregando: boolean;
  logout: () => Promise<void>;
  isPro: boolean;
};

const AuthContext = createContext<AuthCtx>({
  user: null,
  session: null,
  carregando: true,
  logout: async () => {},
  isPro: false,
});

function formatarUser(su: SupabaseUser, plano: Plano = "free"): User {
  return {
    id:    su.id,
    nome:  su.user_metadata?.nome || su.email?.split("@")[0] || "Usuário",
    email: su.email || "",
    plano,
  };
}

// Ref do projeto Supabase atual (extraído da URL)
const PROJETO_ATUAL_REF = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const m = url.match(/https?:\/\/([^.]+)\.supabase\.co/);
  return m ? m[1] : "";
})();

// Limpa sessões de projetos Supabase mortos/antigos do localStorage
// (senão o supabase-js trava tentando validar tokens de projetos que não existem mais)
function limparSessoesOrfas() {
  if (typeof window === "undefined") return;
  try {
    const chaves = Object.keys(localStorage);
    chaves.forEach((k) => {
      // Chaves do formato sb-<ref>-auth-token de OUTROS projetos
      const m = k.match(/^sb-([a-z0-9]+)-auth-token/);
      if (m && m[1] !== PROJETO_ATUAL_REF) {
        localStorage.removeItem(k);
      }
    });
  } catch { /* ignore */ }
}

// Timeout para não travar indefinidamente esperando o Supabase
function comTimeout<T>(p: Promise<T>, ms: number): Promise<T | null> {
  return Promise.race([
    p,
    new Promise<null>((resolve) => setTimeout(() => resolve(null), ms)),
  ]);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]           = useState<User | null>(null);
  const [session, setSession]     = useState<Session | null>(null);
  const [carregando, setCarregando] = useState(true);
  const supabase = createClient();

  async function carregarPlano(suUser: SupabaseUser): Promise<Plano> {
    const res = await comTimeout(
      supabase.from("profiles").select("plano").eq("id", suUser.id).single(),
      8000
    );
    return (res?.data?.plano as Plano) || "free";
  }

  useEffect(() => {
    // Limpa sessões órfãs ANTES de qualquer chamada ao supabase
    limparSessoesOrfas();

    let cancelado = false;

    // Sessão inicial com timeout de 10s
    comTimeout(supabase.auth.getSession(), 10000).then(async (res) => {
      if (cancelado) return;
      const sess = res?.data?.session ?? null;
      setSession(sess);
      if (sess?.user) {
        const plano = await carregarPlano(sess.user);
        if (!cancelado) setUser(formatarUser(sess.user, plano));
      } else {
        setUser(null);
      }
      setCarregando(false);
    });

    // Fallback: se em 12s nada resolveu, para de carregar
    const fallback = setTimeout(() => {
      if (!cancelado) setCarregando(false);
    }, 12000);

    // Escuta mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, sess) => {
      if (cancelado) return;
      setSession(sess);
      if (sess?.user) {
        const plano = await carregarPlano(sess.user);
        if (!cancelado) setUser(formatarUser(sess.user, plano));
      } else {
        setUser(null);
      }
      setCarregando(false);
    });

    return () => {
      cancelado = true;
      clearTimeout(fallback);
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  }

  return (
    <AuthContext.Provider value={{
      user,
      session,
      carregando,
      logout,
      isPro: user?.plano === "pro",
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
