/**
 * GET /api/youtube?q=ARTISTA+MUSICA
 *
 * Resolve o videoId real do primeiro resultado de pesquisa do YouTube
 * sem precisar de API key. Resultado cacheado 1h no CDN da Vercel.
 *
 * Como funciona:
 *   O YouTube injeta ytInitialData como JSON na página de resultados.
 *   Cada vídeo dos resultados aparece como:
 *     "videoRenderer":{"videoId":"XXXXXXXXXXX", ...}
 *   Esse padrão é EXCLUSIVO dos resultados de busca — diferente de
 *   "videoId" solto que aparece em recomendações, ads e outros lugares.
 */
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // edge não suporta bem textos grandes

function buildPayload(videoId: string) {
  return {
    videoId,
    watchUrl:    `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl:    `https://www.youtube-nocookie.com/embed/${videoId}`,
    thumbnail:   `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    thumbnailHD: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  };
}

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
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      // Sem cache no fetch — o cache está no Response abaixo
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "YouTube indisponível" }, { status: 502 });
    }

    const html = await res.text();

    // ── Estratégia 1 (mais precisa): videoRenderer é o objeto de cada resultado ──
    // Formato: "videoRenderer":{"videoId":"XXXXXXXXXXX"
    const rendererMatch = html.match(
      /"videoRenderer"\s*:\s*\{\s*"videoId"\s*:\s*"([a-zA-Z0-9_-]{11})"/
    );
    if (rendererMatch) {
      return NextResponse.json(buildPayload(rendererMatch[1]), {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      });
    }

    // ── Estratégia 2: watchEndpoint (link de assistir) associado ao resultado ──
    // Formato: "watchEndpoint":{"videoId":"XXXXXXXXXXX"
    const watchMatch = html.match(
      /"watchEndpoint"\s*:\s*\{\s*"videoId"\s*:\s*"([a-zA-Z0-9_-]{11})"/
    );
    if (watchMatch) {
      return NextResponse.json(buildPayload(watchMatch[1]), {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      });
    }

    // ── Estratégia 3 (fallback): qualquer videoId — menos preciso ──
    const anyMatch = html.match(/"videoId"\s*:\s*"([a-zA-Z0-9_-]{11})"/);
    if (anyMatch) {
      return NextResponse.json(buildPayload(anyMatch[1]), {
        headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
      });
    }

    return NextResponse.json({ error: "Nenhum vídeo encontrado" }, { status: 404 });

  } catch (err) {
    console.error("[youtube route] erro:", err);
    return NextResponse.json({ error: "Falha ao buscar" }, { status: 500 });
  }
}
