"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Cifra } from "@/lib/dados";
import { getCifraById } from "@/lib/cifras-service";
import { transporCifra, TONS } from "@/lib/transposicao";
import { PADROES_RITMO } from "@/lib/ritmos";
import { salvarRecente } from "@/lib/historico";
import { getPlaylists, adicionarCifra, criarPlaylist, type Playlist } from "@/lib/playlists";
import { IconGuitar, IconNote, IconPlay, IconPause, IconCheck } from "@/components/Icons";

// ─── Parser de linha com acordes inline ──────────────────────────────────────
// Entrada:  "[G]Quando eu te pe-[D]go pela mão"
// Saída:    acordes: "G              D"
//           letra:   "Quando eu te pego pela mão"
// Mantém posição horizontal dos acordes alinhada com a sílaba correta.

type LinhaAcordes = { tipo: "acorde-letra"; acordes: string; letra: string };
type LinhaSecao   = { tipo: "secao";        texto: string };
type LinhaTexto   = { tipo: "texto";        texto: string };
type LinhaVazia   = { tipo: "vazio" };
type Linha = LinhaAcordes | LinhaSecao | LinhaTexto | LinhaVazia;

const SECAO_RE = /^(Introdu[cç][aã]o|Refrão|Verso|Ponte|Solo|Pre-refrão|Pré-refrão|Coda)\s*[:\-]?/i;
const TOKEN_ACORDE_RE = /^[A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?(?:\d+)?(?:\/[A-G][#b]?)?$/;

function isLinhaDeAcordes(raw: string): boolean {
  const tokens = raw.trim().split(/\s+/);
  return tokens.length > 0 && tokens.every((t) => TOKEN_ACORDE_RE.test(t));
}

function parseLinha(raw: string): Linha {
  if (!raw.trim()) return { tipo: "vazio" };

  if (SECAO_RE.test(raw.trim())) return { tipo: "secao", texto: raw.trim() };

  // Linha sem colchetes: detecta se é só acordes (ex: "G  C  Am")
  if (!raw.includes("[")) {
    if (isLinhaDeAcordes(raw)) return { tipo: "acorde-letra", acordes: raw, letra: "" };
    return { tipo: "texto", texto: raw };
  }

  // Linha com acordes inline entre colchetes: separa acorde de letra
  let acordes = "";
  let letra = "";
  let i = 0;

  while (i < raw.length) {
    if (raw[i] === "[") {
      const end = raw.indexOf("]", i);
      if (end !== -1) {
        const acorde = raw.slice(i + 1, end);
        const pos = letra.length;
        while (acordes.length < pos) acordes += " ";
        acordes += acorde;
        i = end + 1;
        continue;
      }
    }
    letra += raw[i];
    i++;
  }

  // Linha só de acordes via colchetes (sem letra)
  if (!letra.trim()) return { tipo: "acorde-letra", acordes, letra: "" };

  return { tipo: "acorde-letra", acordes, letra };
}

// ─── Tipo de dados do YouTube ─────────────────────────────────────────────────
type YTInfo = {
  videoId: string;
  watchUrl: string;
  embedUrl: string;
  thumbnail: string;
  thumbnailHD: string;
};

// ─── Componente principal ─────────────────────────────────────────────────────

export default function CifraPage() {
  const { id } = useParams<{ id: string }>();
  const [cifra, setCifra] = useState<Cifra | null>(null);
  const [carregando, setCarregando] = useState(true);

  const [tomIdx, setTomIdx] = useState(0);
  const [rolando, setRolando] = useState(false);
  const [velocidade, setVelocidade] = useState(2);
  const [acordesFixados, setAcordesFixados] = useState<string[]>([]);

  // YouTube — montado a partir do youtubeId já salvo no banco
  const [ytInfo, setYtInfo]     = useState<YTInfo | null>(null);
  const [ytAberto, setYtAberto] = useState(false);

  function toggleAcorde(acorde: string) {
    setAcordesFixados((prev) =>
      prev.includes(acorde) ? prev.filter((a) => a !== acorde) : [...prev, acorde]
    );
  }
  const [modalPlaylist, setModalPlaylist] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [novaPlaylist, setNovaPlaylist] = useState("");
  const [adicionado, setAdicionado] = useState<string | null>(null);
  const conteudoRef = useRef<HTMLDivElement>(null);
  const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Busca a cifra no Supabase pelo id
  useEffect(() => {
    if (!id) return;
    setCarregando(true);
    getCifraById(id).then((data) => {
      setCifra(data);
      setCarregando(false);
    });
  }, [id]);

  const tomOriginalIdx = cifra ? TONS.indexOf(cifra.tom) : 0;
  const semitons = (tomIdx - tomOriginalIdx + 12) % 12;

  // Inicia tomIdx no tom original, registra histórico e busca vídeo no YouTube
  useEffect(() => {
    if (!cifra) return;
    setTomIdx(TONS.indexOf(cifra.tom));
    salvarRecente({ id: cifra.id, titulo: cifra.titulo, artista: cifra.artista, tom: cifra.tom, ritmo: cifra.ritmo });
    setPlaylists(getPlaylists());

    // Monta ytInfo direto do youtubeId já salvo no banco — sem chamada à API
    setYtAberto(false);
    if (cifra.youtubeId) {
      const vid = cifra.youtubeId;
      setYtInfo({
        videoId:     vid,
        watchUrl:    `https://www.youtube.com/watch?v=${vid}`,
        embedUrl:    `https://www.youtube-nocookie.com/embed/${vid}`,
        thumbnail:   `https://img.youtube.com/vi/${vid}/hqdefault.jpg`,
        thumbnailHD: `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`,
      });
    } else {
      setYtInfo(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cifra?.id]);

  function handleAdicionar(playlistId: string) {
    if (!cifra) return;
    adicionarCifra(playlistId, { id: cifra.id, titulo: cifra.titulo, artista: cifra.artista, tom: cifra.tom, ritmo: cifra.ritmo });
    setAdicionado(playlistId);
    setTimeout(() => { setAdicionado(null); setModalPlaylist(false); }, 1200);
  }

  function handleCriarEAdicionar(e: React.FormEvent) {
    e.preventDefault();
    if (!novaPlaylist.trim() || !cifra) return;
    const nova = criarPlaylist(novaPlaylist);
    adicionarCifra(nova.id, { id: cifra.id, titulo: cifra.titulo, artista: cifra.artista, tom: cifra.tom, ritmo: cifra.ritmo });
    setPlaylists(getPlaylists());
    setNovaPlaylist("");
    setAdicionado(nova.id);
    setTimeout(() => { setAdicionado(null); setModalPlaylist(false); }, 1200);
  }

  useEffect(() => {
    if (rolando && conteudoRef.current) {
      intervaloRef.current = setInterval(() => {
        conteudoRef.current?.scrollBy({ top: velocidade, behavior: "smooth" });
      }, 100);
    } else {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    }
    return () => { if (intervaloRef.current) clearInterval(intervaloRef.current); };
  }, [rolando, velocidade]);

  if (carregando) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-[#FAF7F2] py-20">
          <div className="flex flex-col items-center gap-4 text-[#B5865A]">
            <span className="w-8 h-8 border-2 border-[#D4900A]/30 border-t-[#D4900A] rounded-full animate-spin" />
            <p className="text-sm">Carregando cifra...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!cifra) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-[#FAF7F2] py-20">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#F0EAE0] flex items-center justify-center mx-auto mb-4"><IconGuitar size={26} className="text-[#B5865A]" /></div>
            <h1 className="font-display text-2xl font-bold text-[#4A2810] mb-2">Cifra não encontrada</h1>
            <Link href="/cifras" className="text-[#D4900A] hover:underline">← Voltar para cifras</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const cifraTransposta = transporCifra(cifra.cifra, semitons);
  const tomAtual = TONS[tomIdx];
  const linhas = cifraTransposta.split("\n").map(parseLinha);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FAF7F2]">
        {/* Breadcrumb */}
        <div className="bg-[#F0EAE0] border-b border-[#E0D8CE] px-4 py-3">
          <div className="max-w-4xl mx-auto text-sm text-[#B5865A]">
            <Link href="/cifras" className="hover:text-[#D4900A]">Cifras</Link>
            <span className="mx-2">›</span>
            <span className="text-[#4A2810]">{cifra.titulo}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Cabeçalho */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div className="flex-1">
              <h1 className="font-display text-3xl font-bold text-[#4A2810]">{cifra.titulo}</h1>
              <p className="text-[#7A5C44] mt-1 text-lg">{cifra.artista}</p>
              {/* Padrão de palhetada */}
              <PalhetadaRitmo ritmo={cifra.ritmo} />
            </div>

            {/* Card YouTube — link direto para o vídeo real */}
            <a
              href={ytInfo?.watchUrl ?? `https://www.youtube.com/results?search_query=${encodeURIComponent(cifra.artista + " " + cifra.titulo + " oficial")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 w-full sm:w-52 bg-white border-2 border-[#E0D8CE] rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-lg transition-all"
            >
              {/* Thumbnail real ou placeholder */}
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
                {ytInfo ? (
                  <img
                    src={ytInfo.thumbnail}
                    alt={`${cifra.titulo} — ${cifra.artista}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="#ffffff40" className="w-10 h-10"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                )}
                {/* Overlay play */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg viewBox="0 0 90 20" className="h-3 fill-red-600">
                    <path d="M27.9727 3.12324C27.6435 1.89498 26.6768 0.928192 25.4485 0.598976C23.2219 4.99491e-07 14.285 0 14.285 0C14.285 0 5.34807 4.99491e-07 3.12148 0.598976C1.89323 0.928192 0.926436 1.89498 0.597221 3.12324C-2.24288e-07 5.34983 0 10 0 10C0 10 -2.24288e-07 14.6502 0.597221 16.8768C0.926436 18.105 1.89323 19.0718 3.12148 19.401C5.34807 20 14.285 20 14.285 20C14.285 20 23.2219 20 25.4485 19.401C26.6768 19.0718 27.6435 18.105 27.9727 16.8768C28.5699 14.6502 28.5699 10 28.5699 10C28.5699 10 28.5699 5.34983 27.9727 3.12324Z"/>
                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                  </svg>
                  <span className="text-xs font-bold text-[#4A2810]">YouTube</span>
                </div>
                <p className="text-xs font-semibold text-[#4A2810] leading-tight line-clamp-1">{cifra.titulo}</p>
                <p className="text-xs text-[#B5865A] line-clamp-1">{cifra.artista}</p>
                <p className="text-[10px] text-red-500 font-semibold mt-1.5 group-hover:underline">
                  {ytInfo ? "▶ Abrir vídeo original" : "▶ Buscar no YouTube"}
                </p>
              </div>
            </a>
          </div>

          {/* ── Player YouTube ────────────────────────────────────────────── */}
          {ytInfo && (
            <div className="mb-6 rounded-2xl overflow-hidden border border-[#E0D8CE] shadow-sm bg-[#1a1a1a]">
              {ytAberto ? (
                <div className="relative aspect-video">
                  <iframe
                    src={`${ytInfo!.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${cifra.titulo} — ${cifra.artista}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                  <button
                    onClick={() => setYtAberto(false)}
                    className="absolute top-2 right-2 z-20 w-8 h-8 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center text-base font-bold transition-colors"
                    aria-label="Fechar player"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="relative aspect-video cursor-pointer group" onClick={() => setYtAberto(true)}>
                  <img
                    src={ytInfo!.thumbnailHD}
                    alt={`${cifra.titulo} — ${cifra.artista}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes("maxresdefault")) img.src = ytInfo!.thumbnail;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all shadow-2xl">
                      <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                    <p className="text-white font-semibold text-sm line-clamp-1">{cifra.titulo}</p>
                    <p className="text-white/70 text-xs">{cifra.artista} · Clique para assistir</p>
                  </div>
                  <a
                    href={ytInfo!.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <svg viewBox="0 0 90 20" className="h-2.5 fill-red-500 shrink-0">
                      <path d="M27.9727 3.12324C27.6435 1.89498 26.6768 0.928192 25.4485 0.598976C23.2219 4.99491e-07 14.285 0 14.285 0C14.285 0 5.34807 4.99491e-07 3.12148 0.598976C1.89323 0.928192 0.926436 1.89498 0.597221 3.12324C-2.24288e-07 5.34983 0 10 0 10C0 10 -2.24288e-07 14.6502 0.597221 16.8768C0.926436 18.105 1.89323 19.0718 3.12148 19.401C5.34807 20 14.285 20 14.285 20C14.285 20 23.2219 20 25.4485 19.401C26.6768 19.0718 27.6435 18.105 27.9727 16.8768C28.5699 14.6502 28.5699 10 28.5699 10C28.5699 10 28.5699 5.34983 27.9727 3.12324Z"/>
                      <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                    </svg>
                    Abrir no YouTube
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Controles */}
          <div className="bg-white border border-[#E0D8CE] rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#4A2810]">Tom:</span>
              <button
                onClick={() => setTomIdx((tomIdx - 1 + 12) % 12)}
                className="w-8 h-8 rounded-full bg-[#F0EAE0] text-[#4A2810] font-bold hover:bg-[#D4900A] hover:text-white transition-colors text-lg leading-none"
              >
                ‹
              </button>
              <span className="w-10 text-center font-bold text-[#D4900A] text-lg">{tomAtual}</span>
              <button
                onClick={() => setTomIdx((tomIdx + 1) % 12)}
                className="w-8 h-8 rounded-full bg-[#F0EAE0] text-[#4A2810] font-bold hover:bg-[#D4900A] hover:text-white transition-colors text-lg leading-none"
              >
                ›
              </button>
              {semitons !== 0 && (
                <button
                  onClick={() => setTomIdx(tomOriginalIdx)}
                  className="text-xs text-[#B5865A] hover:text-[#D4900A] underline ml-1"
                >
                  Original ({cifra.tom})
                </button>
              )}
            </div>

            {/* Botão playlist */}
            <button
              onClick={() => { setPlaylists(getPlaylists()); setModalPlaylist(true); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E0D8CE] text-[#7A5C44] text-xs font-semibold hover:border-[#D4900A] hover:text-[#D4900A] transition-colors"
            >
              <IconNote size={13} /> Adicionar à playlist
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm font-medium text-[#4A2810] hidden sm:block">Velocidade:</span>
              <input
                type="range" min={1} max={6} value={velocidade}
                onChange={(e) => setVelocidade(Number(e.target.value))}
                className="w-20 accent-[#D4900A]"
              />
              <button
                onClick={() => setRolando(!rolando)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  rolando ? "bg-[#D4900A] text-white" : "bg-[#F0EAE0] text-[#4A2810] hover:bg-[#D4900A] hover:text-white"
                }`}
              >
                {rolando ? <><IconPause size={13} /> Pausar</> : <><IconPlay size={13} /> Rolar</>}
              </button>
            </div>
          </div>

          {/* Cifra */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E0D8CE] shadow-sm">
            {/* Fade superior — indica que tem conteúdo acima */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 rounded-t-2xl" />
            {/* Fade inferior — indica que tem conteúdo abaixo */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10 rounded-b-2xl" />

            <div
              ref={conteudoRef}
              className="bg-white h-[68vh] overflow-y-auto overscroll-contain scroll-smooth px-6 md:px-8 py-6 md:py-8
                         [scrollbar-width:thin] [scrollbar-color:#D4900A_#F0EAE0]
                         [&::-webkit-scrollbar]:w-1.5
                         [&::-webkit-scrollbar-track]:bg-[#F0EAE0]
                         [&::-webkit-scrollbar-track]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-[#D4900A]/60
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb:hover]:bg-[#D4900A]"
            >
            <div className="font-mono text-sm leading-relaxed">
              {linhas.map((linha, i) => {
                if (linha.tipo === "vazio") return <div key={i} className="h-4" />;

                if (linha.tipo === "secao") return (
                  <div key={i} className="mt-6 mb-2 font-sans font-bold text-xs uppercase tracking-widest text-[#7A4520]">
                    {linha.texto}
                  </div>
                );

                if (linha.tipo === "texto") return (
                  <div key={i} className="text-[#2C1A0E] leading-7">{linha.texto}</div>
                );

                // tipo === "acorde-letra": renderiza acordes clicáveis acima da letra
                return (
                  <div key={i} className="leading-none mb-0">
                    <div className="whitespace-pre text-[#D4900A] font-bold leading-tight select-none">
                      {renderAcordeLine(linha.acordes, toggleAcorde, acordesFixados)}
                    </div>
                    {linha.letra && (
                      <div className="whitespace-pre text-[#2C1A0E] leading-6 mb-3">
                        {linha.letra}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            </div>{/* fim scroll container */}
          </div>{/* fim wrapper relativo */}

        </div>
      </main>

      {/* Modal — Adicionar à playlist */}
      {modalPlaylist && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4" onClick={() => setModalPlaylist(false)}>
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-6 w-full sm:max-w-sm shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-lg font-bold text-[#4A2810] mb-1">Adicionar à playlist</h3>
            <p className="text-xs text-[#B5865A] mb-5 truncate">{cifra.titulo} — {cifra.artista}</p>

            {/* Playlists existentes */}
            <div className="space-y-2 mb-4 max-h-52 overflow-y-auto">
              {playlists.length === 0 && (
                <p className="text-sm text-[#B5865A] text-center py-3">Nenhuma playlist criada ainda.</p>
              )}
              {playlists.map((pl) => {
                const jaAdicionada = pl.cifras.some((c) => c.id === cifra.id);
                const confirmado = adicionado === pl.id;
                return (
                  <button
                    key={pl.id}
                    onClick={() => !jaAdicionada && handleAdicionar(pl.id)}
                    disabled={jaAdicionada}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      confirmado ? "bg-green-50 border border-green-300" :
                      jaAdicionada ? "bg-[#F0EAE0] opacity-60 cursor-not-allowed" :
                      "bg-[#F0EAE0] hover:bg-[#D4900A] hover:text-white group"
                    }`}
                  >
                    <IconNote size={15} />
                    <span className="flex-1 font-semibold text-sm truncate">{pl.nome}</span>
                    <span className="text-xs shrink-0 flex items-center gap-0.5">
                      {confirmado ? <><IconCheck size={11} /> Adicionado</> : jaAdicionada ? "Já está" : `${pl.cifras.length} músicas`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Criar nova playlist */}
            <form onSubmit={handleCriarEAdicionar} className="flex gap-2">
              <input
                type="text"
                placeholder="Nova playlist..."
                value={novaPlaylist}
                onChange={(e) => setNovaPlaylist(e.target.value)}
                className="flex-1 border border-[#E0D8CE] rounded-xl px-3 py-2.5 text-sm text-[#4A2810] placeholder-[#B5865A] focus:outline-none focus:border-[#D4900A]"
              />
              <button type="submit" className="bg-[#D4900A] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#A36C05] transition-colors shrink-0">
                Criar
              </button>
            </form>

            <button onClick={() => setModalPlaylist(false)} className="w-full mt-3 py-2 text-sm text-[#B5865A] hover:text-[#D4900A] transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Painel fixo de diagramas */}
      {acordesFixados.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 z-40 bg-white border-t-2 border-[#D4900A] shadow-2xl">
          <div className="flex items-start gap-0 overflow-x-auto max-w-full px-2 py-3">
            {acordesFixados.map((acorde) => (
              <div key={acorde} className="flex-shrink-0 flex flex-col items-center px-3 relative border-r border-[#E0D8CE] last:border-r-0">
                <button
                  onClick={() => toggleAcorde(acorde)}
                  className="absolute top-0 right-1 w-5 h-5 rounded-full bg-[#F0EAE0] text-[#7A5C44] hover:bg-[#D4900A] hover:text-white transition-colors text-xs font-bold flex items-center justify-center leading-none"
                  aria-label={`Fechar ${acorde}`}
                >
                  ×
                </button>
                <p className="font-display font-bold text-[#D4900A] text-base mb-1 mt-1">{acorde}</p>
                <DiagramaAcorde acorde={acorde} />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

// Renderiza a string de acordes com spans clicáveis para cada acorde
function renderAcordeLine(acordes: string, onClick: (a: string) => void, ativos: string[]) {
  const partes: { texto: string; ehAcorde: boolean }[] = [];
  const re = /([A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?(?:\d+)?(?:\/[A-G][#b]?)?)/g;
  let ultimo = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(acordes)) !== null) {
    if (m.index > ultimo) partes.push({ texto: acordes.slice(ultimo, m.index), ehAcorde: false });
    partes.push({ texto: m[0], ehAcorde: true });
    ultimo = m.index + m[0].length;
  }
  if (ultimo < acordes.length) partes.push({ texto: acordes.slice(ultimo), ehAcorde: false });

  return partes.map((p, i) =>
    p.ehAcorde ? (
      <span
        key={i}
        className={`cursor-pointer underline decoration-dotted ${
          ativos.includes(p.texto)
            ? "text-[#4A2810] decoration-solid"
            : "hover:text-[#A36C05]"
        }`}
        onClick={() => onClick(p.texto)}
      >
        {p.texto}
      </span>
    ) : (
      <span key={i}>{p.texto}</span>
    )
  );
}

// ─── Palhetada / Ritmo ───────────────────────────────────────────────────────
function PalhetadaRitmo({ ritmo }: { ritmo: string }) {
  const padrao = PADROES_RITMO[ritmo];

  return (
    <div className="mt-4 bg-[#F0EAE0] rounded-2xl px-5 py-4 inline-block">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold text-[#4A2810] uppercase tracking-wider">
          Ritmo
        </span>
        <span className="text-sm font-semibold text-[#7A5C44]">{ritmo}</span>
        {padrao && (
          <span className="text-xs bg-[#4A2810] text-[#D4900A] px-2 py-0.5 rounded-full font-mono font-bold">
            {padrao.compasso}
          </span>
        )}
      </div>

      {padrao ? (
        <div className="flex items-end gap-4">
          {padrao.beats.map((beat, bi) => (
            <div key={bi} className="flex flex-col items-center gap-1">
              {/* Palhetadas do tempo */}
              <div className="flex flex-col items-center gap-0.5">
                {beat.map((stroke, si) => (
                  <span
                    key={si}
                    className={`text-2xl leading-none font-bold select-none ${
                      stroke.forte
                        ? "text-[#D4900A]"
                        : stroke.seta === "↑"
                        ? "text-[#B5865A]"
                        : "text-[#7A5C44]"
                    }`}
                    style={{ textShadow: stroke.forte ? "0 1px 4px rgba(212,144,10,0.3)" : "none" }}
                  >
                    {stroke.seta}
                  </span>
                ))}
              </div>
              {/* Número do tempo */}
              <span className={`text-xs font-bold tabular-nums ${
                beat.some((s) => s.forte) ? "text-[#D4900A]" : "text-[#B5865A]"
              }`}>
                {bi + 1}
              </span>
            </div>
          ))}

          {/* Legenda */}
          <div className="ml-3 pl-3 border-l border-[#D0C8BC] flex flex-col gap-1 self-center">
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#D4900A] font-bold">↓</span>
              <span className="text-xs text-[#7A5C44]">baixo forte</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#B5865A]">↑</span>
              <span className="text-xs text-[#7A5C44]">cima</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-[#7A5C44]">Padrão de palhetada em breve.</p>
      )}
    </div>
  );
}

// ─── Diagrama de acorde ───────────────────────────────────────────────────────
// Convenção: corda 1 = Mi agudo (esquerda no SVG), corda 6 = Mi baixo (direita)
// Posições: [corda, casa] onde casa 1 = 1ª casa
type DiagDado = { pestana?: number; dedos: [number, number][]; mudas?: number[] };

// Convenção de posições para barre chords:
// dedos usam posições RELATIVAS ao pestana (1 = no pestana, 2 = uma casa acima, ...)
// Para acordes abertos, usam posições absolutas (1ª casa = 1, 2ª = 2, ...)
const DIAGRAMAS: Record<string, DiagDado> = {
  // ── 12 maiores ────────────────────────────────────────────────────
  "C":   { dedos: [[2,1],[4,2],[5,3]], mudas: [6] },
  "C#":  { pestana: 4, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "Db":  { pestana: 4, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "D":   { dedos: [[1,2],[2,3],[3,2]], mudas: [5,6] },
  "D#":  { pestana: 6, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "Eb":  { pestana: 6, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "E":   { dedos: [[3,1],[4,2],[5,2]] },
  "F":   { pestana: 1, dedos: [[3,2],[4,3],[5,3]] },
  "F#":  { pestana: 2, dedos: [[3,2],[4,3],[5,3]] },
  "Gb":  { pestana: 2, dedos: [[3,2],[4,3],[5,3]] },
  "G":   { dedos: [[1,3],[5,2],[6,3]] },
  "G#":  { pestana: 4, dedos: [[3,2],[4,3],[5,3]] },
  "Ab":  { pestana: 4, dedos: [[3,2],[4,3],[5,3]] },
  "A":   { dedos: [[2,2],[3,2],[4,2]], mudas: [6] },
  "A#":  { pestana: 1, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "Bb":  { pestana: 1, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  "B":   { pestana: 2, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  // ── 12 menores ────────────────────────────────────────────────────
  "Cm":  { pestana: 3, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  "C#m": { pestana: 4, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  "Dbm": { pestana: 4, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  "Dm":  { dedos: [[1,1],[2,3],[3,2]], mudas: [5,6] },
  "D#m": { pestana: 6, dedos: [[4,3],[5,3]] },
  "Ebm": { pestana: 6, dedos: [[4,3],[5,3]] },
  "Em":  { dedos: [[4,2],[5,2]] },
  "Fm":  { pestana: 1, dedos: [[4,3],[5,3]] },
  "F#m": { pestana: 2, dedos: [[4,3],[5,3]] },
  "Gbm": { pestana: 2, dedos: [[4,3],[5,3]] },
  "Gm":  { pestana: 3, dedos: [[4,3],[5,3]] },
  "G#m": { pestana: 4, dedos: [[4,3],[5,3]] },
  "Abm": { pestana: 4, dedos: [[4,3],[5,3]] },
  "Am":  { dedos: [[2,1],[3,2],[4,2]], mudas: [6] },
  "A#m": { pestana: 1, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  "Bbm": { pestana: 1, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  "Bm":  { pestana: 2, dedos: [[2,2],[3,3],[4,3]], mudas: [6] },
  // ── Dominantes (7ª) ───────────────────────────────────────────────
  "A7":  { dedos: [[2,2],[4,2]], mudas: [6] },
  "B7":  { dedos: [[1,2],[3,2],[4,1],[5,2]], mudas: [6] },
  "C7":  { dedos: [[2,1],[3,3],[4,2],[5,3]], mudas: [6] },
  "D7":  { dedos: [[1,2],[2,1],[3,2]], mudas: [5,6] },
  "E7":  { dedos: [[3,1],[5,2]] },
  "F7":  { pestana: 1, dedos: [[3,2],[5,2]] },
  "G7":  { dedos: [[1,1],[5,2],[6,3]] },
  "C#7": { pestana: 4, dedos: [[3,2],[5,2]], mudas: [6] },
  "Db7": { pestana: 4, dedos: [[3,2],[5,2]], mudas: [6] },
  "F#7": { pestana: 2, dedos: [[3,2],[5,2]] },
  "Gb7": { pestana: 2, dedos: [[3,2],[5,2]] },
  "Ab7": { pestana: 4, dedos: [[3,2],[5,2]] },
  "Bb7": { pestana: 1, dedos: [[2,3],[3,3],[4,3]], mudas: [6] },
  // ── Menores com 7ª ────────────────────────────────────────────────
  "Am7": { dedos: [[3,2],[4,2]], mudas: [6] },
  "Em7": { dedos: [[5,2]] },
  "Dm7": { dedos: [[1,1],[2,1],[3,2]], mudas: [5,6] },
  "Bm7": { pestana: 2, dedos: [[3,3],[4,3]], mudas: [6] },
  "Cm7": { pestana: 3, dedos: [[3,3],[4,3]], mudas: [6] },
  "Fm7": { pestana: 1, dedos: [[4,3],[5,3]] },
  "F#m7":{ pestana: 2, dedos: [[4,3],[5,3]] },
  // ── Maiores com 7ª maior (maj7) ───────────────────────────────────
  "Cmaj7": { dedos: [[2,1],[4,2]], mudas: [6] },
  "Dmaj7": { dedos: [[1,2],[2,2],[3,2]], mudas: [5,6] },
  "Emaj7": { dedos: [[2,1],[4,2],[5,2]] },
  "Fmaj7": { dedos: [[2,1],[3,2],[4,3],[5,3]] },
  "Gmaj7": { dedos: [[1,2],[5,2],[6,3]] },
  "Amaj7": { dedos: [[1,2],[2,2],[3,2]], mudas: [6] },
  // ── Sus ───────────────────────────────────────────────────────────
  "Csus2":  { dedos: [[4,2],[5,3]], mudas: [6] },
  "Dsus2":  { dedos: [[1,2],[3,2]], mudas: [5,6] },
  "Esus2":  { dedos: [[3,2],[4,2],[5,2]] },
  "Gsus2":  { dedos: [[1,3],[2,3],[5,2],[6,3]] },
  "Asus2":  { dedos: [[2,2],[3,2]], mudas: [6] },
  "Dsus4":  { dedos: [[1,3],[2,3],[3,2]], mudas: [5,6] },
  "Esus4":  { dedos: [[2,2],[4,2],[5,2]] },
  "Asus4":  { dedos: [[2,2],[3,2],[4,2]], mudas: [6] },
  "Gsus4":  { dedos: [[1,3],[2,3],[4,1],[5,2],[6,3]] },
  // ── Diminuto e aumentado ──────────────────────────────────────────
  "Edim":  { dedos: [[3,1],[4,2],[5,1]], mudas: [1] },
  "Adim":  { dedos: [[2,1],[3,2],[4,1]], mudas: [5,6] },
  "Bdim":  { dedos: [[1,2],[2,1],[3,2],[4,1]], mudas: [5,6] },
  "Caug":  { dedos: [[2,1],[3,1],[4,2],[5,3]], mudas: [6] },
  "Eaug":  { dedos: [[2,1],[3,1],[4,2],[5,2]] },
  "Aaug":  { dedos: [[1,1],[2,2],[3,2],[4,2]], mudas: [6] },
  // ── Adicionados ───────────────────────────────────────────────────
  "Cadd9": { dedos: [[1,3],[2,1],[4,2],[5,3]], mudas: [6] },
  "Dadd9": { dedos: [[1,2],[2,3],[3,2],[5,2]], mudas: [6] },
  "Gadd9": { dedos: [[1,3],[2,3],[5,2],[6,3]] },
  "Aadd9": { dedos: [[1,2],[2,2],[3,2],[4,2]], mudas: [6] },
};

function DiagramaAcorde({ acorde }: { acorde: string }) {
  const dados = DIAGRAMAS[acorde];

  // Layout do SVG: 6 cordas (x: 10..70), 4 casas (y: 22..82), total 90x95
  const SX = (c: number) => 10 + (c - 1) * 12; // corda 1-6 → x
  const SY = (casa: number) => 22 + (casa - 0.5) * 15; // casa 1-4 → y

  return (
    <div className="flex flex-col items-center">
      {dados ? (
        <>
          {dados.pestana && (
            <p className="text-[10px] text-[#7A5C44] mb-0.5 font-semibold">{dados.pestana}ª casa</p>
          )}
          <svg width="90" height="95" viewBox="0 0 90 95">
            {/* Casas (horizontais) */}
            {[0,1,2,3,4].map((f) => (
              <line key={`f${f}`} x1="10" y1={22 + f * 15} x2="70" y2={22 + f * 15}
                stroke="#B5865A" strokeWidth={f === 0 ? 3 : 0.8}/>
            ))}
            {/* Cordas (verticais) */}
            {[0,1,2,3,4,5].map((s) => (
              <line key={`s${s}`} x1={10 + s * 12} y1="22" x2={10 + s * 12} y2="82"
                stroke="#B5865A" strokeWidth="0.8"/>
            ))}
            {/* Pestana */}
            {dados.pestana && (
              <rect x="10" y="22" width="60" height="8" rx="4" fill="#4A2810"/>
            )}
            {/* Marcadores de muda (X) acima do cavalete */}
            {dados.mudas?.map((c) => (
              <text key={`x${c}`} x={SX(c)} y="16" textAnchor="middle"
                fontSize="9" fill="#4A2810" fontWeight="bold">×</text>
            ))}
            {/* Dedos */}
            {dados.dedos.map(([corda, casa], i) => (
              <circle key={i} cx={SX(corda)} cy={SY(casa)} r="5.5" fill="#D4900A"/>
            ))}
          </svg>
          <p className="text-[9px] text-[#B5865A] mt-0.5">agudo → baixo</p>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-20 h-24">
          <p className="text-[10px] text-[#B5865A] text-center leading-tight">
            Em<br/>breve
          </p>
        </div>
      )}
    </div>
  );
}
