"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";

function LoginInner() {
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/cifras";
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(`Tempo esgotado (${label}). Verifique sua conexão.`)), ms)
      ),
    ]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const emailNorm = email.trim().toLowerCase();

    try {
      // 1ª tentativa: login normal (15s timeout)
      const { error: loginError } = await withTimeout(
        supabase.auth.signInWithPassword({ email: emailNorm, password: senha }),
        15000,
        "login"
      );

      if (!loginError) {
        window.location.href = redirect;
        return;
      }

      // Falhou — tenta criar acesso pela primeira vez
      const res = await withTimeout(
        fetch("/api/primeiro-acesso", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailNorm, password: senha }),
        }),
        15000,
        "criar acesso"
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          setErro("Senha incorreta. Tente outra senha.");
        } else if (res.status === 404) {
          setErro("E-mail não encontrado. Use o e-mail que você usou na compra.");
        } else {
          setErro(data.error ?? "Não foi possível entrar.");
        }
        setCarregando(false);
        return;
      }

      // Acesso criado, login final
      const { error: loginError2 } = await withTimeout(
        supabase.auth.signInWithPassword({ email: emailNorm, password: senha }),
        15000,
        "entrar"
      );

      if (loginError2) {
        setErro("Acesso criado, mas houve erro ao entrar. Atualize a página e tente de novo.");
        setCarregando(false);
        return;
      }

      window.location.href = redirect;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido.";
      setErro(msg);
      setCarregando(false);
    }
  }

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
          <div className="bg-[#FDF6E8] border border-[#D4900A]/30 rounded-xl px-4 py-3 mb-5">
            <p className="text-[#4A2810] text-sm font-semibold mb-1">É o seu primeiro acesso?</p>
            <p className="text-[#7A5C44] text-xs leading-snug">
              Digite o e-mail que você usou na compra e crie uma senha. Ela vai ser sua senha definitiva.
            </p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                autoComplete="email"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4A2810] mb-1">Senha</label>
              <input
                type="password"
                required
                minLength={6}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                autoComplete="current-password"
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#D4900A] text-white py-3 rounded-full font-bold text-base hover:bg-[#A36C05] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
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
        </div>

        <p className="text-center text-xs text-[#B5865A] mt-6">
          Acesso vitalício. Use o e-mail que você usou no checkout.
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}
