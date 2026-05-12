/**
 * GET /api/youtube?q=ARTISTA+MUSICA
 *
 * Faz scraping da página de resultados do YouTube e retorna o primeiro
 * videoId encontrado — sem precisar de API key.
 * Resultado cacheado por 1 hora no CDN da Vercel.
 */
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // resposta rápida na borda

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  if (!q) return NextResponse.json({ error: "q obrigatório" }, { status: 400 });

  try {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

    const res = await fetch(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    const html = await res.text();

    // YouTube embute os dados na variável ytInitialData como JSON na página.
    // O primeiro "videoId" que aparece é normalmente o resultado mais relevante.
    const hits = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)];
    // Filtra IDs duplicados e descarta os que pertencem a "suggested" (primeiros únicos)
    const unique = [...new Set(hits.map((m) => m[1]))];

    if (unique.length === 0) {
      return NextResponse.json(
        { error: "Nenhum vídeo encontrado" },
        { status: 404 }
      );
    }

    const videoId = unique[0];

    return NextResponse.json(
      {
        videoId,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        thumbnailHD: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      },
      {
        headers: {
          // Cache 1h no CDN + serve stale por 24h enquanto revalida em background
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    console.error("[youtube route] erro:", err);
    return NextResponse.json({ error: "Falha ao buscar" }, { status: 500 });
  }
}
