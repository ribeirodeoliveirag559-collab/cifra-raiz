"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function CheckoutInner() {
  const { user, carregando } = useAuth();
  const router       = useRouter();
  const params       = useSearchParams();
  const plano        = (params.get("plano") ?? "mensal") as "mensal" | "anual";
  const [erro, setErro] = useState("");

  useEffect(() => {
    // Se ainda está carregando auth, aguarda
    if (carregando) return;

    // Se não está logado, manda para cadastro
    if (!user) {
      router.push(`/cadastro?plano=${plano}`);
      return;
    }

    // Já é PRO, manda direto para o dashboard
    if (user.plano === "pro") {
      router.push("/dashboard");
      return;
    }

    // Cria sessão no Stripe e redireciona
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plano }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url; // redireciona para o Stripe
        } else {
          setErro("Erro ao iniciar pagamento. Tente novamente.");
        }
      })
      .catch(() => setErro("Erro de conexão. Tente novamente."));
  }, [carregando, user, plano, router]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
      <div className="text-center">
        <img src="/logo.jpg" alt="Cifra Raiz" className="h-12 w-auto rounded-xl mx-auto mb-8" />

        {erro ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-sm">
            <p className="text-red-600 font-semibold mb-4">{erro}</p>
            <button
              onClick={() => router.push("/landing#planos")}
              className="text-[#D4900A] font-semibold hover:underline"
            >
              ← Voltar para os planos
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-[#7A5C44]">
            <span className="w-10 h-10 border-2 border-[#D4900A]/30 border-t-[#D4900A] rounded-full animate-spin" />
            <p className="font-semibold text-[#4A2810]">Preparando seu pagamento seguro...</p>
            <p className="text-sm">Você será redirecionado em instantes</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return <Suspense><CheckoutInner /></Suspense>;
}
