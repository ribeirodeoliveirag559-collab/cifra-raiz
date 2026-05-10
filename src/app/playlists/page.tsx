"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPlaylists, criarPlaylist, deletarPlaylist, type Playlist } from "@/lib/playlists";
import { IconPlaylist, IconNote, IconX } from "@/components/Icons";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [criando, setCriando] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(() => { setPlaylists(getPlaylists()); }, []);

  function handleCriar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim()) return;
    criarPlaylist(nome);
    setPlaylists(getPlaylists());
    setNome("");
    setCriando(false);
  }

  function handleDeletar(id: string) {
    deletarPlaylist(id);
    setPlaylists(getPlaylists());
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        <div className="bg-[#4A2810] text-[#FAF7F2] py-10 px-4">
          <div className="max-w-3xl mx-auto flex items-end justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold mb-1">
                Minhas <span className="text-[#D4900A]">Playlists</span>
              </h1>
              <p className="text-[#B5865A] text-sm">
                Monte seus repertórios e toque as músicas em sequência.
              </p>
            </div>
            <button
              onClick={() => setCriando(true)}
              className="shrink-0 bg-[#D4900A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors"
            >
              + Nova playlist
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8">

          {/* Modal criar playlist */}
          {criando && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4" onClick={() => setCriando(false)}>
              <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-display text-xl font-bold text-[#4A2810] mb-4">Nova playlist</h2>
                <form onSubmit={handleCriar} className="space-y-4">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Nome da playlist..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border border-[#E0D8CE] rounded-xl px-4 py-3 text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A]"
                  />
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setCriando(false)} className="flex-1 py-2.5 rounded-full border border-[#E0D8CE] text-[#7A5C44] text-sm font-semibold hover:bg-[#F0EAE0] transition-colors">
                      Cancelar
                    </button>
                    <button type="submit" className="flex-1 py-2.5 rounded-full bg-[#D4900A] text-white text-sm font-semibold hover:bg-[#A36C05] transition-colors">
                      Criar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Lista de playlists */}
          {playlists.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-4">
                <IconPlaylist size={28} className="text-[#B5865A]" />
              </div>
              <h2 className="font-display text-xl font-bold text-[#4A2810] mb-2">
                Nenhuma playlist ainda
              </h2>
              <p className="text-[#B5865A] text-sm mb-6 max-w-xs mx-auto">
                Crie seu primeiro repertório e organize as músicas que você quer tocar.
              </p>
              <button
                onClick={() => setCriando(true)}
                className="bg-[#D4900A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A36C05] transition-colors"
              >
                Criar primeira playlist
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {playlists.map((pl) => (
                <div key={pl.id} className="bg-white border border-[#F0EAE0] rounded-2xl p-5 hover:border-[#D4900A] hover:shadow-md transition-all group relative">
                  <Link href={`/playlists/${pl.id}`} className="block">
                    {/* Ícone */}
                    <div className="w-12 h-12 rounded-full bg-[#4A2810] flex items-center justify-center mb-4">
                      <IconNote size={18} className="text-[#D4900A]" />
                    </div>
                    <h2 className="font-display font-bold text-[#4A2810] text-lg group-hover:text-[#D4900A] transition-colors truncate">
                      {pl.nome}
                    </h2>
                    <p className="text-sm text-[#B5865A] mt-1">
                      {pl.cifras.length === 0
                        ? "Sem músicas ainda"
                        : `${pl.cifras.length} música${pl.cifras.length !== 1 ? "s" : ""}`}
                    </p>

                    {/* Preview das músicas */}
                    {pl.cifras.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {pl.cifras.slice(0, 3).map((c, i) => (
                          <p key={c.id} className="text-xs text-[#7A5C44] truncate">
                            {i + 1}. {c.titulo}
                          </p>
                        ))}
                        {pl.cifras.length > 3 && (
                          <p className="text-xs text-[#B5865A]">+{pl.cifras.length - 3} mais...</p>
                        )}
                      </div>
                    )}
                  </Link>

                  {/* Deletar */}
                  <button
                    onClick={() => handleDeletar(pl.id)}
                    className="absolute top-4 right-4 w-7 h-7 rounded-full text-[#B5865A] hover:bg-red-50 hover:text-red-500 transition-colors flex items-center justify-center text-sm"
                    title="Excluir playlist"
                  >
                    <IconX size={13} />
                  </button>
                </div>
              ))}

              {/* Card criar nova */}
              <button
                onClick={() => setCriando(true)}
                className="bg-[#F0EAE0] border-2 border-dashed border-[#D0C8BC] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:border-[#D4900A] hover:bg-[#FAF7F2] transition-all min-h-[140px]"
              >
                <span className="text-3xl text-[#B5865A]">+</span>
                <span className="text-sm font-semibold text-[#7A5C44]">Nova playlist</span>
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
