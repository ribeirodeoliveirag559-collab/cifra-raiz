"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MODULOS, PROGRESSO_MOCK } from "@/lib/dados";
import { IconBook, IconVideo, IconTimer, IconCheck, IconChevronDown, IconPlay, IconCheckCircle, IconStar } from "@/components/Icons";

export default function ModuloPage() {
  const { modulo: moduloId } = useParams<{ modulo: string }>();
  const modulo = MODULOS.find((m) => m.id === moduloId);

  const progressoSalvo = PROGRESSO_MOCK.find((p) => p.moduloId === moduloId);
  const [assistidas, setAssistidas] = useState<Set<string>>(
    new Set(progressoSalvo?.aulasAssistidas ?? [])
  );
  const [aulaAtiva, setAulaAtiva] = useState<string | null>(null);

  if (!modulo) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-[#FAF7F2] py-20">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-4"><IconBook size={26} className="text-[#B5865A]" /></div>
            <h1 className="font-display text-2xl font-bold text-[#4A2810] mb-2">Módulo não encontrado</h1>
            <Link href="/cursos" className="text-[#D4900A] hover:underline">← Voltar para cursos</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const totalAssistidas = assistidas.size;
  const pct = Math.round((totalAssistidas / modulo.aulas.length) * 100);

  function toggleAssistida(aulaId: string) {
    setAssistidas((prev) => {
      const novo = new Set(prev);
      if (novo.has(aulaId)) novo.delete(aulaId);
      else novo.add(aulaId);
      return novo;
    });
  }

  const aulaAtivaObj = modulo.aulas.find((a) => a.id === aulaAtiva);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        {/* Breadcrumb */}
        <div className="bg-[#F0EAE0] border-b border-[#E0D8CE] px-4 py-3">
          <div className="max-w-5xl mx-auto text-sm text-[#B5865A]">
            <Link href="/cursos" className="hover:text-[#D4900A]">Cursos</Link>
            <span className="mx-2">›</span>
            <span className="text-[#4A2810]">{modulo.titulo}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Lista de aulas */}
            <div className="lg:col-span-2">
              {/* Header do módulo */}
              <div className="bg-[#4A2810] text-[#FAF7F2] rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#D4900A] text-white flex items-center justify-center font-bold font-display text-2xl shrink-0">
                    {modulo.numero}
                  </div>
                  <div className="flex-1">
                    <h1 className="font-display text-2xl font-bold mb-1">{modulo.titulo}</h1>
                    <p className="text-[#B5865A] text-sm">{modulo.descricao}</p>
                    <div className="flex gap-3 mt-2 text-xs text-[#B5865A]">
                      <span className="flex items-center gap-1"><IconVideo size={13} /> {modulo.aulas.length} aulas</span>
                      <span className="flex items-center gap-1"><IconTimer size={13} /> {modulo.duracao}</span>
                      <span className={`px-2 py-0.5 rounded-full font-semibold ${
                        modulo.nivel === "Iniciante"     ? "bg-green-800 text-green-200"   :
                        modulo.nivel === "Intermediário" ? "bg-yellow-800 text-yellow-200" : "bg-red-900 text-red-200"
                      }`}>{modulo.nivel}</span>
                    </div>
                  </div>
                </div>

                {/* Progresso */}
                <div className="mt-5">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#B5865A]">{totalAssistidas}/{modulo.aulas.length} aulas assistidas</span>
                    <span className="font-bold text-[#D4900A]">{pct}%</span>
                  </div>
                  <div className="h-2 bg-[#7A4520] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4900A] rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lista de aulas */}
              <div className="space-y-2">
                {modulo.aulas.map((aula) => {
                  const vista = assistidas.has(aula.id);
                  const ativa = aulaAtiva === aula.id;

                  return (
                    <div
                      key={aula.id}
                      className={`bg-white rounded-xl border-2 transition-all overflow-hidden ${
                        ativa ? "border-[#D4900A] shadow-md" : "border-[#F0EAE0] hover:border-[#B5865A]"
                      }`}
                    >
                      {/* Linha principal da aula */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setAulaAtiva(ativa ? null : aula.id)}
                        onKeyDown={(e) => e.key === "Enter" && setAulaAtiva(ativa ? null : aula.id)}
                        className="w-full flex items-center gap-4 p-4 text-left cursor-pointer"
                      >
                        {/* Check */}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleAssistida(aula.id); }}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            vista
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-[#D0C8BC] hover:border-[#D4900A]"
                          }`}
                          title={vista ? "Marcar como não assistida" : "Marcar como assistida"}
                        >
                          {vista && <IconCheck size={12} />}
                        </button>

                        {/* Número */}
                        <span className="text-xs font-mono text-[#B5865A] w-5 shrink-0">
                          {aula.numero.toString().padStart(2, "0")}
                        </span>

                        {/* Título */}
                        <span className={`flex-1 font-medium text-sm ${ativa ? "text-[#D4900A]" : "text-[#4A2810]"}`}>
                          {aula.titulo}
                        </span>

                        {/* Duração */}
                        <span className="text-xs text-[#B5865A] shrink-0">{aula.duracao}</span>

                        {/* Chevron */}
                        <IconChevronDown size={16} className={`text-[#B5865A] transition-transform shrink-0 ${ativa ? "rotate-180" : ""}`} />
                      </div>

                      {/* Expansão */}
                      {ativa && (
                        <div className="px-4 pb-4 pt-0 border-t border-[#F0EAE0]">
                          <p className="text-sm text-[#7A5C44] mb-4 pt-3">{aula.descricao}</p>

                          {/* Player placeholder */}
                          <div className="bg-[#2C1A0E] rounded-xl aspect-video flex flex-col items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-[#D4900A]/20 border-2 border-[#D4900A] flex items-center justify-center mb-2 cursor-pointer hover:bg-[#D4900A]/40 transition-colors">
                              <IconPlay size={22} className="text-[#D4900A] ml-1" />
                            </div>
                            <p className="text-[#B5865A] text-sm">Videoaula em breve</p>
                          </div>

                          <button
                            onClick={() => toggleAssistida(aula.id)}
                            className={`w-full py-2 rounded-full text-sm font-semibold transition-colors ${
                              vista
                                ? "bg-[#F0EAE0] text-[#7A5C44] hover:bg-red-50 hover:text-red-600"
                                : "bg-green-500 text-white hover:bg-green-600"
                            }`}
                          >
                            {vista ? "Aula assistida — desmarcar" : "Marcar como assistida"}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Resumo do progresso */}
              <div className="bg-white border border-[#F0EAE0] rounded-2xl p-5 sticky top-20">
                <h3 className="font-bold text-[#4A2810] mb-4">Seu progresso</h3>

                <div className="relative w-28 h-28 mx-auto mb-4">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F0EAE0" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke={pct === 100 ? "#22c55e" : "#D4900A"}
                      strokeWidth="3"
                      strokeDasharray={`${pct} ${100 - pct}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-2xl font-bold font-display ${pct === 100 ? "text-green-500" : "text-[#D4900A]"}`}>
                      {pct}%
                    </span>
                    <span className="text-xs text-[#B5865A]">concluído</span>
                  </div>
                </div>

                <div className="text-center text-sm text-[#7A5C44] mb-4">
                  {totalAssistidas} de {modulo.aulas.length} aulas
                </div>

                {pct === 100 ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5"><IconStar size={14} className="text-green-600" /><p className="text-green-700 font-bold text-sm">Módulo concluído!</p></div>
                  </div>
                ) : (
                  <div className="text-xs text-[#B5865A] text-center">
                    {modulo.aulas.length - totalAssistidas} aulas restantes
                  </div>
                )}

                <div className="mt-4 space-y-2">
                  <Link
                    href="/cursos"
                    className="block text-center bg-[#F0EAE0] text-[#4A2810] py-2 rounded-full text-sm font-semibold hover:bg-[#D4900A] hover:text-white transition-colors"
                  >
                    ← Todos os módulos
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block text-center text-sm text-[#D4900A] font-semibold hover:underline"
                  >
                    Ir para o dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
