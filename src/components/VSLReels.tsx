"use client";
import { useEffect, useRef, useState } from "react";

/**
 * VSL em formato Reels/Stories (vertical, moldura de celular).
 * Autoplay mudo (exigência dos navegadores) + botão de som.
 *
 * Para trocar o vídeo: coloque o arquivo em /public/vsl.mp4
 * (e opcionalmente /public/vsl-poster.jpg como capa) e é só isso —
 * o componente já aponta para esses caminhos.
 */

const VIDEO_SRC = "/vsl.mp4";
const POSTER_SRC = "/vsl-poster.jpg";

export default function VSLReels() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [comSom, setComSom] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [temVideo, setTemVideo] = useState(true);

  useEffect(() => {
    // Verifica se o arquivo de vídeo existe; se não, mostra placeholder
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((res) => setTemVideo(res.ok))
      .catch(() => setTemVideo(false));
  }, []);

  function alternarSom() {
    if (!videoRef.current) return;
    videoRef.current.muted = comSom;
    setComSom(!comSom);
  }

  function alternarPlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPausado(false);
    } else {
      videoRef.current.pause();
      setPausado(true);
    }
  }

  return (
    <div className="flex justify-center mb-10">
      {/* Moldura estilo celular / Reels */}
      <div className="relative w-[240px] sm:w-[270px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-[#D4900A]/30 bg-[#2C1A0E]">
        {/* Glow dourado atrás */}
        <div className="absolute -inset-3 bg-[#D4900A] opacity-20 blur-2xl rounded-[2.5rem] -z-10" />

        {temVideo ? (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              autoPlay
              muted
              loop
              playsInline
              onClick={alternarPlay}
            />

            {/* Botão de som */}
            <button
              onClick={alternarSom}
              aria-label={comSom ? "Ativar som" : "Desativar som"}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              {comSom ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" />
                  <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>

            {/* Overlay de play quando pausado */}
            {pausado && (
              <div
                onClick={alternarPlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                  <svg viewBox="0 0 24 24" fill="#4A2810" className="w-7 h-7 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          // Placeholder até o vídeo ser adicionado em /public/vsl.mp4
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#4A2810] to-[#2C1A0E] p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4900A]/20 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="#D4900A" className="w-7 h-7 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-[#D4900A] font-bold text-sm mb-1">Vídeo em breve</p>
            <p className="text-[#B5865A] text-xs">Adicione o arquivo vsl.mp4 na pasta public</p>
          </div>
        )}

        {/* Barra de progresso estilo Stories (decorativa) */}
        <div className="absolute top-2 left-2 right-2 h-0.5 bg-white/20 rounded-full overflow-hidden z-10">
          <div className="h-full bg-white/80 w-full" />
        </div>
      </div>
    </div>
  );
}
