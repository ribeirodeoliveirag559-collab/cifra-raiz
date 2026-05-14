"use client";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";

function LoginForm() {
  const router   = useRouter();
  const params   = useSearchParams();
  const redirect = params.get("redirect") ?? "/cifras";
  const supabase = createClient();

  const [form, setForm]           = useState({ email: "", senha: "" });
  const [erro, setErro]           = useState("");
  const [carregando, setCarregando] = useState(false);

  // Recuperação de senha
  const [modoRecuperar, setModoRecuperar] = useState(false);
  const [emailRecuperar, setEmailRecuperar] = useState("");
  const [recuperandо, setRecuperando]     = useState(false);
  const [recuperadoOk, setRecuperadoOk]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.senha,
    });

    if (error) {
      setErro("E-mail ou senha incorretos.");
      setCarregando(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  }

  async function handleRecuperar(e: React.FormEvent) {
    e.preventDefault();
    setRecuperando(true);
    const baseUrl = window.location.origin;
    await supabase.auth.resetPasswordForEmail(emailRecuperar, {
      redirectTo: `${baseUrl}/login`,
    });
    setRecuperando(false);
    setRecuperadoOk(true);
  }

  // ── Tela de recuperação ───────────────────────────────────────────────────
  if (modoRecuperar) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="font-display text-3xl font-bold text-[#4A2810]">
              Cifra <span className="text-[#D4900A]">Raiz</span>
            </span>
            <p className="text-[#7A5C44] mt-2 text-sm">Recuperar senha</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
            {recuperadoOk ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 text-green-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-[#4A2810] mb-1">E-mail enviado!</p>
                <p className="text-sm text-[#7A5C44]">Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
                <button
                  onClick={() => { setModoRecuperar(false); setRecuperadoOk(false); setEmailRecuperar(""); }}
                  className="mt-5 text-sm text-[#D4900A] font-semibold hover:underline"
                >
                  Voltar ao login
                </button>
              </div>
            ) : (
              <form onSubmit={handleRecuperar} className="space-y-4">
                <p className="text-sm text-[#7A5C44] mb-2">
                  Informe seu e-mail e enviaremos um link para redefinir sua senha.
                </p>
                <div>
                  <label className="block text-sm font-medium text-[#4A2810] mb-1">E-mail</label>
                  <input
                    type="email"
                    required
                    value={emailRecuperar}
                    onChange={(e) => setEmailRecuperar(e.target.value)}
                    placeholder="voce@email.com"
                    className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={recuperandо}
                  className="w-full bg-[#4A2810] text-[#FAF7F2] py-3 rounded-full font-bold text-base hover:bg-[#7A4520] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {recuperandо ? (
                    <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Enviando...</>
                  ) : "Enviar link de recuperação"}
                </button>
                <button
                  type="button"
                  onClick={() => setModoRecuperar(false)}
                  className="w-full text-sm text-[#7A5C44] hover:text-[#4A2810] transition-colors pt-1"
                >
                  Voltar ao login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Tela de login ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="font-display text-3xl font-bold text-[#4A2810]">
            Cifra <span className="text-[#D4900A]">Raiz</span>
          </span>
          <p className="text-[#7A5C44] mt-2 text-sm">Entre na sua conta</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
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
                <button
                  type="button"
                  onClick={() => setModoRecuperar(true)}
                  className="text-xs text-[#D4900A] hover:underline"
                >
                  Esqueci minha senha
                </button>
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

            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#4A2810] text-[#FAF7F2] py-3 rounded-full font-bold text-base hover:bg-[#7A4520] transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {carregando ? (
                <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Entrando...</>
              ) : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
