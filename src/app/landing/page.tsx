"use client";
import { useState } from "react";
import Link from "next/link";

// ─── Ícones SVG profissionais ─────────────────────────────────────────────────
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

// Ícone de guitarra/violão
const IcoGuitar = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
  </svg>
);

// Ícone de nota musical
const IcoMusic = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
    <circle cx="4.5" cy="17" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

// Ícone de play/vídeo
const IcoPlay = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
  </svg>
);

// Ícone de bateria/ritmo
const IcoDrum = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <ellipse cx="12" cy="9" rx="9" ry="4"/>
    <path strokeLinecap="round" d="M3 9v6c0 2.21 4.03 4 9 4s9-1.79 9-4V9"/>
    <path strokeLinecap="round" d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4"/>
  </svg>
);

// Ícone de alvo/precisão
const IcoTarget = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

// Ícone de smartphone
const IcoPhone = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
  </svg>
);

// Ícone de escrita/cadastro
const IcoPen = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
  </svg>
);

// Ícone de busca
const IcoSearch = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"/>
  </svg>
);

// Ícone de usuário
const IcoUser = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
  </svg>
);

// Ícone de escudo (garantia)
const IcoShield = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
  </svg>
);

// Ícone de aviso/frustração
const IcoAlert = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
  </svg>
);

// Ícone de X (problema)
const IcoXCircle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

