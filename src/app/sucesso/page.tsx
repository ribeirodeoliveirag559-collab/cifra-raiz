"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
function lancarConfetti() {
  try {
    import("canvas-confetti" as never).then((m: { default?: CallableFunction }) => {
      const fn = m.default ?? m;
      if (typeof fn === "function") {
        fn({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#D4900A", "#4A2810", "#FAF7F2", "#B5865A"],
        });
      }
    }).catch(() => {});
  } catch {
    // silencia se não tiver o pacote
  }
}

export default function SucessoPage() {
  const [contagem, setContagem] = useState(8);

  useEffect(() => {
    lancarConfetti();

    const interval = setInterval(() => {
      setContagem((c) => {
        if (c <= 1) {
          clearInterval(interval);
          window.location.href = "/dashboard";
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#4A2810] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <img src="/logo.jpg" alt="Cifra Raiz" className="h-14 w-auto rounded-xl mx-auto mb-8" />

        {/* Ícone de sucesso */}
        <div className="w-24 h-24 bg-[#D4900A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
          Bem-vindo ao PRO! 🎸
        </h1>

        <p className="text-[#C4A882] text-lg mb-2">
          Seu pagamento foi confirmado com sucesso.
        </p>
        <p className="text-[#B5865A] text-sm mb-10">
          Um recibo foi enviado para o seu e-mail. Aproveite o acesso completo!
        </p>

        {/* Benefícios desbloqueados */}
        <div className="bg-[#3A1F08] border border-[#7A4520] rounded-2xl p-6 mb-8 text-left">
          <p className="text-[#D4900A] font-bold text-sm uppercase tracking-wider mb-4 text-center">
            O que você desbloqueou
          </p>
          {[
            "✅ 7.200+ cifras sertanejas completas",
            "✅ Cursos em vídeo de violão sertanejo",
            "✅ Técnicas avançadas de palhetada",
            "✅ Conteúdo exclusivo toda semana",
            "✅ Suporte prioritário",
          ].map((item) => (
            <p key={item} className="text-[#FAF7F2] text-sm py-1.5 border-b border-[#5A3A20] last:border-0">
              {item}
            </p>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/dashboard"
          className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105 mb-4"
        >
          Ir para o Dashboard →
        </Link>

        <p className="text-[#7A5C44] text-sm">
          Redirecionando automaticamente em{" "}
          <span className="text-[#D4900A] font-bold">{contagem}s</span>
        </p>
      </div>
    </div>
  );
}
