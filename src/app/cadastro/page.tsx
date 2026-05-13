"use client";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { IconGuitar } from "@/components/Icons";

function CadastroForm() {
  const router   = useRouter();
  const params   = useSearchParams();
  const plano    = params.get("plano"); // "pro", "mensal", "anual" ou null
  const supabase = createClient();
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.senha,
      options: {
        data: { nome: form.nome },
      },
    });

    if (error) {
      setErro(error.message === "User already registered"
        ? "Este e-mail já está cadastrado."
        : "Erro ao criar conta. Tente novamente.");
      setCarregando(false);
      return;
    }

    setEnviado(true);
    // Se veio pelo fluxo PRO, redireciona para o checkout após confirmar email
    const destino = plano ? `/login?plano=${plano}` : "/login";
    setTimeout(() => router.push(destino), 3000);
  }

  async function handleGoogle() {
    const destino = plano
      ? `${window.location.origin}/checkout?plano=${plano === "pro" ? "mensal" : plano}`
      : `${window.location.origin}/`;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: destino },
    });
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-3xl font-bold text-[#4A2810]">
            Cifra <span className="text-[#D4900A]">Raiz</span>
          </Link>
          <p className="text-[#7A5C44] mt-2 text-sm">Crie sua conta</p>
        </div>

        {enviado ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <IconGuitar size={26} className="text-green-600" />
            </div>
            <h2 className="font-display text-xl font-bold text-[#4A2810] mb-2">
              Conta criada com sucesso!
            </h2>
            <p className="text-[#7A5C44] text-sm mb-1">
              Verifique seu e-mail para confirmar o cadastro.
            </p>
            <p className="text-[#B5865A] text-xs">Redirecionando para o login...</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 border border-[#E0D8CE] rounded-xl py-3 px-4 text-[#4A2810] font-medium hover:bg-[#F0EAE0] transition-colors mb-6"
            >
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
                <label className="block text-sm font-medium text-[#4A2810] mb-1">Nome completo</label>
                <input type="text" required value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] bg-[#FAF7F2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4A2810] mb-1">E-mail</label>
                <input type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                  className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] bg-[#FAF7F2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4A2810] mb-1">Senha</label>
                <input type="password" required minLength={6} value={form.senha}
                  onChange={(e) => setForm({ ...form, senha: e.target.value })}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] bg-[#FAF7F2]"
                />
              </div>

              <button type="submit" disabled={carregando}
                className="w-full bg-[#D4900A] text-white py-3 rounded-full font-bold text-base hover:bg-[#A36C05] transition-colors mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {carregando ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Criando...</>
                ) : "Criar conta"}
              </button>
            </form>
          </div>
        )}

        <p className="text-center mt-6 text-sm text-[#7A5C44]">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#D4900A] font-semibold hover:underline">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default function CadastroPage() {
  return (
    <Suspense>
      <CadastroForm />
    </Suspense>
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
