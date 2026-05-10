import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MODULOS, PROGRESSO_MOCK } from "@/lib/dados";
import { IconVideo, IconTimer, IconCheck } from "@/components/Icons";

export default function CursosPage() {
  const modulosComProgresso = MODULOS.map((modulo) => {
    const progresso = PROGRESSO_MOCK.find((p) => p.moduloId === modulo.id);
    const assistidas = progresso?.aulasAssistidas.length ?? 0;
    const total = modulo.aulas.length;
    const pct = total > 0 ? Math.round((assistidas / total) * 100) : 0;
    return { ...modulo, assistidas, pct };
  });

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        <div className="bg-[#4A2810] text-[#FAF7F2] py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-3xl font-bold mb-2">
              Cursos de <span className="text-[#D4900A]">Violão</span>
            </h1>
            <p className="text-[#B5865A]">
              Do zero ao palco — 3 módulos progressivos com videoaulas.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modulosComProgresso.map((modulo, idx) => {
              return (
                <Link
                  key={modulo.id}
                  href={`/cursos/${modulo.id}`}
                  className={`relative block bg-white rounded-2xl border-2 p-6 transition-all ${
                    modulo.pct === 100
                      ? "border-green-400 hover:shadow-md"
                      : modulo.pct > 0
                      ? "border-[#D4900A] hover:shadow-md"
                      : "border-[#F0EAE0] hover:border-[#B5865A] hover:shadow-sm"
                  }`}
                >
                  {/* Badge status */}
                  {modulo.pct === 100 && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      Concluído
                    </span>
                  )}
                  {modulo.pct > 0 && modulo.pct < 100 && (
                    <span className="absolute top-4 right-4 bg-[#D4900A] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      Em andamento
                    </span>
                  )}

                  {/* Número do módulo */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-display text-xl shrink-0 ${
                      modulo.pct === 100 ? "bg-green-500 text-white" :
                      modulo.pct > 0    ? "bg-[#4A2810] text-[#D4900A]" :
                                          "bg-[#F0EAE0] text-[#7A5C44]"
                    }`}>
                      {modulo.pct === 100 ? <IconCheck size={18} /> : modulo.numero}
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-bold text-[#4A2810]">
                        {modulo.titulo}
                      </h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        modulo.nivel === "Iniciante"     ? "bg-green-100 text-green-700"   :
                        modulo.nivel === "Intermediário" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                      }`}>
                        {modulo.nivel}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#7A5C44] text-sm mb-4 leading-relaxed">
                    {modulo.descricao}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[#B5865A] mb-4">
                    <span className="flex items-center gap-1"><IconVideo size={13} /> {modulo.aulas.length} aulas</span>
                    <span className="flex items-center gap-1"><IconTimer size={13} /> {modulo.duracao}</span>
                  </div>

                  {/* Barra de progresso */}
                  {modulo.pct > 0 && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#7A5C44]">
                          {modulo.assistidas}/{modulo.aulas.length} aulas
                        </span>
                        <span className={`font-bold ${modulo.pct === 100 ? "text-green-600" : "text-[#D4900A]"}`}>
                          {modulo.pct}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#F0EAE0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${modulo.pct === 100 ? "bg-green-500" : "bg-[#D4900A]"}`}
                          style={{ width: `${modulo.pct}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {modulo.pct === 0 && (
                    <div className="mt-2">
                      <span className="text-sm font-semibold text-[#4A2810]">
                        Começar módulo →
                      </span>
                    </div>
                  )}
                  {modulo.pct > 0 && modulo.pct < 100 && (
                    <div className="mt-3">
                      <span className="text-sm font-semibold text-[#D4900A]">
                        Continuar →
                      </span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
