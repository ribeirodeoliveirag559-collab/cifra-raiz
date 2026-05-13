/**
 * banana-scraper.js
 * Raspa cifras simplificadas de bananacifras.com via API JSON.
 *
 * FLUXO:
 * 1. Busca músicas de artistas sertanejos via Search API
 * 2. Para cada música, pega versões via tabversions.js
 * 3. Pega a versão simplificada e busca o conteúdo via tab.js
 * 4. Salva em banana_raw.json
 */

const axios = require("axios");
const fs    = require("fs");
const path  = require("path");

const OUTPUT   = path.join(__dirname, "output");
const RAW_FILE = path.join(OUTPUT, "banana_raw.json");
const LOG_FILE = path.join(OUTPUT, "banana_progresso.log");

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
  "Accept":     "application/json, text/plain, */*",
  "Referer":    "https://www.bananacifras.com",
};

const DELAY = 1500; // ms entre requests

// ─── Lista ampla de artistas sertanejos para busca ──────────────────────────
const ARTISTAS_BUSCA = [
  // Raiz / Modão
  "chitaozinho e xororo", "leandro e leonardo", "zeze di camargo e luciano",
  "tonico e tinoco", "tiao carreiro e pardinho", "milionario e jose rico",
  "pedro bento e ze da estrada", "pena branca e xavantinho",
  "gino e geno", "joao mineiro e marciano", "rick e renner",
  "almir sater", "renato teixeira", "matogrosso e mathias",
  "joao de barro caipira", "trio parana", "cascatinha e inhana",
  // Sertanejo universitário
  "gusttavo lima", "luan santana", "jorge e mateus",
  "joao neto e frederico", "joao bosco e vinicius",
  "henrique e juliano", "victor e leo", "ze neto e cristiano",
  "simone e simaria", "maiara e maraisa", "matheus e kauan",
  "hugo e guilherme", "cesar menotti e fabiano", "edson e hudson",
  "murilo huff", "marilia mendonca", "ana castela",
  "israel e rodolffo", "thiago e douglas",
  "fernando e sorocaba", "marcos e belutti",
  "pedro e thiago", "leonardo sertanejo",
  "calcinha preta", "banda calypso", "xite sertanejo",
  "elvis presley sertanejo", "amado batista", "jose rico",
  "paula fernandes", "maiara maraisa",
];

// ─── Utilitários ─────────────────────────────────────────────────────────────

function sleep(ms) { return new Promise(r => setTimeout(r, ms + Math.random() * 500)); }

function log(msg) {
  const linha = msg + "\n";
  process.stdout.write(linha);
  fs.appendFileSync(LOG_FILE, linha);
}

