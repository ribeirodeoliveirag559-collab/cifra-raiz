"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IconBook, IconTrophy, IconTarget } from "@/components/Icons";

const CARDS = [
  {
    id: "boas-vindas",
    gradient: "from-[#4A2810] to-[#2C1A0E]",
    pattern: true,
    badge: "Sertanejo · Modão · Raiz",
    BadgeIcon: null,
    title: "O lugar do sertanejo de raiz",
    desc: "Aprenda a tocar as músicas que você ama de verdade.",
    cta: { label: "Explorar cifras", href: "/cifras" },
    ctaStyle: "bg-[#D4900A] text-white hover:bg-[#A36C05]",
  },
  {
    id: "modulo",
    gradient: "from-[#7A4520] to-[#4A2810]",
    pattern: false,
    badge: "Em andamento",
    BadgeIcon: IconBook,
    title: "Primeiros Passos",
    desc: "Você está em 75% do módulo 1. Continue de onde parou!",
    cta: { label: "Continuar →", href: "/cursos/primeiros-passos" },
    ctaStyle: "bg-white text-[#4A2810] hover:bg-[#FAF7F2]",
    progress: 75,
  },
  {
    id: "desafio",
    gradient: "from-[#A36C05] to-[#D4900A]",
    pattern: false,
    badge: "Desafio da semana",
    BadgeIcon: IconTrophy,
    title: "Evidências",
    desc: "Chitãozinho & Xororó — aprenda o refrão completo.",
    cta: { label: "Praticar agora", href: "/cifras/evidencias" },
    ctaStyle: "bg-[#4A2810] text-white hover:bg-[#2C1A0E]",
  },
  {
    id: "afinador",
    gradient: "from-[#1C3A28] to-[#2A5C3A]",
    pattern: false,
    badge: "Ferramenta gratuita",
    BadgeIcon: IconTarget,
    title: "Afinador de violão",
    desc: "Afine pelo microfone do celular. Suporta viola caipira.",
    cta: { label: "Abrir afinador", href: "/afinador" },
    ctaStyle: "bg-[#D4900A] text-white hover:bg-[#A36C05]",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % CARDS.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + CARDS.length) % CARDS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {CARDS.map((card) => (
          <div
            key={card.id}
            className={`w-full shrink-0 bg-gradient-to-br ${card.gradient} relative overflow-hidden`}
          >
            {/* Padrão decorativo */}
            {card.pattern && (
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg,#D4900A 0,#D4900A 1px,transparent 0,transparent 50%)",
                  backgroundSize: "20px 20px",
                }}
              />
            )}

            <div className="relative z-10 px-6 py-10 md:py-16 max-w-2xl mx-auto">
              <div className="flex items-center gap-1.5 mb-3">
                {card.BadgeIcon && <card.BadgeIcon size={13} className="text-[#D4900A]" />}
                <p className="text-[#D4900A] text-xs font-bold uppercase tracking-widest">
                  {card.badge}
                </p>
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                {card.title}
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-5 leading-relaxed max-w-sm">
                {card.desc}
              </p>

              {/* Barra de progresso opcional */}
              {"progress" in card && typeof card.progress === "number" && (
                <div className="mb-5 max-w-xs">
                  <div className="flex justify-between text-xs text-white/60 mb-1">
                    <span>Progresso</span>
                    <span className="font-bold text-white">{card.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <Link
                href={card.cta.href}
                className={`inline-block px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${card.ctaStyle}`}
              >
                {card.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Setas prev/next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors text-lg leading-none"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors text-lg leading-none"
        aria-label="Próximo"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${
              i === current ? "w-5 h-2 bg-[#D4900A]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
