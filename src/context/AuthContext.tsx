"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type User, getUser, saveUser, clearUser } from "@/lib/auth";

type AuthCtx = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  function login(u: User) {
    saveUser(u);
    setUser(u);
  }

  function logout() {
    clearUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