function slugify(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function limparCifra(texto) {
  return (texto || "")
    .replace(/\r\n/g, "\n").replace(/\r/g, "\n")
    .replace(/\t/g, "  ")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\\(\d)/g, "$1")
    .replace(/`/g, "'")
    .replace(/\$(?!\{)/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

function detectarRitmo(titulo, artista) {
  const t = (titulo + " " + artista).toLowerCase();
  if (t.includes("guarânia") || t.includes("guarania")) return "Guarânia";
  if (t.includes("modão") || t.includes("modao"))        return "Modão";
  if (t.includes("valsa"))                                return "Valsa";
  if (t.includes("bolero"))                               return "Bolero";
  if (t.includes("toada"))                                return "Toada";
  return "Sertanejo";
}

// ─── HTTP com retry ───────────────────────────────────────────────────────────

async function get(url, tentativa = 1) {
  try {
    const r = await axios.get(url, { headers: HEADERS, timeout: 15000, decompress: true });
    return r.data;
  } catch (e) {
    const status = e.response?.status;
    if (status === 404) return null;
    if (tentativa < 3) {
      await sleep(DELAY * tentativa * 2);
      return get(url, tentativa + 1);
    }
    return null;
  }
}

// ─── ETAPA 1: coleta track_ids via Search API ─────────────────────────────────

async function coletarTrackIds() {
  log("\n🔍 ETAPA 1 — Buscando músicas sertanejas...\n");

  const tracks = new Map(); // track_id → {songSlug, songName, artistSlug, artistName}
  const SEARCH_CDN = "https://cifra.b-cdn.net/searchapi/song?v=6&BR=1&only_tracks=1&q=";

  for (const artista of ARTISTAS_BUSCA) {
    const data = await get(SEARCH_CDN + encodeURIComponent(artista));
    if (!Array.isArray(data) || data.length === 0) {
      log(`  ✗ "${artista}" — sem resultados`);
      await sleep(DELAY);
      continue;
    }

    let novos = 0;
    for (const item of data) {
      // Formato: [track_id, song_slug, song_name, artist_slug, artist_name, content_type]
      if (!item[0] || !item[2] || !item[4]) continue;
      const trackId = String(item[0]);
      if (!tracks.has(trackId)) {
        tracks.set(trackId, {
          trackId,
          songSlug:   String(item[1] || ""),
          songName:   String(item[2] || ""),
          artistSlug: String(item[3] || ""),
          artistName: String(item[4] || ""),
        });
        novos++;
      }
    }
    log(`  ✓ "${artista}" — ${data.length} músicas (${novos} novas, total: ${tracks.size})`);
    await sleep(DELAY);
  }

  const arr = [...tracks.values()];
  fs.writeFileSync(path.join(OUTPUT, "banana_tracks.json"), JSON.stringify(arr, null, 2));
  log(`\n📋 Total track_ids coletados: ${arr.length}`);
  return arr;
}

// ─── ETAPA 2: busca conteúdo de cada música ──────────────────────────────────

async function rasparConteudo(tracks) {
  log(`\n🎸 ETAPA 2 — Buscando cifras de ${tracks.length} músicas...\n`);

  // Carrega progresso anterior
  const existentes = fs.existsSync(RAW_FILE)
    ? JSON.parse(fs.readFileSync(RAW_FILE, "utf-8"))
    : [];
  const jaFeitos = new Set(existentes.map(c => c.trackId));
  const cifras = [...existentes];

  let i = 0, novas = 0;

  for (const track of tracks) {
    i++;

    if (jaFeitos.has(track.trackId)) {
      log(`  [${i}/${tracks.length}] Já baixado: ${track.songName}`);
      continue;
    }

    // Pega versões disponíveis (busca versão simplificada = content_type "1")
    const versions = await get(`https://www.bananacifras.com/json/tabversions.js?id=${track.trackId}`);
    if (!Array.isArray(versions) || versions.length === 0) {
      log(`  [${i}/${tracks.length}] ✗ Sem versões: ${track.songName}`);
      await sleep(500);
      continue;
    }

    // Prefere simplificada (1), aceita cifra normal (0)
    const versSimp = versions.find(v => v[1] === "1" && v[8] === "0");
    const versCifra = versions.find(v => v[1] === "0" && v[8] === "0");
    const ver = versSimp || versCifra;

    if (!ver) {
      log(`  [${i}/${tracks.length}] ✗ Sem versão pública: ${track.songName}`);
      await sleep(500);
      continue;
    }

    const tabId  = ver[0];
    const tom    = ver[4] || "C";
    const tipo   = ver[1] === "1" ? "simplificada" : "cifra";

    // Pega o conteúdo da cifra
    const conteudo = await get(`https://www.bananacifras.com/json/tab.js?id=${tabId}`);
    if (!conteudo || !conteudo.content || conteudo.content.length < 20) {
      log(`  [${i}/${tracks.length}] ✗ Conteúdo vazio: ${track.songName}`);
      await sleep(500);
      continue;
    }

    const cifraTexto = limparCifra(conteudo.content);
    if (cifraTexto.length < 20) { await sleep(500); continue; }

    const cifra = {
      trackId:       track.trackId,
      id:            slugify(`${track.artistName}-${track.songName}`),
      titulo:        track.songName.trim(),
      artista:       track.artistName.trim(),
      tom:           conteudo.tone || tom || "C",
      ritmo:         detectarRitmo(track.songName, track.artistName),
      dificuldade:   "iniciante",
      tags:          ["sertanejo"],
      tocadasSemana: Math.floor(Math.random() * 4000) + 300,
      cifra:         cifraTexto,
    };

    log(`  [${i}/${tracks.length}] ✓ "${cifra.titulo}" — ${cifra.artista} | Tom: ${cifra.tom} | ${tipo}`);
    cifras.push(cifra);
    jaFeitos.add(track.trackId);
    novas++;

    if (novas % 10 === 0) {
      fs.writeFileSync(RAW_FILE, JSON.stringify(cifras, null, 2));
      log(`  💾 Progresso salvo (${cifras.length} total)`);
    }

    await sleep(DELAY);
  }

  fs.writeFileSync(RAW_FILE, JSON.stringify(cifras, null, 2));
  log(`\n💾 Concluído! ${cifras.length} cifras em banana_raw.json (${novas} novas)`);
  return cifras;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true });
  if (fs.existsSync(LOG_FILE)) fs.unlinkSync(LOG_FILE);

  console.log("╔══════════════════════════════════════════╗");
  console.log("║   CIFRA RAIZ — Scraper Banana Cifras    ║");
  console.log("║   Via API JSON (sem scraping de HTML)   ║");
  console.log("╚══════════════════════════════════════════╝\n");

  // Carrega tracks já coletados ou coleta novos
  const tracksFile = path.join(OUTPUT, "banana_tracks.json");
  let tracks;
  if (fs.existsSync(tracksFile)) {
    tracks = JSON.parse(fs.readFileSync(tracksFile, "utf-8"));
    log(`📂 Tracks já coletados: ${tracks.length} — pulando etapa 1`);
  } else {
    tracks = await coletarTrackIds();
  }

  await rasparConteudo(tracks);

  log("\n✅ Tudo pronto! Agora rode:");
  log("   node scripts/scraper/banana-reprocess.js");
}

main().catch(e => {
  console.error("\n❌ Erro fatal:", e.message);
  process.exit(1);
});
