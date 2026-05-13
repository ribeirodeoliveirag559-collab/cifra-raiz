"use client";
import { useState } from "react";
import Link from "next/link";

// ─── Ícones inline ────────────────────────────────────────────────────────────
const IcoCheck = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);
const IcoX = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
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
const IcoGuitar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
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
    q: "Como funciona o plano gratuito?",
    a: "No plano gratuito você acessa todas as cifras, o afinador e pode criar playlists. O plano PRO libera os cursos em vídeo, o modo auto-rolagem avançado e os conteúdos exclusivos de técnica.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem fidelidade, sem multa. Cancele a qualquer momento pelo painel e seu acesso continua ativo até o final do período pago.",
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
            href="/cadastro"
            className="bg-[#D4900A] hover:bg-[#A36C05] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-md"
          >
            Começar Grátis →
          </Link>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#4A2810] pb-20 pt-16 px-4">
        {/* Decoração de fundo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex flex-wrap gap-16 p-8 text-[#D4900A] text-7xl overflow-hidden">
          {Array.from({length: 20}).map((_, i) => <span key={i}>🎸</span>)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4900A]/20 border border-[#D4900A]/40 text-[#D4900A] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            🔥 Mais de 7.200 cifras de sertanejo e modão
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Toque as músicas que{" "}
            <span className="text-[#D4900A]">te criaram</span>
            {" "}— do jeito que elas merecem
          </h1>

          {/* Subheadline */}
          <p className="text-[#C4A882] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A maior plataforma de cifras sertanejas do Brasil. Mais de 7.200 músicas
            com acorde certo, tom transponível, palhetada e vídeo do original — tudo
            num lugar só.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/cadastro"
              className="bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-center"
            >
              Começar Grátis Agora →
            </Link>
            <Link
              href="/cifras"
              className="border-2 border-[#7A5C44] hover:border-[#D4900A] text-[#C4A882] hover:text-[#D4900A] font-semibold text-base px-8 py-4 rounded-2xl transition-colors w-full sm:w-auto text-center"
            >
              Ver as cifras
            </Link>
          </div>

          {/* Mini social proof */}
          <div className="flex items-center justify-center gap-2 text-[#B5865A] text-sm">
            <div className="flex -space-x-2">
              {["🤠","🎸","🎵","🪗","🎶"].map((e, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#7A4520] border-2 border-[#4A2810] flex items-center justify-center text-xs">{e}</div>
              ))}
            </div>
            <span>+3.000 violonistas já estão tocando</span>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ───────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white border-y border-[#E0D8CE]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "7.200+", label: "Cifras de sertanejo" },
            { n: "50+",    label: "Artistas cadastrados" },
            { n: "100%",   label: "Acordes revisados" },
            { n: "0 R$",   label: "Para começar" },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-display text-4xl md:text-5xl font-black text-[#D4900A]">{s.n}</p>
              <p className="text-[#7A5C44] text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Você conhece essa frustração?</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810] leading-tight">
              Aprender violão sertanejo na internet<br className="hidden md:block"/> é um pesadelo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "😤", pain: "Cifras espalhadas em 10 sites diferentes, cada uma com um acorde diferente" },
              { icon: "😵", pain: "Tab completamente errada — você toca e não soa igual à música" },
              { icon: "😒", pain: "Nenhum site tem o repertório sertanejo completo que você quer" },
              { icon: "🤯", pain: "Tem que mudar de aba pra ver o YouTube, perder o lugar na cifra e começar de novo" },
              { icon: "😓", pain: "Não sabe a palhetada certa — fica soando mecânico, sem o balanço da música" },
              { icon: "😞", pain: "Acordes em tom errado — precisa de violão com capotraste ou re-afinar na mão" },
            ].map((p) => (
              <div key={p.icon} className="flex items-start gap-4 bg-white border border-[#E0D8CE] rounded-2xl p-5">
                <span className="text-3xl shrink-0">{p.icon}</span>
                <p className="text-[#4A2810] font-medium text-sm leading-relaxed">{p.pain}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#7A5C44] text-lg font-medium">
              Você não tem problema de talento. Você só não tinha a ferramenta certa.
            </p>
            <p className="text-[#D4900A] font-bold text-xl mt-2">Até agora.</p>
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
            <p className="text-[#B5865A] text-lg max-w-2xl mx-auto">
              O Cifra Raiz foi construído por violonistas, para violonistas. Cada detalhe foi pensado
              para você tocar mais e se frustrar menos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🎸",
                title: "7.200+ cifras revisadas",
                desc: "Todas as músicas sertanejas que você quer, num só lugar. Sem buscar em 10 sites diferentes.",
              },
              {
                emoji: "🎵",
                title: "Transpõe o tom na hora",
                desc: "Toque em qualquer tonalidade com um clique. Sem capotraste, sem reafinar, sem calcular casa a casa.",
              },
              {
                emoji: "📺",
                title: "Vídeo original embutido",
                desc: "O clipe do YouTube aparece direto na cifra. Ouça a música e acompanhe os acordes na mesma tela.",
              },
              {
                emoji: "🥁",
                title: "Palhetada de cada ritmo",
                desc: "Sertanejo universitário, modão, guarânia, xote — veja o padrão exato de palhetada para cada estilo.",
              },
              {
                emoji: "🎯",
                title: "Diagrama de acordes",
                desc: "Clique em qualquer acorde da cifra e veja o diagrama com os dedos exatos. Perfeito para quem está começando.",
              },
              {
                emoji: "📱",
                title: "Funciona como app",
                desc: "Instale na tela do celular e use onde quiser. A cifra rola sozinha enquanto você toca, sem precisar parar.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#3A1F08] border border-[#7A4520] rounded-2xl p-6 hover:border-[#D4900A] transition-colors group">
                <div className="w-12 h-12 bg-[#D4900A]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#D4900A]/20 transition-colors">
                  {f.emoji}
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
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810]">
              Em 3 passos você já está tocando
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Crie sua conta grátis",
                desc: "Cadastro em menos de 1 minuto. Sem cartão de crédito, sem burocracia.",
                emoji: "✍️",
              },
              {
                step: "02",
                title: "Busque a música que quer",
                desc: "Pesquise por nome, artista ou ritmo. Mais de 7.200 cifras sertanejas disponíveis.",
                emoji: "🔍",
              },
              {
                step: "03",
                title: "Toque do seu jeito",
                desc: "Ajuste o tom, ative o rolar automático e use os diagramas de acorde. É só tocar.",
                emoji: "🎸",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-[#D4900A]/30" />
                )}
                <div className="w-16 h-16 bg-[#D4900A] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {s.emoji}
                </div>
                <div className="text-[#D4900A] font-black text-xs tracking-widest mb-2">{s.step}</div>
                <h3 className="font-display font-bold text-[#4A2810] text-xl mb-2">{s.title}</h3>
                <p className="text-[#7A5C44] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/cadastro"
              className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-lg px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
            >
              Quero começar agora →
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
                foto: "🤠",
                texto: "Finalmente um site que tem o repertório certo. Toda cifra que procuro de modão antigo eu acho aqui. Tô aprendendo música que o meu pai tocava e nunca achei em lugar nenhum.",
              },
              {
                nome: "Ana Paula Ferreira",
                local: "Uberlândia, MG",
                foto: "👩‍🎸",
                texto: "O negócio de transpor o tom mudou minha vida. Sou soprano, sempre que tocava as músicas ficavam altas demais. Agora ajusto com um clique. Simplesmente incrível.",
              },
              {
                nome: "João Rodrigues",
                local: "Ribeirão Preto, SP",
                foto: "🧑‍🎤",
                texto: "Comecei do zero há 3 meses. Com as cifras do Cifra Raiz e os diagramas de acorde já tô tocando Chitãozinho e Xororó nas reuniões de família. Vale cada centavo.",
              },
            ].map((t) => (
              <div key={t.nome} className="bg-[#FAF7F2] border border-[#E0D8CE] rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <IcoStar key={s}/>)}
                </div>
                <p className="text-[#4A2810] text-sm leading-relaxed mb-5 italic">"{t.texto}"</p>
                <div className="flex items-center gap-3 border-t border-[#E0D8CE] pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0EAE0] flex items-center justify-center text-xl">{t.foto}</div>
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
            <p className="text-[#D4900A] font-bold text-sm uppercase tracking-widest mb-3">Escolha seu plano</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#4A2810] mb-4">
              Comece grátis. Evolua quando quiser.
            </h2>
            <p className="text-[#7A5C44] text-lg">Sem fidelidade. Cancele quando quiser.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Plano Grátis */}
            <div className="bg-white border-2 border-[#E0D8CE] rounded-3xl p-8">
              <div className="mb-6">
                <p className="text-[#7A5C44] font-bold text-sm uppercase tracking-wider mb-1">Grátis</p>
                <p className="font-display text-5xl font-black text-[#4A2810]">R$ 0</p>
                <p className="text-[#B5865A] text-sm mt-1">Para sempre</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acesso a todas as 7.200+ cifras",
                  "Transposição de tom",
                  "Diagramas de acorde",
                  "Afinador de violão",
                  "Playlists pessoais",
                  "Player do YouTube integrado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#4A2810]">
                    <span className="text-green-500"><IcoCheck /></span>
                    {item}
                  </li>
                ))}
                {[
                  "Cursos em vídeo",
                  "Conteúdo exclusivo PRO",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#B5865A]">
                    <span className="text-[#D0C8BC]"><IcoX /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/cadastro"
                className="block text-center bg-[#F0EAE0] hover:bg-[#E0D8CE] text-[#4A2810] font-bold py-3 rounded-xl transition-colors"
              >
                Criar conta grátis
              </Link>
            </div>

            {/* Plano PRO */}
            <div className="bg-[#4A2810] border-2 border-[#D4900A] rounded-3xl p-8 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#D4900A] text-white text-xs font-black px-3 py-1 rounded-full">
                MAIS POPULAR
              </div>
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-[#D4900A] text-9xl absolute -bottom-4 -right-4">🎸</div>
              </div>

              <div className="mb-6 relative">
                <p className="text-[#D4900A] font-bold text-sm uppercase tracking-wider mb-1">PRO</p>
                <div className="flex items-end gap-2">
                  <p className="font-display text-5xl font-black text-white">R$ 19</p>
                  <p className="text-[#B5865A] text-base mb-1">/mês</p>
                </div>
                <p className="text-[#B5865A] text-sm mt-1">ou R$ 149/ano <span className="text-[#D4900A] font-bold">(economize 35%)</span></p>
              </div>

              <ul className="space-y-3 mb-8 relative">
                {[
                  "Tudo do plano Grátis",
                  "Cursos em vídeo completos",
                  "Técnicas de palhetada avançadas",
                  "Conteúdo exclusivo semanal",
                  "Suporte prioritário",
                  "Acesso antecipado a novidades",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#FAF7F2]">
                    <span className="text-[#D4900A]"><IcoCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/cadastro"
                className="block text-center bg-[#D4900A] hover:bg-[#A36C05] text-white font-black py-3 rounded-xl transition-all shadow-lg hover:scale-105 relative"
              >
                Assinar PRO →
              </Link>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-10 text-center flex flex-col items-center gap-2">
            <span className="text-4xl">🛡️</span>
            <p className="font-bold text-[#4A2810]">Garantia de 7 dias</p>
            <p className="text-[#7A5C44] text-sm max-w-sm">
              Não gostou? Devolvemos 100% do seu dinheiro sem burocracia, sem pergunta.
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
          <div className="text-6xl mb-6">🎸</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Sua primeira cifra<br/>está te esperando
          </h2>
          <p className="text-[#B5865A] text-lg mb-10 max-w-xl mx-auto">
            Mais de 7.200 músicas sertanejas. Acordes certos. Tom ajustável.
            Comece agora — é grátis, sempre foi.
          </p>
          <Link
            href="/cadastro"
            className="inline-block bg-[#D4900A] hover:bg-[#A36C05] text-white font-black text-xl px-14 py-5 rounded-2xl transition-all shadow-2xl hover:scale-105"
          >
            Criar minha conta grátis →
          </Link>
          <p className="text-[#7A5C44] text-sm mt-5">
            Sem cartão de crédito · Sem compromisso · Cancela quando quiser
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#3A1F08] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo.jpg" alt="Cifra Raiz" className="h-10 w-auto rounded-lg" />
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#7A5C44]">
            <Link href="/cifras"    className="hover:text-[#D4900A] transition-colors">Cifras</Link>
            <Link href="/cursos"    className="hover:text-[#D4900A] transition-colors">Cursos</Link>
            <Link href="/afinador"  className="hover:text-[#D4900A] transition-colors">Afinador</Link>
            <Link href="/cadastro"  className="hover:text-[#D4900A] transition-colors">Cadastro</Link>
            <Link href="/login"     className="hover:text-[#D4900A] transition-colors">Login</Link>
          </div>
          <p className="text-[#5A3A20] text-xs text-center">
            © 2026 Cifra Raiz · Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
