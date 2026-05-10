import Link from "next/link";
import { IconFire } from "@/components/Icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import AnuncioModal from "@/components/AnuncioModal";
import { CIFRAS } from "@/lib/dados";

const SERTANEJO_TAGS = ["modão", "raiz", "sertanejo", "clássico", "guarânia", "viola"];

const topSertanejo = [...CIFRAS]
  .filter(
    (c) =>
      c.tags.some((t) => SERTANEJO_TAGS.includes(t.toLowerCase())) ||
      c.ritmo.toLowerCase().includes("sertanejo") ||
      c.ritmo.toLowerCase().includes("guarânia")
  )
  .sort((a, b) => (b.tocadasSemana ?? 0) - (a.tocadasSemana ?? 0))
  .slice(0, 3);

export default function LandingPage() {
  return (
    <>
      <AnuncioModal />
      <Header />

      {/* Carrossel hero */}
      <HeroCarousel />

      {/* Top Sertanejo da Semana */}
      <section className="py-10 px-4 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <IconFire size={22} className="text-[#D4900A]" />
                <h2 className="font-display text-2xl font-bold text-[#4A2810]">Mais tocadas da semana</h2>
              </div>
              <p className="text-xs text-[#B5865A] mt-0.5">Atualizado automaticamente por tocadas reais</p>
            </div>
            <Link href="/cifras" className="text-[#D4900A] font-semibold text-sm hover:underline shrink-0">
              Ver todas →
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {topSertanejo.map((c, i) => (
              <Link
                key={c.id}
                href={`/cifras/${c.id}`}
                className="flex items-center gap-4 bg-white border border-[#F0EAE0] rounded-2xl px-5 py-4 hover:border-[#D4900A] hover:shadow-md transition-all group"
              >
                {/* Posição */}
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-display text-base shrink-0 ${
                    i === 0
                      ? "bg-[#D4900A] text-white"
                      : i === 1
                      ? "bg-[#B5865A] text-white"
                      : "bg-[#F0EAE0] text-[#7A5C44]"
                  }`}
                >
                  {i + 1}
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#4A2810] group-hover:text-[#D4900A] transition-colors truncate">
                    {c.titulo}
                  </p>
                  <p className="text-sm text-[#B5865A] truncate">{c.artista}</p>
                </div>

                {/* Ritmo */}
                <span className="text-xs bg-[#F0EAE0] text-[#7A5C44] px-2 py-1 rounded-full font-medium hidden sm:block shrink-0">
                  {c.ritmo}
                </span>

                {/* Plays */}
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-[#D4900A] tabular-nums">
                    {c.tocadasSemana?.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-xs text-[#B5865A]">toques</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
