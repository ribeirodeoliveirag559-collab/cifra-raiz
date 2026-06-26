"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase";

type Modo = "entrar" | "primeiro";

const TIMEOUT_MS = 30000; // 30s — Brave/conexão lenta às vezes demora

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Conexão lenta (${label}). Tente de novo ou limpe o cache.`)), ms)
    ),
  ]);
}

// Limpa sessões antigas travadas no localStorage que podem causar timeout
function limparSessaoAntiga() {
  if (typeof window === "undefined") return;
  try {
    Object.keys(localStorage).forEach((k) => {
      if (k.startsWith("sb-") && k.endsWith("-auth-token")) {
        const v = localStorage.getItem(k);
        if (v) {
          try {
            const data = JSON.parse(v);
            if (data?.expires_at && data.expires_at * 1000 < Date.now()) {
              localStorage.removeItem(k);
            }
          } catch { localStorage.removeItem(k); }
        }
      }
    });
  } catch { /* ignore */ }
}

function LoginInner() {
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/";
  const supabase = useMemo(() => createClient(), []);

  const [modo, setModo] = useState<Modo>("entrar");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // Limpa sessões expiradas ao montar (evita travamento do supabase-js)
  useEffect(() => { limparSessaoAntiga(); }, []);

  function trocarModo(novo: Modo) {
    setModo(novo);
    setErro("");
    setSenha("");
  }

  async function handleEntrar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const emailNorm = email.trim().toLowerCase();
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    try {
      // Login via fetch direto (bypass supabase-js que estava travando com Brave shield)
      const res = await withTimeout(
        fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
          method: "POST",
          headers: { apikey: ANON_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailNorm, password: senha }),
        }),
        TIMEOUT_MS,
        "login"
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("[login] Supabase 400:", data);
        if (data.error_code === "invalid_credentials" || res.status === 400) {
          setErro("E-mail ou senha incorretos. Verifique se digitou certo.");
        } else if (data.error_code === "email_not_confirmed") {
          setErro("E-mail não confirmado. Entre em contato no WhatsApp.");
        } else {
          setErro(data.msg || data.error_description || "Não foi possível entrar.");
        }
        setCarregando(false);
        return;
      }

      // Salva sessão usando o supabase-js (sincroniza cookies pro middleware ler)
      await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });

      window.location.href = redirect;
    } catch (err: unknown) {
      console.error("[login] exception:", err);
      const msg = err instanceof Error ? err.message : "Erro desconhecido.";
      setErro(msg);
      setCarregando(false);
    }
  }

  async function handlePrimeiroAcesso(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const emailNorm = email.trim().toLowerCase();

    try {
      // Cria o acesso via API
      const res = await withTimeout(
        fetch("/api/primeiro-acesso", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailNorm, password: senha }),
        }),
        TIMEOUT_MS,
        "criar acesso"
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 404) {
          setErro("E-mail não encontrado. Use o e-mail que você usou na compra.");
        } else if (res.status === 409) {
          setErro("Você já tem um acesso ativo. Use o botão 'Já tenho conta' acima.");
        } else if (res.status === 403) {
          setErro("Esse e-mail não tem acesso PRO ativo.");
        } else {
          setErro(data.error ?? "Não foi possível criar o acesso.");
        }
        setCarregando(false);
        return;
      }

      // Acesso criado — faz login via fetch direto
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const loginRes = await withTimeout(
        fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
          method: "POST",
          headers: { apikey: ANON_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailNorm, password: senha }),
        }),
        TIMEOUT_MS,
        "entrar"
      );

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        console.error("[primeiro-acesso] login pos-criar falhou:", loginData);
        setErro("Acesso criado, mas houve erro ao entrar. Atualize a página e use 'Já tenho conta'.");
        setCarregando(false);
        return;
      }

      await supabase.auth.setSession({
        access_token: loginData.access_token,
        refresh_token: loginData.refresh_token,
      });

      window.location.href = redirect;
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : "Erro desconhecido.");
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
        </div>

        {/* TABS */}
        <div className="grid grid-cols-2 bg-[#F0EAE0] rounded-2xl p-1 mb-5">
          <button
            type="button"
            onClick={() => trocarModo("entrar")}
            className={`py-2.5 rounded-xl font-semibold text-sm transition-all ${
              modo === "entrar"
                ? "bg-white text-[#4A2810] shadow-sm"
                : "text-[#7A5C44] hover:text-[#4A2810]"
            }`}
          >
            Já tenho conta
          </button>
          <button
            type="button"
            onClick={() => trocarModo("primeiro")}
            className={`py-2.5 rounded-xl font-semibold text-sm transition-all ${
              modo === "primeiro"
                ? "bg-white text-[#4A2810] shadow-sm"
                : "text-[#7A5C44] hover:text-[#4A2810]"
            }`}
          >
            Primeiro acesso
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#F0EAE0] p-8">
          {modo === "primeiro" && (
            <div className="bg-[#FDF6E8] border border-[#D4900A]/30 rounded-xl px-4 py-3 mb-5">
              <p className="text-[#4A2810] text-sm font-semibold mb-1">Crie seu acesso ao Cifra Raiz</p>
              <p className="text-[#7A5C44] text-xs leading-snug">
                Digite o e-mail que você usou na compra e escolha uma senha. Ela vai ser sua senha definitiva.
              </p>
            </div>
          )}

          <form
            onSubmit={modo === "entrar" ? handleEntrar : handlePrimeiroAcesso}
            className="space-y-4"
          >
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
              <label className="block text-sm font-medium text-[#4A2810] mb-1">
                {modo === "primeiro" ? "Crie uma senha" : "Senha"}
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder={modo === "primeiro" ? "Mínimo 6 caracteres" : "Sua senha"}
                autoComplete={modo === "primeiro" ? "new-password" : "current-password"}
                className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A] focus:ring-1 focus:ring-[#D4900A] bg-[#FAF7F2]"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className={`w-full py-3 rounded-full font-bold text-base transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 ${
                modo === "primeiro"
                  ? "bg-[#D4900A] text-white hover:bg-[#A36C05]"
                  : "bg-[#4A2810] text-white hover:bg-[#7A4520]"
              }`}
            >
              {carregando ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  {modo === "primeiro" ? "Criando acesso..." : "Entrando..."}
                </>
              ) : modo === "primeiro" ? (
                "Criar meu acesso →"
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
