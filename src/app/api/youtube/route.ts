/**
 * GET /api/youtube?q=ARTISTA+-+MUSICA
 *
 * Usa a InnerTube API (mesma que o app oficial do YouTube usa internamente)
 * para buscar o videoId real do primeiro resultado — retorna JSON estruturado,
 * sem depender de scraping frágil de HTML.
 *
 * A chave abaixo é a chave pública do YouTube embutida no frontend deles
 * (não é uma chave pessoal — está em todo projeto open-source de YT).
 */
import { NextRequest, NextResponse } from "next/server";

const INNERTUBE_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
const INNERTUBE_URL = `https://www.youtube.com/youtubei/v1/search?key=${INNERTUBE_KEY}&prettyPrint=false`;

function buildPayload(videoId: string) {
  return {
    videoId,
    watchUrl:    `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl:    `https://www.youtube-nocookie.com/embed/${videoId}`,
    thumbnail:   `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    thumbnailHD: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  };
}

/** Percorre o JSON do InnerTube e devolve o primeiro videoId de resultado real */
function extrairVideoId(data: unknown): string | null {
  try {
    // Caminho principal: twoColumnSearchResultsRenderer
    const sections =
      (data as Record<string, unknown>)
        ?.contents
        // @ts-expect-error navegação dinâmica no JSON do YouTube
        ?.twoColumnSearchResultsRenderer
        ?.primaryContents
        ?.sectionListRenderer
        ?.contents as unknown[];

    if (Array.isArray(sections)) {
      for (const section of sections) {
        const items =
          // @ts-expect-error navegação dinâmica
          (section as Record<string, unknown>)?.itemSectionRenderer?.contents as unknown[];
        if (!Array.isArray(items)) continue;

        for (const item of items) {
          // @ts-expect-error navegação dinâmica
          const vid = (item as Record<string, unknown>)?.videoRenderer?.videoId as string | undefined;
          if (vid && /^[a-zA-Z0-9_-]{11}$/.test(vid)) return vid;
        }
      }
    }
  } catch {
    // ignora — tenta fallback
  }

  // Fallback: busca recursiva pelo primeiro videoId no JSON
  const str = JSON.stringify(data);
  const m = str.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
  return m ? m[1] : null;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  if (!q) return NextResponse.json({ error: "q obrigatório" }, { status: 400 });

  try {
    const res = await fetch(INNERTUBE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "X-YouTube-Client-Name": "1",
        "X-YouTube-Client-Version": "2.20240101.00.00",
        Origin: "https://www.youtube.com",
        Referer: "https://www.youtube.com/",
      },
      body: JSON.stringify({
        context: {
          client: {
            clientName: "WEB",
            clientVersion: "2.20240101.00.00",
            hl: "pt",
            gl: "BR",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36,gzip(gfe)",
          },
        },
        query: q,
        // Busca apenas vídeos (filter EgIQAQ== = tipo vídeo)
        params: "EgIQAQ%3D%3D",
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `InnerTube retornou ${res.status}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    const videoId = extrairVideoId(data);

    if (!videoId) {
      return NextResponse.json({ error: "Nenhum vídeo encontrado" }, { status: 404 });
    }

    return NextResponse.json(buildPayload(videoId), {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("[youtube route] erro:", err);
    return NextResponse.json({ error: "Falha ao buscar" }, { status: 500 });
  }
}
