/**
 * supabase-youtube-ids.js
 *
 * Resolve o videoId do YouTube para TODAS as cifras do Supabase e salva
 * no campo `youtube_id` da tabela `cifras`.
 *
 * Antes de rodar pela primeira vez, execute no SQL Editor do Supabase:
 *   ALTER TABLE cifras ADD COLUMN IF NOT EXISTS youtube_id TEXT;
 *
 * Uso:
 *   node scripts/supabase-youtube-ids.js            → processa cifras sem youtube_id
 *   node scripts/supabase-youtube-ids.js --all      → reprocessa todas
 *   node scripts/supabase-youtube-ids.js --limit 50 → processa só 50 (para testar)
 */

const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://yjjdugjppfdmpxnzjqba.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqamR1Z2pwcGZkbXB4bnpqcWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NTgwMzcsImV4cCI6MjA5NDAzNDAzN30.Ouqe-eEXupMIGKuaRodnWiwasGyE-F_DcjKBzJZ2Dyk";

const INNERTUBE_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
const INNERTUBE_URL = `https://www.youtube.com/youtubei/v1/search?key=${INNERTUBE_KEY}&prettyPrint=false`;

// Intervalo entre requests para não ser bloqueado pelo YouTube (ms)
const DELAY_MS = 600;
// Salva no Supabase a cada N cifras processadas
const BATCH_SAVE = 20;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const args = process.argv.slice(2);
const reprocessarTodas = args.includes("--all");
const limite = (() => {
  const idx = args.indexOf("--limit");
  return idx !== -1 ? Number(args[idx + 1]) : Infinity;
})();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Chama a InnerTube API e devolve o primeiro videoId do resultado */
async function buscarVideoId(artista, titulo) {
  const query = `${artista} - ${titulo}`;
  try {
    const res = await fetch(INNERTUBE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
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
          },
        },
        query,
        params: "EgIQAQ%3D%3D", // filtro: somente vídeos
      }),
    });

    if (!res.ok) return null;

    const data = await res.json();

    // Navega no JSON do InnerTube para o primeiro videoRenderer
    const sections =
      data?.contents?.twoColumnSearchResultsRenderer
        ?.primaryContents?.sectionListRenderer?.contents ?? [];

    for (const section of sections) {
      const items = section?.itemSectionRenderer?.contents ?? [];
      for (const item of items) {
        const vid = item?.videoRenderer?.videoId;
        if (vid && /^[a-zA-Z0-9_-]{11}$/.test(vid)) return vid;
      }
    }

    // Fallback: qualquer videoId no JSON
    const str = JSON.stringify(data);
    const m = str.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

async function baixarCifras() {
  const todas = [];
  let offset = 0;
  const PAGE = 1000;

  while (true) {
    let query = supabase
      .from("cifras")
      .select("id, titulo, artista, youtube_id")
      .range(offset, offset + PAGE - 1);

    if (!reprocessarTodas) {
      query = query.is("youtube_id", null);
    }

    const { data, error } = await query;
    if (error) { console.error("Erro ao buscar:", error.message); break; }
    if (!data || data.length === 0) break;

    todas.push(...data);
    process.stdout.write(`\r  📥 ${todas.length} cifras carregadas...`);

    if (data.length < PAGE) break;
    offset += PAGE;
  }
  console.log("");
  return todas;
}

async function main() {
  console.log("🎬 Resolvendo YouTube IDs para cifras do Supabase\n");
  console.log(`   Modo: ${reprocessarTodas ? "TODAS (--all)" : "apenas sem youtube_id"}`);
  if (limite < Infinity) console.log(`   Limite: ${limite} cifras`);
  console.log("");

  const cifras = await baixarCifras();
  const total = Math.min(cifras.length, limite);
  console.log(`✅ ${total} cifras para processar\n`);

  if (total === 0) {
    console.log("✨ Nenhuma cifra pendente. Tudo já resolvido!");
    return;
  }

  let ok = 0, falha = 0;
  const lote = []; // { id, youtube_id }

  for (let i = 0; i < total; i++) {
    const c = cifras[i];
    const videoId = await buscarVideoId(c.artista, c.titulo);

    if (videoId) {
      lote.push({ id: c.id, youtube_id: videoId });
      ok++;
      process.stdout.write(
        `\r  [${i + 1}/${total}] ✓ ${c.artista} — ${c.titulo} → ${videoId}`.substring(0, 100).padEnd(100)
      );
    } else {
      falha++;
      process.stdout.write(
        `\r  [${i + 1}/${total}] ✗ ${c.artista} — ${c.titulo} (sem resultado)`.substring(0, 100).padEnd(100)
      );
    }

    // Salva no Supabase a cada BATCH_SAVE registros
    if (lote.length >= BATCH_SAVE || i === total - 1) {
      for (const item of lote) {
        const { error } = await supabase
          .from("cifras")
          .update({ youtube_id: item.youtube_id })
          .eq("id", item.id);
        if (error) console.error(`\n  ✗ Erro ao salvar ${item.id}: ${error.message}`);
      }
      lote.length = 0;
    }

    // Pausa entre chamadas ao YouTube
    if (i < total - 1) await sleep(DELAY_MS);
  }

  console.log(`\n\n✅ Concluído!`);
  console.log(`   ✓ Resolvidos: ${ok}`);
  console.log(`   ✗ Sem resultado: ${falha}`);
  console.log(`   Total: ${total}\n`);

  if (falha > 0) {
    console.log(`💡 Para tentar novamente os que falharam:`);
    console.log(`   node scripts/supabase-youtube-ids.js`);
  }
}

main().catch((e) => { console.error("❌ Fatal:", e.message); process.exit(1); });
