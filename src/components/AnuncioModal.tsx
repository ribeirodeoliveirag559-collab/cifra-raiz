"use client";
import { useState, useEffect } from "react";

// ID do vídeo do YouTube (parte depois de /shorts/ ou v=)
const VIDEO_ID = "vqduuO5xv3Q";
const VIDEO_URL = `https://youtube.com/shorts/${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`;

export default function AnuncioModal() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Mostra uma vez por sessão
    const jaViu = sessionStorage.getItem("anuncio-pwa-visto-v2");
    if (!jaViu) setVisivel(true);
  }, []);

  function fechar() {
    sessionStorage.setItem("anuncio-pwa-visto-v2", "1");
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60"
      onClick={fechar}
    >
      <div
        className="relative bg-[#D4900A] rounded-3xl p-4 w-full max-w-xs shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão X */}
        <button
          onClick={fechar}
          aria-label="Fechar"
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#D4900A] flex items-center justify-center text-[#4A2810] font-bold text-lg leading-none hover:bg-white transition-colors shadow-md z-10"
        >
          ×
        </button>

        {/* Título no topo */}
        <h3 className="font-display font-bold text-[#2C1A0E] text-center text-lg leading-snug mb-3">
          Transforme o site em um aplicativo
        </h3>

        {/* Vídeo incorporado (portrait — formato Shorts) */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#2C1A0E] mb-3" style={{ aspectRatio: "9 / 16" }}>
          <iframe
            src={EMBED_URL}
            title="Tutorial: como instalar o Cifra Raiz no celular"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Rodapé */}
        <div className="bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-center">
          <p className="text-xs text-[#4A2810] leading-snug">
            Assista ao vídeo e siga o tutorial para instalar o Cifra Raiz na tela inicial do seu celular.
          </p>
        </div>

        {/* Link alternativo */}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs text-[#2C1A0E]/70 underline mt-2 hover:text-[#2C1A0E] transition-colors"
        >
          Abrir vídeo no YouTube
        </a>
      </div>
    </div>
  );
}
