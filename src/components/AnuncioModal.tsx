"use client";
import { useState, useEffect } from "react";

// Altere esta URL para o link real do vídeo
const VIDEO_URL = "https://www.youtube.com/watch?v=COLOQUE_O_LINK_AQUI";

export default function AnuncioModal() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Mostra uma vez por sessão
    const jaViu = sessionStorage.getItem("anuncio-pwa-visto");
    if (!jaViu) setVisivel(true);
  }, []);

  function fechar() {
    sessionStorage.setItem("anuncio-pwa-visto", "1");
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/40">
      <div className="relative bg-[#D4900A] rounded-3xl p-4 w-full max-w-sm shadow-2xl">

        {/* Botão X */}
        <button
          onClick={fechar}
          aria-label="Fechar anúncio"
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#D4900A] flex items-center justify-center text-[#4A2810] font-bold text-lg leading-none hover:bg-white transition-colors shadow-md"
        >
          ×
        </button>

        {/* Área do vídeo */}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4"
        >
          <div className="bg-[#A36C05] rounded-2xl flex items-center justify-center"
            style={{ height: 180 }}>
            {/* Borda interna estilo TV */}
            <div className="border-[3px] border-[#2C1A0E] rounded-xl w-[88%] h-[78%] flex items-center justify-center">
              {/* Botão play */}
              <div className="w-16 h-16 rounded-full border-[3px] border-[#2C1A0E] bg-[#A36C05] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#2C1A0E">
                  <polygon points="7,4 20,12 7,20" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Título como link */}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-display font-bold text-[#2C1A0E] underline decoration-2 text-lg leading-snug mb-3 hover:text-white transition-colors"
        >
          Transforma o site em uma aplicativo
        </a>

        {/* Subtítulo */}
        <div className="bg-[#FAF7F2] rounded-2xl px-4 py-2.5 text-center">
          <p className="text-sm text-[#4A2810]">Acesse o vídeo acima e siga o tutorial.</p>
        </div>
      </div>
    </div>
  );
}
