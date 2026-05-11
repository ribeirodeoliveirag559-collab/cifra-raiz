"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MODULOS, PROGRESSO_MOCK } from "@/lib/dados";
import type { Cifra } from "@/lib/dados";
import { getTopCifras } from "@/lib/cifras-service";
import {
  IconFilm, IconBook, IconCheckCircle, IconGuitar,
  IconFire, IconTrophy, IconTarget, IconMusic, IconChat, IconCheck,
} from "@/components/Icons";

export default function DashboardPage() {
  const [mostrarEmBreve, setMostrarEmBreve] = useState(false);
  const [topCifras, setTopCifras] = useState<Cifra[]>([]);

  useEffect(() => {
    getTopCifras(5).then(setTopCifras);
  }, []);

  const modulosComProgresso = MODULOS.map((modulo) => {
    const progresso = PROGRESSO_MOCK.find((p) => p.moduloId === modulo.id);
    const assistidas = progresso?.aulasAssistidas.length ?? 0;
    const total = modulo.aulas.length;
    const pct = total > 0 ? Math.round((assistidas / total) * 100) : 0;
    return { ...modulo, assistidas, pct };
  });

  const emAndamento  = modulosComProgresso.filter((m) => m.pct > 0 && m.pct < 100);
  const naoIniciados = modulosComProgresso.filter((m) => m.pct === 0);
  const concluidos   = modulosComProgresso.filter((m) => m.pct === 100);

  const totalAssistidas = modulosComProgresso.reduce((s, m) => s + m.assistidas, 0);
  const totalAulas      = modulosComProgresso.reduce((s, m) => s + m.aulas.length, 0);

  const stats = [
    { label: "Aulas assistidas",      valor: `${totalAssistidas}/${totalAulas}`, Icon: IconFilm,         cor: "text-[#D4900A]",  bg: "bg-[#FDF6E8]" },
    { label: "Módulos em andamento",  valor: emAndamento.length,                 Icon: IconBook,         cor: "text-blue-500",   bg: "bg-blue-50"   },
    { label: "Módulos concluídos",    valor: concluidos.length,                  Icon: IconCheckCircle,  cor: "text-green-500",  bg: "bg-green-50"  },
    { label: "Cifras salvas",         valor: "12",                               Icon: IconGuitar,       cor: "text-[#D4900A]",  bg: "bg-[#FDF6E8]" },
  ];

  const atalhos = [
    { label: "Afinador",            href: "/afinador", Icon: IconTarget },
    { label: "Todos os cursos",     href: "/cursos",   Icon: IconBook   },
    { label: "Pedir música",        href: "/pedidos",  Icon: IconMusic  },
    { label: "Comunidade WhatsApp", href: "#",         Icon: IconChat   },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">

        {/* Boas-vindas */}
        <div className="bg-[#4A2810] text-[#FAF7F2] py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#B5865A] text-sm mb-1">Bem-vindo de volta,</p>
            <h1 className="font-display text-2xl font-bold">Zé das Couves</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-4 border border-[#F0EAE0] flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.Icon size={18} className={s.cor} />
                </div>
                <div>
                  <div className={`font-bold text-lg ${s.cor}`}>{s.valor}</div>
                  <div className="text-xs text-[#B5865A] leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Coluna principal */}
            <div className="lg:col-span-2 space-y-6">

              {/* Wrapper com overlay Em Breve nos módulos */}
              <div
                className="relative rounded-2xl cursor-pointer"
                onClick={() => setMostrarEmBreve(true)}
              >
                {emAndamento.length > 0 && (
                  <section className="mb-6">
                    <h2 className="font-display text-xl font-bold text-[#4A2810] mb-4">Continuar aprendendo</h2>
                    <div className="space-y-3">
                      {emAndamento.map((m) => (
                        <div key={m.id}
                          className="block bg-white rounded-2xl border border-[#F0EAE0] p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#4A2810] text-[#D4900A] flex items-center justify-center font-bold font-display text-base shrink-0">
                                {m.numero}
                              </div>
                              <div>
                                <p className="font-bold text-[#4A2810]">{m.titulo}</p>
                                <p className="text-xs text-[#B5865A]">{m.nivel} · {m.aulas.length} aulas</p>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-[#D4900A] shrink-0">{m.pct}%</span>
                          </div>
                          <div className="h-2 bg-[#F0EAE0] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4900A] rounded-full transition-all" style={{ width: `${m.pct}%` }} />
                          </div>
                          <p className="text-xs text-[#B5865A] mt-2">{m.assistidas} de {m.aulas.length} aulas assistidas</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {naoIniciados.length > 0 && (
                  <section className="mb-6">
                    <h2 className="font-display text-xl font-bold text-[#4A2810] mb-4">Próximos módulos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {naoIniciados.slice(0, 4).map((m) => (
                        <div key={m.id}
                          className="bg-white rounded-xl border border-[#F0EAE0] p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#F0EAE0] text-[#7A5C44] flex items-center justify-center text-sm font-bold font-display shrink-0">
                              {m.numero}
                            </div>
                            <p className="font-semibold text-[#4A2810] text-sm">{m.titulo}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                              m.nivel === "Iniciante" ? "bg-green-100 text-green-700" :
                              m.nivel === "Intermediário" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                            }`}>{m.nivel}</span>
                            <span className="text-xs text-[#B5865A]">{m.aulas.length} aulas</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {concluidos.length > 0 && (
                  <section>
                    <h2 className="font-display text-xl font-bold text-[#4A2810] mb-4">Concluídos</h2>
                    <div className="space-y-2">
                      {concluidos.map((m) => (
                        <div key={m.id}
                          className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                          <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                            <IconCheck size={14} />
                          </div>
                          <span className="font-medium text-green-800 text-sm">{m.titulo}</span>
                          <span className="ml-auto text-xs text-green-600">{m.aulas.length} aulas</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Overlay Em Breve */}
                {mostrarEmBreve && (
                  <div
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl cursor-pointer"
                    style={{ background: "rgba(0,0,0,0.65)" }}
                    onClick={(e) => { e.stopPropagation(); setMostrarEmBreve(false); }}
                  >
                    <div className="animate-respirar flex flex-col items-center gap-4 select-none">
                      <span className="text-5xl font-display font-bold text-white drop-shadow-lg tracking-wide">
                        Em Breve!
                      </span>
                      <span className="text-[#D4900A] text-sm font-semibold tracking-widest uppercase">
                        Videoaulas em produção
                      </span>
                    </div>
                    <p className="absolute bottom-6 text-white/40 text-xs">toque para fechar</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              <section className="bg-white border border-[#F0EAE0] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <IconFire size={16} className="text-[#D4900A]" />
                    <h2 className="font-display text-lg font-bold text-[#4A2810]">Top da semana</h2>
                  </div>
                  <span className="text-xs text-[#B5865A]">mais tocadas</span>
                </div>
                <ol className="space-y-3">
                  {topCifras.map((c, i) => (
                    <li key={c.id}>
                      <Link href={`/cifras/${c.id}`} className="flex items-center gap-3 group">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          i === 0 ? "bg-[#D4900A] text-white" :
                          i === 1 ? "bg-[#B5865A] text-white" :
                          i === 2 ? "bg-[#7A5C44] text-white" : "bg-[#F0EAE0] text-[#7A5C44]"
                        }`}>{i + 1}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#4A2810] group-hover:text-[#D4900A] transition-colors truncate">{c.titulo}</p>
                          <p className="text-xs text-[#B5865A] truncate">{c.artista}</p>
                        </div>
                        <span className="text-xs text-[#B5865A] shrink-0 tabular-nums">{c.tocadasSemana?.toLocaleString("pt-BR")}×</span>
                      </Link>
                      {i < topCifras.length - 1 && <div className="mt-3 border-b border-[#F0EAE0]" />}
                    </li>
                  ))}
                </ol>
                <Link href="/cifras" className="block text-center mt-4 text-sm text-[#D4900A] font-semibold hover:underline">
                  Ver todas as cifras →
                </Link>
              </section>

              <section className="bg-[#4A2810] text-[#FAF7F2] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <IconTrophy size={14} className="text-[#D4900A]" />
                  <p className="text-[#D4900A] text-xs font-bold uppercase tracking-wider">Desafio da semana</p>
                </div>
                <h3 className="font-display text-lg font-bold mb-1">Evidências</h3>
                <p className="text-[#B5865A] text-sm mb-1">Chitãozinho & Xororó</p>
                <p className="text-xs text-[#B5865A] mb-4">Aprenda o refrão completo e compartilhe no grupo do WhatsApp.</p>
                <Link href="/cifras/evidencias"
                  className="block text-center bg-[#D4900A] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors">
                  Praticar agora
                </Link>
              </section>

              <section className="bg-white border border-[#F0EAE0] rounded-2xl p-5">
                <h3 className="font-bold text-[#4A2810] mb-3">Atalhos</h3>
                <div className="space-y-1">
                  {atalhos.map((a) => (
                    <Link key={a.href} href={a.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F0EAE0] transition-colors text-sm text-[#4A2810]">
                      <a.Icon size={16} className="text-[#B5865A] shrink-0" />
                      <span>{a.label}</span>
                      <span className="ml-auto text-[#B5865A]">›</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
