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
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 bg-black/60 overflow-y-auto"
      onClick={fechar}
    >
      <div
        className="relative bg-[#D4900A] rounded-2xl p-3 w-full max-w-[260px] shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão X */}
        <button
          onClick={fechar}
          aria-label="Fechar"
          className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#FAF7F2] border-2 border-[#D4900A] flex items-center justify-center text-[#4A2810] font-bold text-base leading-none hover:bg-white transition-colors shadow-md z-10"
        >
          ×
        </button>

        {/* Título no topo */}
        <h3 className="font-display font-bold text-[#2C1A0E] text-center text-sm leading-snug mb-2">
          Transforme o site em um aplicativo
        </h3>

        {/* Vídeo incorporado (portrait — formato Shorts), com altura maxima
            baseada na viewport para nunca cortar em telas baixas */}
        <div
          className="relative mx-auto rounded-xl overflow-hidden bg-[#2C1A0E] mb-2"
          style={{ aspectRatio: "9 / 16", maxHeight: "42vh", width: "auto", maxWidth: "100%" }}
        >
          <iframe
            src={EMBED_URL}
            title="Tutorial: como instalar o Cifra Raiz no celular"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Rodapé */}
        <div className="bg-[#FAF7F2] rounded-lg px-3 py-2 text-center">
          <p className="text-[11px] text-[#4A2810] leading-snug">
            Assista ao vídeo e siga o tutorial para instalar o Cifra Raiz na tela inicial do seu celular.
          </p>
        </div>

        {/* Link alternativo */}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-[11px] text-[#2C1A0E]/70 underline mt-1.5 hover:text-[#2C1A0E] transition-colors"
        >
          Abrir vídeo no YouTube
        </a>
      </div>
    </div>
  );
}
