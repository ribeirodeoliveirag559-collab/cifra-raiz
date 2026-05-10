"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CIFRAS } from "@/lib/dados";
import { getRecentes, tempoRelativo, type CifraRecente } from "@/lib/historico";
import { getPlaylists, type Playlist } from "@/lib/playlists";
import { IconGuitar, IconPlaylist, IconClock, IconNote } from "@/components/Icons";

export default function CifrasPage() {
  const [busca, setBusca] = useState("");
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [recentes, setRecentes] = useState<CifraRecente[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setRecentes(getRecentes());
    setPlaylists(getPlaylists());
  }, []);

  const buscando = busca.trim() !== "" || mostrarTodas;

  const cifrasFiltradas = CIFRAS.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    c.artista.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        {/* Banner */}
        <div className="bg-[#4A2810] text-[#FAF7F2] py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-3xl font-bold mb-2">
              Biblioteca de <span className="text-[#D4900A]">Cifras</span>
            </h1>
            <p className="text-[#B5865A]">
              Sertanejo, modão e raiz — tudo com transposição de tom, ritmo e diagramas.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Busca */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Buscar por música ou artista..."
              value={busca}
              onChange={(e) => { setBusca(e.target.value); setMostrarTodas(false); }}
              className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 bg-white text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A]"
            />
          </div>

          {/* ── MODO BUSCA ── */}
          {buscando && (
            <section>
              <p className="text-sm text-[#B5865A] mb-4">
                {cifrasFiltradas.length} resultado{cifrasFiltradas.length !== 1 ? "s" : ""} encontrado{cifrasFiltradas.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cifrasFiltradas.map((c) => <CardCifra key={c.id} cifra={c} />)}
              </div>
              {cifrasFiltradas.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-3"><IconGuitar size={24} className="text-[#B5865A]" /></div>
                  <p className="text-[#7A5C44]">Nenhuma cifra encontrada.</p>
                  <button
                    onClick={() => { setBusca(""); setMostrarTodas(false); }}
                    className="mt-4 text-[#D4900A] font-semibold hover:underline"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </section>
          )}

          {/* ── MODO PADRÃO: MÚSICAS RECENTES ── */}
          {!buscando && (
            <>
              {/* Card de playlists */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <IconPlaylist size={18} className="text-[#D4900A]" />
                    <h2 className="font-display text-xl font-bold text-[#4A2810]">Playlists</h2>
                  </div>
                  <Link href="/playlists" className="text-sm text-[#D4900A] font-semibold hover:underline">
                    Ver todas →
                  </Link>
                </div>

                {playlists.length === 0 ? (
                  <Link
                    href="/playlists"
                    className="flex items-center gap-4 bg-white border-2 border-dashed border-[#D0C8BC] rounded-2xl px-5 py-4 hover:border-[#D4900A] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F0EAE0] flex items-center justify-center shrink-0 group-hover:bg-[#D4900A] transition-colors">
                      <span className="text-[#7A5C44] group-hover:text-white text-lg transition-colors">+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A2810] text-sm">Criar primeira playlist</p>
                      <p className="text-xs text-[#B5865A]">Monte seu repertório e toque em sequência</p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {playlists.map((pl) => (
                      <Link
                        key={pl.id}
                        href={`/playlists/${pl.id}`}
                        className="shrink-0 w-40 bg-white border border-[#F0EAE0] rounded-2xl p-4 hover:border-[#D4900A] hover:shadow-sm transition-all group"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#4A2810] flex items-center justify-center mb-3">
                          <IconNote size={16} className="text-[#D4900A]" />
                        </div>
                        <p className="font-bold text-[#4A2810] text-sm group-hover:text-[#D4900A] transition-colors truncate">
                          {pl.nome}
                        </p>
                        <p className="text-xs text-[#B5865A] mt-0.5">
                          {pl.cifras.length} música{pl.cifras.length !== 1 ? "s" : ""}
                        </p>
                      </Link>
                    ))}
                    <Link
                      href="/playlists"
                      className="shrink-0 w-40 bg-[#F0EAE0] border-2 border-dashed border-[#D0C8BC] rounded-2xl p-4 flex flex-col items-center justify-center gap-1 hover:border-[#D4900A] transition-all"
                    >
                      <span className="text-2xl text-[#B5865A]">+</span>
                      <span className="text-xs text-[#7A5C44] font-semibold">Nova playlist</span>
                    </Link>
                  </div>
                )}
              </section>

              <section>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <IconClock size={18} className="text-[#D4900A]" />
                    <h2 className="font-display text-xl font-bold text-[#4A2810]">
                      Músicas recentes
                    </h2>
                  </div>
                  {recentes.length > 0 && (
                    <button
                      onClick={() => setBusca(" ")}
                      className="text-sm text-[#D4900A] font-semibold hover:underline"
                    >
                      Ver todas →
                    </button>
                  )}
                </div>

                {recentes.length === 0 ? (
                  /* Estado vazio */
                  <div className="bg-white border border-[#F0EAE0] rounded-2xl px-6 py-14 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-4">
                      <IconGuitar size={28} className="text-[#B5865A]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#4A2810] mb-2">
                      Nenhuma música tocada ainda
                    </h3>
                    <p className="text-sm text-[#B5865A] mb-6 max-w-xs mx-auto">
                      Abra qualquer cifra e ela aparecerá aqui para você continuar de onde parou.
                    </p>
                    <button
                      onClick={() => setBusca(" ")}
                      className="bg-[#D4900A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors"
                    >
                      Explorar cifras
                    </button>
                  </div>
                ) : (
                  /* Lista de recentes */
                  <div className="space-y-3">
                    {recentes.map((c, i) => (
                      <Link
                        key={c.id}
                        href={`/cifras/${c.id}`}
                        className="flex items-center gap-4 bg-white border border-[#F0EAE0] rounded-2xl px-5 py-4 hover:border-[#D4900A] hover:shadow-md transition-all group"
                      >
                        {/* Número */}
                        <span className="w-7 h-7 rounded-full bg-[#F0EAE0] text-[#7A5C44] text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-[#D4900A] group-hover:text-white transition-colors">
                          {i + 1}
                        </span>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[#4A2810] group-hover:text-[#D4900A] transition-colors truncate">
                            {c.titulo}
                          </p>
                          <p className="text-sm text-[#B5865A] truncate">{c.artista}</p>
                        </div>

                        {/* Badges */}
                        <div className="hidden sm:flex items-center gap-2 shrink-0">
                          <span className="text-xs bg-[#4A2810] text-[#D4900A] px-2 py-0.5 rounded-full font-mono">
                            Tom {c.tom}
                          </span>
                          <span className="text-xs text-[#B5865A] bg-[#F0EAE0] px-2 py-0.5 rounded-full">
                            {c.ritmo}
                          </span>
                        </div>

                        {/* Tempo */}
                        <span className="text-xs text-[#B5865A] shrink-0 tabular-nums">
                          {tempoRelativo(c.visitadoEm)}
                        </span>

                        <span className="text-[#B5865A] shrink-0">›</span>
                      </Link>
                    ))}
                  </div>
                )}
              </section>

              {/* Atalho para explorar todas */}
              <div className="mt-10 bg-[#4A2810] rounded-2xl px-6 py-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-[#FAF7F2] text-lg">Explorar biblioteca</p>
                  <p className="text-[#B5865A] text-sm mt-0.5">
                    {CIFRAS.length} cifras de sertanejo, modão e raiz
                  </p>
                </div>
                <button
                  onClick={() => setMostrarTodas(true)}
                  className="shrink-0 bg-[#D4900A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors"
                >
                  Ver todas
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function CardCifra({ cifra: c }: { cifra: (typeof CIFRAS)[0] }) {
  return (
    <Link
      href={`/cifras/${c.id}`}
      className="bg-white rounded-xl p-5 border border-[#F0EAE0] hover:shadow-md hover:border-[#D4900A] transition-all group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="font-bold text-[#4A2810] group-hover:text-[#D4900A] transition-colors truncate">
            {c.titulo}
          </h3>
          <p className="text-sm text-[#7A5C44] truncate">{c.artista}</p>
        </div>
        <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-semibold ${
          c.dificuldade === "iniciante"     ? "bg-green-100 text-green-700"  :
          c.dificuldade === "intermediario" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
        }`}>
          {c.dificuldade === "iniciante" ? "Iniciante" : c.dificuldade === "intermediario" ? "Intermediário" : "Avançado"}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs bg-[#4A2810] text-[#FAF7F2] px-2 py-0.5 rounded-full">
          Tom {c.tom}
        </span>
        <span className="text-xs text-[#B5865A] bg-[#F0EAE0] px-2 py-0.5 rounded-full">
          {c.ritmo}
        </span>
      </div>
    </Link>
  );
}
