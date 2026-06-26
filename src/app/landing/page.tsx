"use client";
import { useState } from "react";
import Link from "next/link";
import BotaoSuporteWhatsApp from "@/components/BotaoSuporteWhatsApp";

// ─── Ícones SVG profissionais ─────────────────────────────────────────────
const IcoCheck = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);
const IcoStar = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#D4900A]">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);
const IcoChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const IcoGuitar = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
  </svg>
);

const IcoPlay = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
  </svg>
);

const IcoDrum = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <ellipse cx="12" cy="9" rx="9" ry="4"/>
    <path strokeLinecap="round" d="M3 9v6c0 2.21 4.03 4 9 4s9-1.79 9-4V9"/>
    <path strokeLinecap="round" d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4"/>
  </svg>
);

const IcoTarget = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const IcoPhone = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
  </svg>
);

const IcoPen = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
  </svg>
);

const IcoSearch = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"/>
  </svg>
);

const IcoUser = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
  </svg>
);

const IcoShield = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
  </svg>
);

// ─── FAQ ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Preciso saber música para usar o Cifra Raiz?",
    a: "Não! A plataforma foi pensada para todos os níveis. Temos cifras classificadas por dificuldade — do iniciante absoluto ao avançado — e os diagramas de acorde aparecem na tela só de clicar no acorde.",
  },
  {
    q: "As cifras são de qual estilo?",
    a: "Foco total em sertanejo, modão e raiz: Zezé Di Camargo & Luciano, Chitãozinho & Xororó, Leonardo, Almir Sater, Renato Teixeira, Eduardo Costa, Luan Santana e muito mais. Mais de 7.200 músicas do gênero.",
  },
  {
    q: "O pagamento é único ou mensal?",
    a: "É um pagamento único de R$ 17,90 e o acesso é vitalício. Você paga uma vez e acessa para sempre, sem mensalidade, sem renovação automática.",
  },
  {
    q: "Tenho garantia se não gostar?",
    a: "Sim. Oferecemos garantia incondicional de 7 dias. Caso não fique satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas.",
  },
  {
    q: "As cifras estão corretas?",
    a: "Revisamos e validamos cada cifra contra o áudio original. Além disso, você pode transpor o tom com um clique para qualquer tonalidade — ideal para afinar no seu violão sem ter que contar casa a casa.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim! O Cifra Raiz é um PWA (Progressive Web App) — funciona perfeitamente no celular, tablet e computador, com visual adaptado para cada tela. Pode até instalar como app na tela inicial.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="border border-[#E0D8CE] rounded-2xl overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-[#FAF7F2] transition-colors"
          >
            <span className="font-semibold text-[#4A2810] text-sm md:text-base">{f.q}</span>
            <IcoChevron open={open === i} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[#7A5C44] text-sm leading-relaxed border-t border-[#F0EAE0] pt-4">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Página principal ──────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans">

      {/* Botão flutuante de suporte WhatsApp */}
      <BotaoSuporteWhatsApp />

      {/* NAV */}
      <nav className="bg-[#4A2810] sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <img src="/logo.jpg" alt="Cifra Raiz" className="h-9 w-auto rounded-lg" />
          <Link
            href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
            className="bg-[#D4900A] hover:bg-[#A36C05] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-md"
          >
            Garantir acesso →
          </Link>
        </div>
      </nav>

      {/* HERO — fundo bege com orbs dourados flutuantes (glassmorphism) */}
      <section className="relative overflow-hidden bg-[#FAF7F2] pb-20 pt-16 px-4">
        {/* Orbs flutuantes coloridas com cores Cifra Raiz */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="orb"
            style={{ width: 420, height: 420, top: -120, left: -120, background: "#D4900A", animationDuration: "25s" }}
          />
          <div
            className="orb"
            style={{ width: 520, height: 520, bottom: -180, right: -120, background: "#F0B429", animationDuration: "22s", animationDelay: "-5s" }}
          />
          <div
            className="orb"
            style={{ width: 320, height: 320, top: "40%", left: "55%", background: "#A36C05", animationDuration: "18s", animationDelay: "-10s", opacity: 0.45 }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-[#D4900A]/40 text-[#A36C05] text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <IcoGuitar className="w-3.5 h-3.5" />
            Mais de 7.200 cifras de sertanejo e modão
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-black text-[#4A2810] leading-tight mb-4 drop-shadow-sm">
            Seja o{" "}
            <span className="text-[#D4900A]">sucesso do churrasco!</span>
          </h1>

          <p className="text-[#A36C05] font-bold text-xl md:text-2xl max-w-2xl mx-auto mb-4 leading-snug">
            Aprenda a tocar as melhores modas,<br className="hidden md:block"/> com cifras simplificadas.
          </p>
          <p className="text-[#7A5C44] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A maior plataforma de cifras sertanejas do Brasil. Mais de 7.200 músicas
            com acorde certo, tom transponível, palhetada e vídeo do original — tudo
            num lugar só.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
              className="bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-center"
            >
              Garantir meu acesso vitalício →
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3 text-[#7A5C44] text-sm">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FAF7F2] shadow-md">
                  <img
                    src={`/social-${i}.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="font-medium">+3.000 violonistas já estão tocando</span>
          </div>
        </div>
      </section>

      {/* ── DEMO DA PLATAFORMA + FUNCIONALIDADES ──────────────────────── */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#3A1F08] via-[#4A2810] to-[#3A1F08] overflow-hidden">
        {/* Decoração: círculos dourados desfocados */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4900A] opacity-[0.08] blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4900A] opacity-[0.06] blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-14">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">
              Veja por dentro
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Tudo isso te espera <br className="hidden md:block"/>
              <span className="text-[#D4900A]">dentro do Cifra Raiz</span>
            </h2>
            <p className="text-[#C4A882] text-base md:text-lg max-w-2xl mx-auto">
              Cada funcionalidade foi pensada pra você tocar mais e desistir menos.
              Acompanha a cifra, escuta o áudio original e ajusta o tom — tudo na mesma tela.
            </p>
          </div>

          {/* Grid: Features esquerda | Phone | Features direita */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">

            {/* ── FEATURES ESQUERDA ── */}
            <div className="space-y-4 order-2 lg:order-1">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
                    </svg>
                  ),
                  title: "7.200+ cifras revisadas",
                  desc: "Catálogo completo de sertanejo, modão e raiz — atualizado toda semana.",
                  pos: "lg:text-right",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                    </svg>
                  ),
                  title: "Tom transponível 1 clique",
                  desc: "Toque na sua voz, sem capotraste e sem complicação.",
                  pos: "lg:text-right",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <circle cx="12" cy="12" r="9"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                  title: "Diagramas interativos",
                  desc: "Não sabe um acorde? Clica nele e vê os dedos na hora.",
                  pos: "lg:text-right",
                },
              ].map((f, i) => (
                <div key={i} className={`bg-[#3A1F08]/80 backdrop-blur-sm border border-[#7A4520]/50 rounded-2xl p-5 hover:border-[#D4900A]/50 transition-all group ${f.pos}`}>
                  <div className={`flex items-start gap-3 ${f.pos === "lg:text-right" ? "lg:flex-row-reverse" : ""}`}>
                    <div className="shrink-0 w-10 h-10 bg-[#D4900A]/15 rounded-xl flex items-center justify-center text-[#D4900A] group-hover:bg-[#D4900A]/25 transition-colors">
                      {f.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-white text-base mb-1">{f.title}</h3>
                      <p className="text-[#B5865A] text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── PHONE MOCKUP CENTRAL ── */}
            <div className="relative mx-auto order-1 lg:order-2">
              {/* Glow dourado atrás */}
              <div className="absolute inset-0 bg-[#D4900A] opacity-25 blur-3xl rounded-full scale-90" />

              {/* Phone frame */}
              <div className="relative w-[260px] md:w-[290px] bg-[#1a1208] rounded-[2.5rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-[#7A4520]/40">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1208] rounded-full z-20" />

                {/* Screen */}
                <div className="relative bg-[#FAF7F2] rounded-[2rem] overflow-hidden h-[520px]">
                  {/* Header do app */}
                  <div className="bg-[#4A2810] px-3 py-3 flex items-center justify-between">
                    <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                      <img src="/logo.jpg" alt="" className="w-6 h-6 rounded" />
                    </div>
                    <span className="text-[#FAF7F2] text-[10px] font-bold">Olá!</span>
                  </div>

                  {/* Hero carrossel (dourado) */}
                  <div className="relative bg-gradient-to-br from-[#D4900A] to-[#A36C05] mx-3 mt-3 rounded-xl p-4 overflow-hidden">
                    <p className="text-[#FFFAEB] text-[9px] font-bold uppercase tracking-wider mb-1.5">
                      SERTANEJO · MODÃO · RAIZ
                    </p>
                    <h4 className="text-white font-display font-black text-base leading-tight mb-1">
                      O lugar do sertanejo de raiz
                    </h4>
                    <p className="text-[#FFFAEB] text-[9px] mb-3">
                      Aprenda a tocar as músicas que ama.
                    </p>
                    <div className="inline-flex bg-white text-[#A36C05] text-[10px] font-bold px-3 py-1.5 rounded-full">
                      Explorar cifras
                    </div>
                    {/* Dots */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                      <span className="w-3 h-1 bg-white rounded-full" />
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  {/* Mais tocadas */}
                  <div className="px-3 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="#D4900A" className="w-3 h-3">
                          <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                        </svg>
                        <p className="text-[#4A2810] text-[10px] font-display font-bold">Mais tocadas</p>
                      </div>
                      <p className="text-[#D4900A] text-[8px] font-bold">Ver todas →</p>
                    </div>
                    {[
                      { n: 1, t: "Cio da Terra", a: "Pena Branca e Xavantinho", v: "5.276", bg: "bg-[#D4900A]" },
                      { n: 2, t: "Vontade Dividida", a: "Milionário e José Rico", v: "5.258", bg: "bg-[#B5865A]" },
                      { n: 3, t: "Mensagem do Além", a: "Milionário e José Rico", v: "5.242", bg: "bg-[#F0EAE0]" },
                    ].map((c) => (
                      <div key={c.n} className="bg-white border border-[#F0EAE0] rounded-lg px-2.5 py-2 mb-1.5 flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full ${c.bg} text-white text-[9px] font-bold flex items-center justify-center shrink-0 ${c.n === 3 ? "text-[#7A5C44]" : ""}`}>{c.n}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#4A2810] text-[10px] font-bold truncate">{c.t}</p>
                          <p className="text-[#B5865A] text-[8px] truncate">{c.a}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[#D4900A] text-[9px] font-bold">{c.v}</p>
                          <p className="text-[#B5865A] text-[7px]">toques</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#4A2810] flex items-center justify-around py-2">
                    {[
                      { l: "Início", a: true },
                      { l: "Cifras", a: false },
                      { l: "", c: true },
                      { l: "Cursos", a: false },
                      { l: "Afinador", a: false },
                    ].map((n, i) => (
                      <div key={i} className="flex flex-col items-center gap-0.5">
                        {n.c ? (
                          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                            <img src="/logo.jpg" alt="" className="w-5 h-5 rounded" />
                          </div>
                        ) : (
                          <>
                            <div className={`w-1 h-1 rounded-full ${n.a ? "bg-[#D4900A]" : "bg-[#B5865A]"}`} />
                            <span className={`text-[7px] ${n.a ? "text-[#D4900A]" : "text-[#B5865A]"}`}>{n.l}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Badge "AO VIVO" */}
              <div className="absolute -top-2 -right-2 bg-[#D4900A] text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 z-30">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                AO VIVO
              </div>
            </div>

            {/* ── FEATURES DIREITA ── */}
            <div className="space-y-4 order-3">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
                    </svg>
                  ),
                  title: "YouTube embutido",
                  desc: "O clipe original na mesma tela da cifra. Escuta e toca junto.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <ellipse cx="12" cy="9" rx="9" ry="4"/>
                      <path strokeLinecap="round" d="M3 9v6c0 2.21 4.03 4 9 4s9-1.79 9-4V9"/>
                    </svg>
                  ),
                  title: "Palhetada visual",
                  desc: "Setas ↓↑ pra você acertar o ritmo de cada música.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                    </svg>
                  ),
                  title: "Funciona como app",
                  desc: "Instala na tela do celular e usa offline, igual aplicativo.",
                },
              ].map((f, i) => (
                <div key={i} className="bg-[#3A1F08]/80 backdrop-blur-sm border border-[#7A4520]/50 rounded-2xl p-5 hover:border-[#D4900A]/50 transition-all group">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 bg-[#D4900A]/15 rounded-xl flex items-center justify-center text-[#D4900A] group-hover:bg-[#D4900A]/25 transition-colors">
                      {f.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-white text-base mb-1">{f.title}</h3>
                      <p className="text-[#B5865A] text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA + lista de benefícios extras */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#D4900A] to-[#A36C05] rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden">
              {/* Padrão de fundo */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)"/>
                </svg>
              </div>
              <div className="relative">
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-3">E ainda tem mais</p>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Afinador online, playlists, histórico, busca inteligente e cursos em vídeo.
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-7 max-w-xl mx-auto">
                  Tudo o que você precisa pra sair do violão empoeirado e tocar suas músicas favoritas em poucas semanas.
                </p>
                <Link
                  href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
                  className="inline-block bg-[#4A2810] hover:bg-[#2C1A0E] text-white font-black text-base md:text-lg px-8 md:px-12 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
                >
                  Quero acesso vitalício por R$ 17,90 →
                </Link>
                <p className="text-white/70 text-xs mt-4">
                  ✓ Pagamento único · ✓ Garantia 7 dias · ✓ Sem mensalidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Simples assim</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810] mb-3">
              Em 3 passos você já está tocando
            </h2>
            <p className="text-[#7A5C44] text-lg max-w-xl mx-auto">
              Aprenda a tocar as melhores modas, com cifras simplificadas — sem precisar de professor ou anos de treino.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Garanta seu acesso",
                desc: "Pagamento único de R$ 17,90. Acesso imediato e vitalício — sem mensalidade, sem burocracia.",
                icon: <IcoPen className="w-7 h-7 text-white" />,
              },
              {
                step: "02",
                title: "Busque a música que quer",
                desc: "Pesquise por nome, artista ou ritmo. Mais de 7.200 cifras sertanejas disponíveis.",
                icon: <IcoSearch className="w-7 h-7 text-white" />,
              },
              {
                step: "03",
                title: "Toque do seu jeito",
                desc: "Ajuste o tom, ative o rolar automático e use os diagramas de acorde. É só tocar.",
                icon: <IcoGuitar className="w-7 h-7 text-white" />,
              },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-[#D4900A]/30" />
                )}
                <div className="w-16 h-16 bg-[#D4900A] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {s.icon}
                </div>
                <div className="text-[#D4900A] font-black text-xs tracking-widest mb-2">{s.step}</div>
                <h3 className="font-display font-bold text-[#4A2810] text-xl mb-2">{s.title}</h3>
                <p className="text-[#7A5C44] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
              className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
            >
              Quero meu acesso vitalício →
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 bg-white border-y border-[#E0D8CE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">O que dizem por aí</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810]">
              Violonistas que já usam todo dia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                nome: "Marcos Alves",
                local: "Goiânia, GO",
                foto: "/depoimento-marcos.jpg",
                texto: "Finalmente um site que tem o repertório certo. Toda cifra que procuro de modão antigo eu acho aqui. Tô aprendendo música que o meu pai tocava e nunca achei em lugar nenhum.",
              },
              {
                nome: "Ana Paula Ferreira",
                local: "Uberlândia, MG",
                foto: "/depoimento-ana.jpg",
                texto: "O negócio de transpor o tom mudou minha vida. Sou soprano, sempre que tocava as músicas ficavam altas demais. Agora ajusto com um clique. Simplesmente incrível.",
              },
              {
                nome: "João Rodrigues",
                local: "Ribeirão Preto, SP",
                foto: "/depoimento-joao.jpg",
                texto: "Comecei do zero há 3 meses. Com as cifras do Cifra Raiz e os diagramas de acorde já tô tocando Chitãozinho e Xororó nas reuniões de família. Vale cada centavo.",
              },
            ].map((t) => (
              <div key={t.nome} className="bg-[#FAF7F2] border border-[#E0D8CE] rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <IcoStar key={s}/>)}
                </div>
                <p className="text-[#4A2810] text-sm leading-relaxed mb-5 italic">&ldquo;{t.texto}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-[#E0D8CE] pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4900A]/30 shrink-0">
                    <img src={t.foto} alt={t.nome} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#4A2810] text-sm">{t.nome}</p>
                    <p className="text-[#B5865A] text-xs">{t.local}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="py-20 px-4 bg-[#FAF7F2]" id="planos">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Investimento</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810] mb-4">
              Pague uma vez. Acesse para sempre.
            </h2>
            <p className="text-[#7A5C44] text-lg">Sem assinatura. Sem renovação automática.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#4A2810] border-2 border-[#D4900A] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 bg-[#D4900A] text-white text-xs font-black px-3 py-1 rounded-full">
                OFERTA ESPECIAL
              </div>

              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="pricing-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M20 8 L36 3 L36 22 Q36 27 32 29 L30 30 Q27 31 27 34 Q27 37 30 38 L32 39 Q36 40 36 44 L36 51 Q36 56 31 56 L25 56 Q20 56 20 51 L20 44 Q20 40 24 39 L26 38 Q29 37 29 34 Q29 31 26 30 L24 29 Q20 27 20 22 Z" fill="#D4900A"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pricing-pattern)"/>
                </svg>
              </div>

              <div className="mb-6 relative">
                <p className="text-[#D4900A] font-bold text-sm uppercase tracking-wider mb-1">Acesso Vitalício</p>
                <div className="flex items-end gap-2">
                  <p className="font-display text-5xl font-black text-white">R$ 17,90</p>
                </div>
                <p className="text-[#D4900A] font-semibold text-sm mt-2 flex items-center gap-1.5">
                  <IcoCheck />
                  Pague uma vez. Acesse para sempre.
                </p>
              </div>

              <ul className="space-y-3 mb-8 relative">
                {[
                  "7.200+ cifras sertanejas revisadas",
                  "Transposição de tom com 1 clique",
                  "Diagramas de acorde interativos",
                  "Player do YouTube integrado",
                  "Palhetada de cada estilo",
                  "Afinador de violão",
                  "Cursos em vídeo completos",
                  "Conteúdo exclusivo semanal",
                  "Sem mensalidade, sem renovação",
                  "Acesso antecipado a novidades",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#FAF7F2]">
                    <span className="text-[#D4900A]"><IcoCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
                className="block text-center bg-[#D4900A] hover:bg-[#A36C05] text-white font-black py-4 rounded-xl transition-all shadow-lg hover:scale-105 relative text-lg"
              >
                Garantir acesso vitalício →
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center flex flex-col items-center gap-3">
            <span className="text-[#D4900A]">
              <IcoShield className="w-12 h-12" />
            </span>
            <p className="font-bold text-[#4A2810] text-lg">Garantia incondicional de 7 dias</p>
            <p className="text-[#7A5C44] text-sm max-w-sm">
              Não gostou? Devolvemos 100% do seu dinheiro sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white border-t border-[#E0D8CE]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Dúvidas frequentes</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810]">
              Perguntas &amp; Respostas
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-[#4A2810] text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#D4900A]/20 rounded-2xl flex items-center justify-center">
              <IcoGuitar className="w-10 h-10 text-[#D4900A]" />
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Seja o sucesso do churrasco!
          </h2>
          <p className="text-[#D4900A] font-bold text-xl mb-4">
            Aprenda a tocar as melhores modas, com cifras simplificadas.
          </p>
          <p className="text-[#B5865A] text-lg mb-4 max-w-xl mx-auto">
            Mais de 7.200 músicas sertanejas. Acordes certos. Tom ajustável.
            Um pagamento único de R$ 17,90 — acesso para sempre.
          </p>
          <p className="text-[#D4900A] font-bold text-sm mb-10">
            Garantia de 7 dias ou seu dinheiro de volta.
          </p>
          <Link
            href="https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4"
            className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-xl px-14 py-5 rounded-2xl transition-all shadow-2xl hover:scale-105"
          >
            Garantir meu acesso agora →
          </Link>
        </div>
      </section>

    </div>
  );
}