// ─── FAQ accordion ────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Preciso saber música para usar o Cifra Raiz?",
    a: "Não! A plataforma foi pensada para todos os níveis. Temos cifras classificadas por dificuldade — do iniciante absoluto ao avançado — e os diagramas de acorde aparecem na tela só de clicar no acorde.",
  },
  {
    q: "As cifras são de qual estilo?",
    a: "Foco total em sertanejo, modão e raiz: Zezé Di Camargo & Luciano, Chitãozinho & Xororó, Leonardo, Almir Sater, Renato Tacia, Eduardo Costa, Luan Santana e muito mais. Mais de 7.200 músicas do gênero.",
  },
  {
    q: "O pagamento é único ou mensal?",
    a: "É um pagamento único de R$ 24,90 e o acesso é vitalício. Você paga uma vez e acessa para sempre, sem mensalidade, sem renovação automática.",
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

// ─── Página principal ─────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans">

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav className="bg-[#4A2810] sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <img src="/logo.jpg" alt="Cifra Raiz" className="h-9 w-auto rounded-lg" />
          <Link
            href="https://ggcheckout.app/checkout/v3/ZcwBqKfKbcVK9h18IaE5"
            className="bg-[#D4900A] hover:bg-[#A36C05] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-md"
          >
            Garantir acesso →
          </Link>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#4A2810] pb-20 pt-16 px-4">
        {/* Decoração de fundo — padrão de violões em SVG */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="guitar-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M30 10 L50 4 L50 30 Q50 36 45 38 L42 39 Q38 40 38 44 Q38 48 42 49 L45 50 Q50 51 50 57 L50 66 Q50 72 44 72 L36 72 Q30 72 30 66 L30 57 Q30 51 35 50 L38 49 Q42 48 42 44 Q42 40 38 39 L35 38 Q30 36 30 30 Z" fill="#D4900A"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#guitar-pattern)"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4900A]/20 border border-[#D4900A]/40 text-[#D4900A] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <IcoGuitar className="w-3.5 h-3.5" />
            Mais de 7.200 cifras de sertanejo e modão
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Seja o{" "}
            <span className="text-[#D4900A]">sucesso do churrasco!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#D4900A] font-bold text-xl md:text-2xl max-w-2xl mx-auto mb-4 leading-snug">
            Aprenda a tocar as melhores modas,<br className="hidden md:block"/> com cifras simplificadas.
          </p>
          <p className="text-[#C4A882] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A maior plataforma de cifras sertanejas do Brasil. Mais de 7.200 músicas
            com acorde certo, tom transponível, palhetada e vídeo do original — tudo
            num lugar só.
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="https://ggcheckout.app/checkout/v3/ZcwBqKfKbcVK9h18IaE5"
              className="bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-center"
            >
              Garantir meu acesso vitalício →
            </Link>
          </div>

          {/* Mini social proof */}
          <div className="flex items-center justify-center gap-3 text-[#B5865A] text-sm">
            <div className="flex -space-x-2">
              {[0,1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#7A4520] border-2 border-[#4A2810] flex items-center justify-center">
                  <IcoUser className="w-4 h-4 text-[#D4900A]" />
                </div>
              ))}
            </div>
            <span>+3.000 violonistas já estão tocando</span>
          </div>
        </div>
      </section>



      {/* ── SOLUÇÃO / FEATURES ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#4A2810]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">A solução</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Tudo que você precisa para tocar sertanejo —<br className="hidden md:block"/> numa plataforma só
            </h2>
            <p className="text-[#D4900A] font-semibold text-xl mb-3">
              Aprenda a tocar as melhores modas, com cifras simplificadas.
            </p>
            <p className="text-[#B5865A] text-base max-w-2xl mx-auto">
              O Cifra Raiz foi construído por violonistas, para violonistas. Cada detalhe foi pensado
              para você tocar mais e se frustrar menos — e ser aquele cara que arrasa no churrasco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <IcoGuitar className="w-6 h-6 text-[#D4900A]" />,
                title: "7.200+ cifras revisadas",
                desc: "Todas as músicas sertanejas que você quer, num só lugar. Sem buscar em 10 sites diferentes.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#D4900A]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                  </svg>
                ),
                title: "Transpõe o tom na hora",
                desc: "Toque em qualquer tonalidade com um clique. Sem capotraste, sem reafinar, sem calcular casa a casa.",
              },
              {
                icon: <IcoPlay className="w-6 h-6 text-[#D4900A]" />,
                title: "Vídeo original embutido",
                desc: "O clipe do YouTube aparece direto na cifra. Ouça a música e acompanhe os acordes na mesma tela.",
              },
              {
                icon: <IcoDrum className="w-6 h-6 text-[#D4900A]" />,
                title: "Palhetada de cada ritmo",
                desc: "Sertanejo universitário, modão, guarânia, xote — veja o padrão exato de palhetada para cada estilo.",
              },
              {
                icon: <IcoTarget className="w-6 h-6 text-[#D4900A]" />,
                title: "Diagrama de acordes",
                desc: "Clique em qualquer acorde da cifra e veja o diagrama com os dedos exatos. Perfeito para quem está começando.",
              },
              {
                icon: <IcoPhone className="w-6 h-6 text-[#D4900A]" />,
                title: "Funciona como app",
                desc: "Instale na tela do celular e use onde quiser. A cifra rola sozinha enquanto você toca, sem precisar parar.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#3A1F08] border border-[#7A4520] rounded-2xl p-6 hover:border-[#D4900A] transition-colors group">
                <div className="w-12 h-12 bg-[#D4900A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4900A]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-[#B5865A] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ─────────────────────────────────────────────────── */}
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
                desc: "Pagamento único de R$ 24,90. Acesso imediato e vitalício — sem mensalidade, sem burocracia.",
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
              href="https://ggcheckout.app/checkout/v3/ZcwBqKfKbcVK9h18IaE5"
              className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
            >
              Quero meu acesso vitalício →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ───────────────────────────────────────────────────── */}
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
                <p className="text-[#4A2810] text-sm leading-relaxed mb-5 italic">"{t.texto}"</p>
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

      {/* ── PLANOS ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#FAF7F2]" id="planos">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Investimento</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810] mb-4">
              Pague uma vez. Acesse para sempre.
            </h2>
            <p className="text-[#7A5C44] text-lg">Sem assinatura. Sem renovação automática.</p>
          </div>

          {/* Card único — Acesso Vitalício */}
          <div className="max-w-md mx-auto">
            <div className="bg-[#4A2810] border-2 border-[#D4900A] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#D4900A] text-white text-xs font-black px-3 py-1 rounded-full">
                OFERTA ESPECIAL
              </div>

              {/* Decoração de fundo */}
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
                  <p className="font-display text-5xl font-black text-white">R$ 24,90</p>
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
                href="https://ggcheckout.app/checkout/v3/ZcwBqKfKbcVK9h18IaE5"
                className="block text-center bg-[#D4900A] hover:bg-[#A36C05] text-white font-black py-4 rounded-xl transition-all shadow-lg hover:scale-105 relative text-lg"
              >
                Garantir acesso vitalício →
              </Link>
            </div>
          </div>

          {/* Garantia */}
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-[#E0D8CE]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Dúvidas frequentes</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810]">
              Perguntas & Respostas
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
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
            Um pagamento único de R$ 24,90 — acesso para sempre.
          </p>
          <p className="text-[#D4900A] font-bold text-sm mb-10">
            Garantia de 7 dias ou seu dinheiro de volta.
          </p>
          <Link
            href="https://ggcheckout.app/checkout/v3/ZcwBqKfKbcVK9h18IaE5"
            className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-xl px-14 py-5 rounded-2xl transition-all shadow-2xl hover:scale-105"
          >
            Garantir meu acesso agora →
          </Link>
        </div>
      </section>


    </div>
  );
}
