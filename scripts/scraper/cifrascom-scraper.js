/**
 * cifrascom-scraper.js
 * Raspa cifras de https://www.cifras.com.br para artistas sertanejos.
 * Salva em output/cifrascom_raw.json
 */

const axios   = require("axios");
const cheerio = require("cheerio");
const fs      = require("fs");
const path    = require("path");

const BASE    = "https://www.cifras.com.br";
const OUTPUT  = path.join(__dirname, "output");
const RAW     = path.join(OUTPUT, "cifrascom_raw.json");
const LOG     = path.join(OUTPUT, "cifrascom_log.txt");
const DELAY   = 2000;

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
  "Accept":     "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9",
  "Referer":    BASE,
};

const TONS_VALIDOS = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"];

// ─── Lista de artistas sertanejos no cifras.com.br ────────────────────────────
const ARTISTAS = [
  // Raiz / Modão
  "icaro-e-gilmar",
  "chitaozinho-e-xororo",
  "leandro-e-leonardo",
  "zeze-di-camargo-e-luciano",
  "tonico-e-tinoco",
  "tiao-carreiro-e-pardinho",
  "milionario-e-jose-rico",
  "pedro-bento-e-ze-da-estrada",
  "gino-e-geno",
  "joao-mineiro-e-marciano",
  "almir-sater",
  "renato-teixeira",
  "matogrosso-e-mathias",
  "rick-e-renner",
  "pena-branca-e-xavantinho",
  // Sertanejo universitário
  "gusttavo-lima",
  "luan-santana",
  "jorge-e-mateus",
  "joao-neto-e-frederico",
  "joao-bosco-e-vinicius",
  "henrique-e-juliano",
  "victor-e-leo",
  "ze-neto-e-cristiano",
  "simone-e-simaria",
  "maiara-e-maraisa",
  "matheus-e-kauan",
  "hugo-e-guilherme",
  "cesar-menotti-e-fabiano",
  "edson-e-hudson",
  "marilia-mendonca",
  "ana-castela",
  "israel-e-rodolffo",
  "fernando-e-sorocaba",
  "marcos-e-belutti",
  "paula-fernandes",
  "amado-batista",
  "leonardo",
  "pedro-e-thiago",
  "eduardo-costa",
  "thiago-e-douglas",
  "murilo-huff",
  "bruninho-e-davi",
  "diego-e-victor-hugo",
  "henrique-e-diego",
  "gabriel-e-guilherme",
  "banda-brasil",
  "calcinha-preta",
  "banda-calypso",
];

// ─── Utilitários ─────────────────────────────────────────────────────────────

function sleep(ms) { return new Promise(r => setTimeout(r, ms + Math.random() * 800)); }

function log(msg) {
  const linha = msg + "\n";
  process.stdout.write(linha);
  fs.appendFileSync(LOG, linha);
}

