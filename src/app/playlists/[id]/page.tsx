"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPlaylists, removerCifra, reordenarCifras, type Playlist, type PlaylistCifra } from "@/lib/playlists";
import { IconPlaylist, IconNote, IconPlay, IconX, IconGuitar, IconArrowUp, IconArrowDown } from "@/components/Icons";

export default function PlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [tocandoIdx, setTocandoIdx] = useState<number | null>(null);

  useEffect(() => {
    const pl = getPlaylists().find((p) => p.id === id) ?? null;
    setPlaylist(pl);
  }, [id]);

  function refresh() {
    setPlaylist(getPlaylists().find((p) => p.id === id) ?? null);
  }

  function handleRemover(cifraId: string) {
    removerCifra(id, cifraId);
    refresh();
  }

  function moverCima(idx: number) {
    if (!playlist || idx === 0) return;
    const novas = [...playlist.cifras];
    [novas[idx - 1], novas[idx]] = [novas[idx], novas[idx - 1]];
    reordenarCifras(id, novas);
    refresh();
  }

  function moverBaixo(idx: number) {
    if (!playlist || idx === playlist.cifras.length - 1) return;
    const novas = [...playlist.cifras];
    [novas[idx], novas[idx + 1]] = [novas[idx + 1], novas[idx]];
    reordenarCifras(id, novas);
    refresh();
  }

  if (!playlist) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-[#FAF7F2] py-20">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-4"><IconPlaylist size={26} className="text-[#B5865A]" /></div>
            <h1 className="font-display text-2xl font-bold text-[#4A2810] mb-2">Playlist não encontrada</h1>
            <Link href="/playlists" className="text-[#D4900A] hover:underline">← Voltar para playlists</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const atual = tocandoIdx !== null ? playlist.cifras[tocandoIdx] : null;

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        {/* Breadcrumb */}
        <div className="bg-[#F0EAE0] border-b border-[#E0D8CE] px-4 py-3">
          <div className="max-w-3xl mx-auto text-sm text-[#B5865A]">
            <Link href="/playlists" className="hover:text-[#D4900A]">Playlists</Link>
            <span className="mx-2">›</span>
            <span className="text-[#4A2810]">{playlist.nome}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Header da playlist */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-[#4A2810] flex items-center justify-center shrink-0">
              <IconNote size={32} className="text-[#D4900A]" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-2xl font-bold text-[#4A2810]">{playlist.nome}</h1>
              <p className="text-[#B5865A] text-sm mt-1">
                {playlist.cifras.length} música{playlist.cifras.length !== 1 ? "s" : ""}
              </p>
              {playlist.cifras.length > 0 && (
                <button
                  onClick={() => setTocandoIdx(0)}
                  className="mt-3 bg-[#D4900A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors flex items-center gap-1.5"
                >
                  <IconPlay size={13} /> Tocar repertório
                </button>
              )}
            </div>
          </div>

          {/* Player de sequência */}
          {tocandoIdx !== null && atual && (
            <div className="bg-[#4A2810] text-[#FAF7F2] rounded-2xl p-5 mb-6">
              <p className="text-[#D4900A] text-xs font-bold uppercase tracking-wider mb-2">
                Tocando agora — {tocandoIdx + 1}/{playlist.cifras.length}
              </p>
              <h2 className="font-display text-xl font-bold mb-0.5">{atual.titulo}</h2>
              <p className="text-[#B5865A] text-sm mb-4">{atual.artista}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href={`/cifras/${atual.id}?playlist=${id}&pos=${tocandoIdx}`}
                  className="bg-[#D4900A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors"
                >
                  Ver cifra completa →
                </Link>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    disabled={tocandoIdx === 0}
                    onClick={() => setTocandoIdx((i) => (i ?? 0) - 1)}
                    className="w-9 h-9 rounded-full bg-[#7A4520] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#D4900A] transition-colors"
                  >
                    ‹
                  </button>
                  <span className="text-xs text-[#B5865A] tabular-nums">{tocandoIdx + 1}/{playlist.cifras.length}</span>
                  <button
                    disabled={tocandoIdx === playlist.cifras.length - 1}
                    onClick={() => setTocandoIdx((i) => (i ?? 0) + 1)}
                    className="w-9 h-9 rounded-full bg-[#7A4520] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#D4900A] transition-colors"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => setTocandoIdx(null)}
                    className="w-9 h-9 rounded-full bg-[#7A4520] text-[#B5865A] flex items-center justify-center hover:bg-red-900 hover:text-white transition-colors"
                  >
                    <IconX size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Lista de músicas */}
          {playlist.cifras.length === 0 ? (
            <div className="text-center py-16 bg-white border border-[#F0EAE0] rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-3"><IconGuitar size={26} className="text-[#B5865A]" /></div>
              <p className="text-[#4A2810] font-bold mt-3 mb-1">Playlist vazia</p>
              <p className="text-[#B5865A] text-sm mb-5">Adicione músicas diretamente da página de qualquer cifra.</p>
              <Link href="/cifras" className="text-[#D4900A] font-semibold hover:underline text-sm">
                Explorar cifras →
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {playlist.cifras.map((c, i) => (
                <div
                  key={c.id}
                  className={`flex items-center gap-3 bg-white border-2 rounded-xl px-4 py-3 transition-all ${
                    tocandoIdx === i ? "border-[#D4900A] shadow-md" : "border-[#F0EAE0]"
                  }`}
                >
                  {/* Número / play */}
                  <button
                    onClick={() => setTocandoIdx(i === tocandoIdx ? null : i)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                      tocandoIdx === i
                        ? "bg-[#D4900A] text-white"
                        : "bg-[#F0EAE0] text-[#7A5C44] hover:bg-[#D4900A] hover:text-white"
                    }`}
                  >
                    {tocandoIdx === i ? <IconPlay size={12} /> : i + 1}
                  </button>

                  {/* Info */}
                  <Link href={`/cifras/${c.id}`} className="flex-1 min-w-0 group">
                    <p className="font-bold text-[#4A2810] group-hover:text-[#D4900A] transition-colors truncate text-sm">
                      {c.titulo}
                    </p>
                    <p className="text-xs text-[#B5865A] truncate">{c.artista}</p>
                  </Link>

                  {/* Tom + ritmo */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <span className="text-xs bg-[#4A2810] text-[#D4900A] px-2 py-0.5 rounded-full font-mono">
                      Tom {c.tom}
                    </span>
                    <span className="text-xs text-[#B5865A] bg-[#F0EAE0] px-2 py-0.5 rounded-full">
                      {c.ritmo}
                    </span>
                  </div>

                  {/* Controles de ordem + remover */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => moverCima(i)} disabled={i === 0} className="w-6 h-6 rounded text-[#B5865A] hover:text-[#4A2810] disabled:opacity-30 transition-colors flex items-center justify-center"><IconArrowUp size={13} /></button>
                    <button onClick={() => moverBaixo(i)} disabled={i === playlist.cifras.length - 1} className="w-6 h-6 rounded text-[#B5865A] hover:text-[#4A2810] disabled:opacity-30 transition-colors flex items-center justify-center"><IconArrowDown size={13} /></button>
                    <button onClick={() => handleRemover(c.id)} className="w-6 h-6 rounded text-[#B5865A] hover:text-red-500 transition-colors flex items-center justify-center ml-1"><IconX size={13} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
