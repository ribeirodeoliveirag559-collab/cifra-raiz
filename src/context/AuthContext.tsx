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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]           = useState<User | null>(null);
  const [session, setSession]     = useState<Session | null>(null);
  const [carregando, setCarregando] = useState(true);
  const supabase = createClient();

  async function carregarPlano(suUser: SupabaseUser): Promise<Plano> {
    const { data } = await supabase
      .from("profiles")
      .select("plano")
      .eq("id", suUser.id)
      .single();
    return (data?.plano as Plano) || "free";
  }

  useEffect(() => {
    // Sessão inicial
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      if (data.session?.user) {
        const plano = await carregarPlano(data.session.user);
        setUser(formatarUser(data.session.user, plano));
      } else {
        setUser(null);
      }
      setCarregando(false);
    });

    // Escuta mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, sess) => {
      setSession(sess);
      if (sess?.user) {
        const plano = await carregarPlano(sess.user);
        setUser(formatarUser(sess.user, plano));
      } else {
        setUser(null);
      }
      setCarregando(false);
    });

    return () => subscription.unsubscribe();
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