function slugify(txt) {
  return (txt || "")
    .toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function limparCifra(txt) {
  return (txt || "")
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

function detectarTom(cifraTexto) {
  const re = /\[([A-G][#b]?)(?:m|maj|min|dim|aug|sus|add|\d|\/|$|\])/g;
  const acordes = [];
  let m;
  while ((m = re.exec(cifraTexto)) !== null && acordes.length < 15) {
    if (TONS_VALIDOS.includes(m[1])) acordes.push(m[1]);
  }
  if (acordes.length === 0) {
    // Tenta sem colchetes: "C  G  Am  F" no início
    const re2 = /\b([A-G][#b]?)(?:m|maj|7|sus|\s|$)/g;
    while ((m = re2.exec(cifraTexto.slice(0, 500))) !== null && acordes.length < 10) {
      if (TONS_VALIDOS.includes(m[1])) acordes.push(m[1]);
    }
  }
  if (acordes.length === 0) return "C";
  const freq = {};
  acordes.forEach(a => { freq[a] = (freq[a] || 0) + 1; });
  return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
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
    const r = await axios.get(url, { headers: HEADERS, timeout: 20000, decompress: true });
    return r.data;
  } catch (e) {
    if (e.response?.status === 404) return null;
    if (tentativa < 3) {
      await sleep(DELAY * tentativa * 2);
      return get(url, tentativa + 1);
    }
    return null;
  }
}

// ─── ETAPA 1: coleta URLs de cifras de cada artista ──────────────────────────

async function coletarLinks() {
  log("\n📋 ETAPA 1 — Coletando links dos artistas...\n");
  const todos = [];
  const vistos = new Set();

  for (const artistaSlug of ARTISTAS) {
    const url = `${BASE}/${artistaSlug}`;
    log(`→ ${artistaSlug}`);
    const html = await get(url);
    if (!html) { log("  ✗ Falhou"); await sleep(DELAY); continue; }

    const $ = cheerio.load(html);
    let count = 0;

    $("a[href]").each(function() {
      const href = $(this).attr("href") || "";
      // Pega só URLs /cifra/ARTISTA/MUSICA (não teclado, cavaquinho etc.)
      if (
        href.includes(`/cifra/${artistaSlug}/`) &&
        !href.includes("#") &&
        !vistos.has(href)
      ) {
        vistos.add(href);
        const full = href.startsWith("http") ? href : BASE + href;
        todos.push({ url: full, artistaSlug });
        count++;
      }
    });

    log(`  ✓ ${count} músicas`);
    await sleep(DELAY);
  }

  fs.writeFileSync(path.join(OUTPUT, "cifrascom_links.json"), JSON.stringify(todos, null, 2));
  log(`\n📋 Total de links: ${todos.length}`);
  return todos;
}

// ─── ETAPA 2: raspa cada página de cifra ─────────────────────────────────────

function parsearCifra(html, meta) {
  const $ = cheerio.load(html);

  // Título
  let titulo = $("h1").first().text().trim();
  titulo = titulo.replace(/\s*\|.*$/, "").trim();

  // Artista
  let artista = $("h2").first().text().trim() ||
    $(".artist-name, .artista").first().text().trim();

  // Se artista vazio, extrai do URL
  if (!artista) {
    const parts = meta.url.split("/");
    artista = parts[parts.length - 2]?.replace(/-/g, " ");
  }

  // Nível de dificuldade
  const nivelTxt = ($("[class*='nivel'], [class*='level'], [class*='dificuldade']").first().text() || "").toLowerCase();
  let dificuldade = "intermediario";
  if (nivelTxt.includes("iniciante") || nivelTxt.includes("fácil")) dificuldade = "iniciante";
  else if (nivelTxt.includes("avançado") || nivelTxt.includes("difícil")) dificuldade = "avancado";

  // Conteúdo da cifra (está em <pre>)
  let cifraTexto = "";
  const pre = $("pre").first();
  if (pre.length) {
    // Converte tags de acorde para [ACORDE]
    pre.find("b, strong, a.acorde, .chord").each(function() {
      const txt = $(this).text().trim();
      if (/^[A-G]/.test(txt)) $(this).replaceWith(`[${txt}]`);
    });
    cifraTexto = pre.text();
  }

  if (!cifraTexto || cifraTexto.length < 30) return null;
  if (!titulo || titulo.length < 2) return null;

  // Tom — tenta pegar do elemento, senão detecta da cifra
  let tom = "";
  $("[class*='tom'], [class*='key'], [id*='tom']").each(function() {
    const txt = $(this).text().trim();
    const m = txt.match(/([A-G][#b]?)/);
    if (m && TONS_VALIDOS.includes(m[1])) { tom = m[1]; return false; }
  });
  if (!tom) tom = detectarTom(cifraTexto);

  return {
    id:            slugify(`${artista}-${titulo}`),
    titulo,
    artista,
    tom,
    ritmo:         detectarRitmo(titulo, artista),
    dificuldade,
    tags:          ["sertanejo"],
    tocadasSemana: Math.floor(Math.random() * 4000) + 200,
    url:           meta.url,
    cifra:         limparCifra(cifraTexto),
  };
}

async function rasparCifras(links) {
  log(`\n🎸 ETAPA 2 — Raspando ${links.length} cifras...\n`);

  const existentes = fs.existsSync(RAW) ? JSON.parse(fs.readFileSync(RAW, "utf-8")) : [];
  const jaFeitos   = new Set(existentes.map(c => c.url));
  const cifras     = [...existentes];
  let i = 0, novas = 0, erros = 0;

  for (const meta of links) {
    i++;
    if (jaFeitos.has(meta.url)) {
      log(`  [${i}/${links.length}] Já baixado`);
      continue;
    }

    log(`  [${i}/${links.length}] ${meta.url.split("/").slice(-2).join(" — ")}`);
    const html = await get(meta.url);
    if (!html) { erros++; log("  ✗ Falhou"); continue; }

    const cifra = parsearCifra(html, meta);
    if (!cifra) { log("  ✗ Não parseável"); continue; }

    log(`  ✓ "${cifra.titulo}" | ${cifra.artista} | Tom: ${cifra.tom}`);
    cifras.push(cifra);
    novas++;
    jaFeitos.add(meta.url);

    if (novas % 15 === 0) {
      fs.writeFileSync(RAW, JSON.stringify(cifras, null, 2));
      log(`  💾 Progresso salvo (${cifras.length} total)`);
    }

    await sleep(DELAY);
  }

  fs.writeFileSync(RAW, JSON.stringify(cifras, null, 2));
  log(`\n💾 Concluído! ${cifras.length} cifras | ${novas} novas | ${erros} erros`);
  return cifras;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true });
  if (fs.existsSync(LOG)) fs.unlinkSync(LOG);

  console.log("╔══════════════════════════════════════════╗");
  console.log("║  CIFRA RAIZ — Scraper cifras.com.br     ║");
  console.log("╚══════════════════════════════════════════╝\n");

  const linksFile = path.join(OUTPUT, "cifrascom_links.json");
  let links;
  if (fs.existsSync(linksFile)) {
    links = JSON.parse(fs.readFileSync(linksFile, "utf-8"));
    log(`📂 Links já coletados: ${links.length} — pulando etapa 1`);
  } else {
    links = await coletarLinks();
  }

  await rasparCifras(links);
  log("\n✅ Pronto! Rode: node scripts/scraper/cifrascom-reprocess.js");
}

main().catch(e => { console.error("❌ Fatal:", e.message); process.exit(1); });
