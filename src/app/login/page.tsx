"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";

type Step = "loading" | "definir-senha" | "login" | "link-enviado";

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/cifras";
  const supabase = useMemo(() => createClient(), []);

  const [step, setStep] = useState<Step>("loading");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // Detecta sessão (vindo do link de email) e estado inicial
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setStep("definir-senha");
      }
    });

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const hash = typeof window !== "undefined" ? window.location.hash : "";

      // Se veio do link de recovery (clicou no e-mail)
      if (session && (hash.includes("type=recovery") || hash.includes("access_token"))) {
        setStep("definir-senha");
        return;
      }

      // Já tem sessão válida → já está logado, vai pro destino
      if (session) {
        router.push(redirect);
        return;
      }

      setStep("login");
    })();

    return () => subscription.unsubscribe();
  }, [router, redirect, supabase]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) {
      setErro("E-mail ou senha incorretos.");
      setCarregando(false);
      return;
    }
    router.push(redirect);
    router.refresh();
  }

  async function handleEnviarLink(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    const baseUrl = window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${baseUrl}/login`,
    });
    setCarregando(false);
    if (error) {
      setErro("Não foi possível enviar. Confira se digitou o e-mail correto.");
      return;
    }
    setStep("link-enviado");
  }

  async function handleGoogle() {
    setCarregando(true);
    const baseUrl = window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${baseUrl}${redirect}` },
    });
  }

  async function handleDefinirSenha(e: React.FormEvent) {
    e.preventDefault();
    if (novaSenha.length < 6) {
      setErro("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }
    setErro("");
    setCarregando(true);

    try {
      // Verifica sessão antes
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setCarregando(false);
        setErro("Sessão expirada. Volte ao login e peça um novo link.");
        return;
      }

      // Timeout de 15s pra detectar requisições penduradas
      const update = supabase.auth.updateUser({ password: novaSenha });
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Tempo esgotado. Verifique sua conexão.")), 15000)
      );
      const result = (await Promise.race([update, timeout])) as Awaited<typeof update>;

      setCarregando(false);
      if (result.error) {
        setErro("Erro: " + result.error.message);
        return;
      }
      router.push(redirect);
      router.refresh();
    } catch (err: unknown) {
      setCarregando(false);
      const msg = err instanceof Error ? err.message : "Erro desconhecido. Tente novamente.";
      setErro(msg);
    }
  }

  // ── TELA: definir senha (após clicar no link do e-mail) ──────────────
  if (step === "definir-senha") {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="font-display text-3xl font-bold text-[#4A2810]">
              Cifra <span className="text-[#D4900A]">Raiz</span>
            </span>
            <p className="text-[#7A5C44] mt-2 text-sm">Crie sua senha de acesso</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
            <form onSubmit={handleDefinirSenha} className="space-y-4">
              {erro && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {erro}
                </p>
              )}
              <p className="text-sm text-[#7A5C44]">
                Defina uma senha que você vai lembrar. Você só precisa fazer isso uma vez.
              </p>
              <div>
                <label className="block text-sm font-medium text-[#4A2810] mb-1">Nova senha</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
                />
              </div>
              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-[#D4900A] text-white py-3 rounded-full font-bold text-base hover:bg-[#A36C05] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {carregando ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Salvando...
                  </>
                ) : (
                  "Salvar senha e entrar →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ── TELA: link enviado ──────────────────────────────────────────────
  if (step === "link-enviado") {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-green-600">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-[#4A2810] mb-3">Link enviado!</h2>
          <p className="text-[#7A5C44] mb-2">
            Enviamos um link de acesso para
          </p>
          <p className="text-[#4A2810] font-semibold mb-6">{email}</p>
          <p className="text-[#7A5C44] text-sm mb-8">
            Verifique sua caixa de entrada (e o spam) e clique no link para criar sua senha.
          </p>
          <button
            onClick={() => { setStep("login"); setErro(""); }}
            className="text-[#D4900A] font-semibold hover:underline"
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  // ── TELA: loading ───────────────────────────────────────────────────
  if (step === "loading") {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <span className="w-10 h-10 border-2 border-[#D4900A]/30 border-t-[#D4900A] rounded-full animate-spin" />
      </div>
    );
  }

  // ── TELA: login principal ───────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <span className="font-display text-3xl font-bold text-[#4A2810]">
            Cifra <span className="text-[#D4900A]">Raiz</span>
          </span>
        </div>

        {/* PRIMEIRO ACESSO (destacado) */}
        <div className="bg-[#4A2810] text-white rounded-2xl shadow-lg p-6 mb-5">
          <h3 className="font-display text-xl font-bold mb-1">Acabou de comprar?</h3>
          <p className="text-[#C4A882] text-sm mb-5">
            Crie seu acesso em menos de 1 minuto.
          </p>

          <button
            onClick={handleGoogle}
            disabled={carregando}
            className="w-full flex items-center justify-center gap-3 bg-white text-[#4A2810] font-bold py-3 rounded-xl hover:bg-[#FAF7F2] transition-colors mb-3 disabled:opacity-60"
          >
            <GoogleIcon />
            Continuar com Google
          </button>

          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-[#7A4520]" />
            <span className="text-xs text-[#B5865A]">ou crie com e-mail</span>
            <div className="flex-1 h-px bg-[#7A4520]" />
          </div>

          <form onSubmit={handleEnviarLink} className="space-y-3">
            {erro && (
              <p className="text-sm text-red-200 bg-red-900/40 border border-red-700 rounded-lg px-3 py-2">
                {erro}
              </p>
            )}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="O e-mail que você usou na compra"
              className="w-full bg-[#FAF7F2] border border-[#7A4520] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A]"
            />
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#D4900A] text-white font-bold py-3 rounded-xl hover:bg-[#A36C05] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {carregando ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                "Receber link para criar senha"
              )}
            </button>
          </form>
        </div>

        {/* JÁ TEM CONTA (recolhido) */}
        <details className="bg-white rounded-2xl border border-[#F0EAE0] overflow-hidden group">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#4A2810] hover:bg-[#FAF7F2] transition-colors flex items-center justify-between list-none">
            <span>Já tem conta? Entrar com senha</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-open:rotate-180">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </summary>
          <form onSubmit={handleLogin} className="space-y-4 px-6 pb-6 pt-1">
            <div>
              <label className="block text-sm font-medium text-[#4A2810] mb-1">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4A2810] mb-1">Senha</label>
              <input
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#4A2810] text-white py-3 rounded-full font-bold hover:bg-[#7A4520] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {carregando ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>
        </details>

        <p className="text-center text-xs text-[#B5865A] mt-6">
          Ao continuar você concorda com nossos termos. Acesso vitalício.
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

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}
