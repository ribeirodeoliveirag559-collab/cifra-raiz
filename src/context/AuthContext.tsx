"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { createClient } from "@/lib/supabase";
import type { User as SupabaseUser, Session } from "@supabase/supabase-js";

type User = { id: string; nome: string; email: string };

type AuthCtx = {
  user: User | null;
  session: Session | null;
  carregando: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx>({
  user: null,
  session: null,
  carregando: true,
  logout: async () => {},
});

function formatarUser(su: SupabaseUser): User {
  return {
    id: su.id,
    nome: su.user_metadata?.nome || su.email?.split("@")[0] || "Usuário",
    email: su.email || "",
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [carregando, setCarregando] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Sessão inicial
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ? formatarUser(data.session.user) : null);
      setCarregando(false);
    });

    // Escuta mudanças de auth em tempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ? formatarUser(sess.user) : null);
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
    <AuthContext.Provider value={{ user, session, carregando, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
