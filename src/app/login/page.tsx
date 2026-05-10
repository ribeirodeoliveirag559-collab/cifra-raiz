"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.senha) {
      setErro("Preencha email e senha.");
      return;
    }
    // Mock: qualquer email/senha válidos entram
    const nome = form.email.split("@")[0].replace(/[._]/g, " ");
    const nomeFmt = nome.charAt(0).toUpperCase() + nome.slice(1);
    login({ nome: nomeFmt, email: form.email });
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-3xl font-bold text-[#4A2810]">
            Cifra <span className="text-[#D4900A]">Raiz</span>
          </Link>
          <p className="text-[#7A5C44] mt-2 text-sm">Entre na sua conta</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
          <button className="w-full flex items-center justify-center gap-3 border border-[#E0D8CE] rounded-xl py-3 px-4 text-[#4A2810] font-medium hover:bg-[#F0EAE0] transition-colors mb-6">
            <GoogleIcon />
            Entrar com Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[#E0D8CE]" />
            <span className="text-xs text-[#B5865A]">ou com email</span>
            <div className="flex-1 h-px bg-[#E0D8CE]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {erro && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {erro}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-[#4A2810] mb-1">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="voce@email.com"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-[#4A2810]">Senha</label>
                <Link href="#" className="text-xs text-[#D4900A] hover:underline">Esqueci minha senha</Link>
              </div>
              <input
                type="password"
                required
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                placeholder="Sua senha"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="lembrar" defaultChecked className="accent-[#D4900A]" />
              <label htmlFor="lembrar" className="text-sm text-[#7A5C44]">Manter conectado</label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A2810] text-[#FAF7F2] py-3 rounded-full font-bold text-base hover:bg-[#7A4520] transition-colors mt-2"
            >
              Entrar
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-[#7A5C44]">
          Não tem conta?{" "}
          <Link href="/cadastro" className="text-[#D4900A] font-semibold hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}
