/**
 * ═══════════════════════════════════════════════════════════════
 *  CIFRA RAIZ — Scraper do Cifra Club
 *  Extrai cifras de sertanejo/modão/raiz e salva em JSON.
 *
 *  MODOS:
 *    node index.js --mode=artists   → lista artistas por tag
 *    node index.js --mode=songs     → pega músicas de cada artista
 *    node index.js --mode=cifras    → baixa cifra completa de cada música
 *    node index.js                  → roda tudo em sequência
 *
 *  OUTPUT:
 *    output/artists.json   → slugs dos artistas
 *    output/songs.json     → URLs das músicas
 *    output/cifras_raw.json → cifras brutas
 *    output/cifras_final.json → formato pronto para dados.ts
 * ═══════════════════════════════════════════════════════════════
 */

const axios   = require("axios");
const cheerio = require("cheerio");
const fs      = require("fs");
const path    = require("path");

// ── Configuração ─────────────────────────────────────────────────
const CONFIG = {
  baseUrl:      "https://www.cifraclub.com.br",
  delayMs:      2500,   // intervalo entre requests (ms)
  maxRetries:   3,
  maxSongsPerArtist: 30, // limite por artista
  outputDir:    path.join(__dirname, "output"),
};

// ── Headers para simular navegador real ──────────────────────────
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Accept":          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection":      "keep-alive",
};

// ── Lista de artistas sertanejo/modão/raiz ───────────────────────
// Slug = o que aparece na URL do Cifra Club
const ARTISTAS = [
  // Duplas clássicas
  { slug: "chitaozinho-e-xororo",          nome: "Chitãozinho & Xororó",   tags: ["sertanejo", "raiz"] },
  { slug: "leandro-e-leonardo",            nome: "Leandro & Leonardo",      tags: ["sertanejo", "raiz"] },
  { slug: "zeze-di-camargo-e-luciano",     nome: "Zezé di Camargo & Luciano", tags: ["sertanejo"] },
  { slug: "milionario-e-jose-rico",        nome: "Milionário & José Rico",  tags: ["modao", "raiz"] },
  { slug: "tiao-carreiro-e-pardinho",      nome: "Tião Carreiro & Pardinho", tags: ["modao", "raiz"] },
  { slug: "tonico-e-tinoco",               nome: "Tonico & Tinoco",          tags: ["modao", "raiz"] },
  { slug: "pedro-bento-ze-da-estrada",     nome: "Pedro Bento & Zé da Estrada", tags: ["modao", "raiz"] },
  { slug: "pena-branca-e-xavantinho",      nome: "Pena Branca & Xavantinho", tags: ["modao", "raiz"] },
  { slug: "gino-e-geno",                   nome: "Gino & Geno",              tags: ["sertanejo", "raiz"] },
  { slug: "joao-mineiro-e-marciano",       nome: "João Mineiro & Marciano",  tags: ["sertanejo", "raiz"] },
  { slug: "trio-parana",                   nome: "Trio Parana",              tags: ["modao", "raiz"] },
  { slug: "rick-e-renner",                 nome: "Rick & Renner",            tags: ["sertanejo"] },
  { slug: "ze-neto-e-cristiano",           nome: "Zé Neto & Cristiano",     tags: ["sertanejo"] },

  // Solos clássicos
  { slug: "almir-sater",                   nome: "Almir Sater",              tags: ["modao", "raiz"] },
  { slug: "renato-teixeira",               nome: "Renato Teixeira",          tags: ["modao", "raiz"] },
  { slug: "roberto-rezende",               nome: "Roberto Rezende",          tags: ["modao"] },
  { slug: "matogrosso-e-mathias",          nome: "Matogrosso & Mathias",     tags: ["sertanejo", "raiz"] },
  { slug: "shurama",                       nome: "Shurama",                  tags: ["guarania", "raiz"] },
  { slug: "palmeira-e-pedro-paulo",        nome: "Palmeira & Pedro Paulo",   tags: ["modao", "raiz"] },

  // Modernos relevantes
  { slug: "luan-santana",                  nome: "Luan Santana",             tags: ["sertanejo"] },
  { slug: "gusttavo-lima",                 nome: "Gusttavo Lima",            tags: ["sertanejo"] },
  { slug: "jorge-e-mateus",               nome: "Jorge & Mateus",           tags: ["sertanejo"] },
];

// ── Utilitários ──────────────────────────────────────────────────
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function salvar(nome, dados) {
  const caminho = path.join(CONFIG.outputDir, nome);
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf-8");
  console.log(`  💾 Salvo: ${caminho} (${Array.isArray(dados) ? dados.length : Object.keys(dados).length} itens)`);
}

function carregar(nome) {
  const caminho = path.join(CONFIG.outputDir, nome);
  if (!fs.existsSync(caminho)) return null;
  return JSON.parse(fs.readFileSync(caminho, "utf-8"));
}

function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Requisição com retry ─────────────────────────────────────────
async function fetch(url, tentativa = 1) {
  try {
    const res = await axios.get(url, {
      headers: HEADERS,
      timeout: 15000,
      decompress: true,
    });
    return res.data;
  } catch (err) {
    const status = err.response?.status;
    console.warn(`  ⚠️  Erro ${status || err.code} em ${url} (tentativa ${tentativa}/${CONFIG.maxRetries})`);
    if (tentativa < CONFIG.maxRetries && status !== 404) {
      await sleep(CONFIG.delayMs * tentativa * 2);
      return fetch(url, tentativa + 1);
    }
    return null;
  }
}

// ════════════════════════════════════════════════════════════════
//  ETAPA 1 — Pega lista de músicas de cada artista
// ════════════════════════════════════════════════════════════════
async function coletarMusicas() {
  console.log("\n📋 ETAPA 1 — Coletando músicas dos artistas...\n");
  const todas = [];

  for (const artista of ARTISTAS) {
    const url  = `${CONFIG.baseUrl}/${artista.slug}/`;
    console.log(`→ ${artista.nome}  [${url}]`);
    const html = await fetch(url);
    if (!html) { console.log("  ✗ Pulado"); continue; }

    const $ = cheerio.load(html);
    const musicas = [];

    // Cifra Club lista músicas em <ul class="list-links"> ou semelhante
    // Tentamos vários seletores conhecidos
    const seletores = [
      "ul.list-links li a",
      ".art_musicas a",
      "#art_musicas a",
      ".list-index a",
      "a[href*='/" + artista.slug + "/']",
    ];

    for (const sel of seletores) {
      $(sel).each((_, el) => {
        const href = $(el).attr("href") || "";
        const titulo = $(el).text().trim();
        // Filtra links que são músicas (não menus, not /tabs/, etc.)
        if (
          href.startsWith(`/${artista.slug}/`) &&
          !href.includes("/tab") &&
          !href.includes("#") &&
          !href.endsWith(`/${artista.slug}/`) &&
          titulo.length > 1
        ) {
          const slug = href.replace(`/${artista.slug}/`, "").replace(/\//g, "");
          if (!musicas.find((m) => m.slug === slug)) {
            musicas.push({
              slug,
              titulo,
              artista: artista.nome,
              artistaSlug: artista.slug,
              tags: artista.tags,
              url: `${CONFIG.baseUrl}${href}`,
            });
          }
        }
      });
      if (musicas.length > 0) break; // Achou no primeiro seletor que funcionou
    }

    console.log(`  ✓ ${musicas.length} músicas encontradas`);
    todas.push(...musicas.slice(0, CONFIG.maxSongsPerArtist));
    await sleep(CONFIG.delayMs);
  }

  salvar("songs.json", todas);
  return todas;
}

// ════════════════════════════════════════════════════════════════
//  ETAPA 2 — Baixa cada cifra completa
// ════════════════════════════════════════════════════════════════
async function coletarCifras(musicas) {
  console.log(`\n🎸 ETAPA 2 — Baixando ${musicas.length} cifras...\n`);

  // Carrega progresso anterior (para continuar se interrompido)
  const existentes = carregar("cifras_raw.json") || [];
  const jaFeitos   = new Set(existentes.map((c) => c.url));

  const cifras = [...existentes];
  let i = 0;

  for (const musica of musicas) {
    i++;
    if (jaFeitos.has(musica.url)) {
      console.log(`  [${i}/${musicas.length}] Já baixado: ${musica.titulo}`);
      continue;
    }

    console.log(`  [${i}/${musicas.length}] ${musica.artista} — ${musica.titulo}`);
    const html = await fetch(musica.url);
    if (!html) { console.log("  ✗ Falhou"); continue; }

    const cifra = parsearCifra(html, musica);
    if (!cifra) { console.log("  ✗ Não parseable"); continue; }

    console.log(`    Tom: ${cifra.tom}  |  ${cifra.cifra.split("\n").length} linhas`);
    cifras.push(cifra);

    // Salva progresso a cada 10 músicas
    if (cifras.length % 10 === 0) {
      salvar("cifras_raw.json", cifras);
    }

    await sleep(CONFIG.delayMs + Math.random() * 1000);
  }

  salvar("cifras_raw.json", cifras);
  return cifras;
}

// ════════════════════════════════════════════════════════════════
//  PARSER de página de cifra
// ════════════════════════════════════════════════════════════════
function parsearCifra(html, meta) {
  const $ = cheerio.load(html);

  // ── Título e artista ─────────────────────────────────────────
  // h1.t1 é o título da música; h1.header-logo é o logo do site (ignorar)
  const titulo =
    $("h1.t1").first().text().trim() ||
    $("h1[class='t1']").first().text().trim() ||
    // fallback: extrai do <title> tag "Música - Artista - Cifra Club"
    ($("title").text().trim().split(" - ")[0]) ||
    meta.titulo;

  const artista =
    $("h2.t3 a").first().text().trim() ||
    $("h2.t3").first().text().trim() ||
    ($("title").text().trim().split(" - ")[1]) ||
    meta.artista;

  const TONS_VALIDOS = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"];

  // ── Texto da cifra (extrai primeiro para usar no tom) ────────
  let cifraTexto = "";

  // O Cifra Club guarda o conteúdo em <pre> dentro do artigo principal
  const preElement = $("pre").first();
  if (preElement.length) {
    // Preserva acordes: <b> e <a> são acordes, texto é letra
    // Converte para formato [ACORDE] inline
    preElement.find("b, a.ac").each((_, el) => {
      const acorde = $(el).text().trim();
      $(el).replaceWith(`[${acorde}]`);
    });
    cifraTexto = preElement.text();
  }

  // Fallback: tenta outros seletores
  if (!cifraTexto) {
    const alternativas = [
      ".cifra_cnt pre",
      "#cifra_cnt",
      ".g-fix pre",
      "article pre",
    ];
    for (const sel of alternativas) {
      const el = $(sel).first();
      if (el.length) {
        el.find("b, a").each((_, e) => {
          const acorde = $(e).text().trim();
          $(e).replaceWith(`[${acorde}]`);
        });
        cifraTexto = el.text();
        break;
      }
    }
  }

  if (!cifraTexto || cifraTexto.length < 30) return null;

  // ── Tom (key) — extraído após cifra pois usa texto como fallback ──
  let tom = "";

  // Tentativa 1: <span id="cifra_tom"> — contém "tom:\n   E"
  if (!tom) {
    const spanTom = $("#cifra_tom").text().trim();
    // ex: "tom:\n                E" → extrai a nota no final
    const m = spanTom.match(/([A-G][#b]?)\s*$/);
    if (m && TONS_VALIDOS.includes(m[1])) tom = m[1];
  }

  // Tentativa 2: <div id="c-tom"> — contém lista de tons, o primeiro é o original
  if (!tom) {
    const cTom = $("#c-tom, #side-tom").text();
    // O original é o primeiro tom listado antes dos botões
    const m = cTom.match(/([A-G][#b]?)(?:\s|$)/);
    if (m && TONS_VALIDOS.includes(m[1])) tom = m[1];
  }

  // Tentativa 3: data-tom attributes
  if (!tom) {
    const da = $("[data-original-tom]").attr("data-original-tom") ||
               $("[data-tom]").attr("data-tom");
    if (da && TONS_VALIDOS.includes(da)) tom = da;
  }

  // Tentativa 4: script tags com JSON embarcado
  if (!tom) {
    $("script").each((_, el) => {
      const src = $(el).html() || "";
      const m1 = src.match(/"tom"\s*:\s*"([A-G][#b]?)"/);
      const m2 = src.match(/"key"\s*:\s*"([A-G][#b]?)"/);
      const m3 = src.match(/originalTom\s*[:=]\s*["']([A-G][#b]?)["']/);
      const hit = m1?.[1] || m2?.[1] || m3?.[1];
      if (hit && TONS_VALIDOS.includes(hit)) { tom = hit; return false; }
    });
  }

  // Tentativa 5: primeiro acorde não-menor da cifra (heurística melhorada)
  if (!tom) {
    // Pega os 5 primeiros acordes e usa o mais frequente como tom
    const acordes = [];
    const re = /\[([A-G][#b]?)(?:m|maj|min|dim|aug|sus|add|\d|\/|$)/g;
    let m;
    while ((m = re.exec(cifraTexto)) !== null && acordes.length < 10) {
      if (TONS_VALIDOS.includes(m[1])) acordes.push(m[1]);
    }
    if (acordes.length > 0) {
      // Frequência do acorde mais comum nos primeiros 10
      const freq = {};
      acordes.forEach((a) => { freq[a] = (freq[a] || 0) + 1; });
      tom = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
    }
  }

  if (!tom) tom = "C";

  // ── Dificuldade (estimativa pelo texto) ──────────────────────
  const textoCompleto = $.text().toLowerCase();
  let dificuldade = "intermediario";
  if (textoCompleto.includes("iniciante") || textoCompleto.includes("fácil")) dificuldade = "iniciante";
  else if (textoCompleto.includes("avançado") || textoCompleto.includes("difícil")) dificuldade = "avancado";

  // ── Ritmo ────────────────────────────────────────────────────
  let ritmo = detectarRitmo(meta.tags, titulo, artista);

  return {
    id:           slugify(`${artista}-${titulo}`),
    titulo:       titulo || meta.titulo,
    artista:      artista || meta.artista,
    tom,
    ritmo,
    dificuldade,
    tags:         meta.tags,
    tocadasSemana: 0,
    url:          meta.url,
    cifra:        limparCifra(cifraTexto),
  };
}

// ── Limpa título extraído da página ─────────────────────────────
// Remove: prefixo numérico "01", sufixo de contagem "3.541", sufixo de tom "E"
function limparTitulo(titulo) {
  if (!titulo) return titulo;
  return titulo
    .replace(/^\d+/, "")                    // prefixo: "01Evidências" → "Evidências"
    .replace(/\d[\d.]*\s*[A-G][#b]?\s*$/, "") // sufixo: "31.541E" no fim
    .replace(/\d[\d.]*\s*$/, "")            // sufixo: só número
    .trim();
}

// ── Limpa nome de artista ─────────────────────────────────────────
function limparArtista(artista) {
  if (!artista) return artista;
  // Remove sufixos como " - Cifra Club"
  return artista.replace(/\s*[-–]\s*Cifra Club.*/i, "").trim();
}

// ── Detecta ritmo baseado em tags e nome ─────────────────────────
function detectarRitmo(tags, titulo, artista) {
  const texto = (titulo + " " + artista + " " + tags.join(" ")).toLowerCase();
  if (texto.includes("guarania") || texto.includes("guarânia")) return "Guarânia";
  if (texto.includes("modao") || texto.includes("modão"))       return "Modão";
  if (texto.includes("valsa"))                                   return "Valsa";
  if (texto.includes("bolero"))                                  return "Bolero";
  if (texto.includes("toada"))                                   return "Toada";
  if (texto.includes("raiz"))                                    return "Sertanejo Raiz";
  return "Sertanejo";
}

// ── Limpa o texto da cifra ───────────────────────────────────────
function limparCifra(texto) {
  return texto
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, "  ")
    // Remove caracteres de controle (ASCII 0–8, 11–12, 14–31)
    // mantém apenas \n (10) e espaço (32+)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Remove backslash seguido de dígito (inválido em template literal TS)
    .replace(/\\(\d)/g, "$1")
    // Remove backtick solto (quebraria o template literal)
    .replace(/`/g, "'")
    // Remove cifrão solto fora de acorde (poderia causar interpolação)
    .replace(/\$(?!\{)/g, "")
    .replace(/\n{4,}/g, "\n\n\n") // máximo 3 linhas em branco seguidas
    .replace(/[ \t]+$/gm, "")     // remove espaços no fim de linha
    .trim();
}

// ════════════════════════════════════════════════════════════════
//  ETAPA 3 — Converte para formato dados.ts
// ════════════════════════════════════════════════════════════════
function converterParaDadosTS(cifras) {
  console.log("\n⚙️  ETAPA 3 — Convertendo para formato dados.ts...\n");

  // Remove duplicatas por id
  const vistas = new Set();
  const unicas = cifras.filter((c) => {
    if (vistas.has(c.id)) return false;
    vistas.add(c.id);
    return true;
  });

  // Ordena por artista
  unicas.sort((a, b) => a.artista.localeCompare(b.artista, "pt-BR"));

  // Atribui tocadasSemana aleatório + limpa resíduos
  unicas.forEach((c) => {
    // Limpa títulos com ruído ex: "01Evidências31.541E" → "Evidências"
    c.titulo = limparTitulo(c.titulo);
    c.artista = limparArtista(c.artista);
    c.tocadasSemana = Math.floor(Math.random() * 5000) + 300;
    delete c.url;
  });

  salvar("cifras_final.json", unicas);

  // Gera snippet TypeScript pronto para colar
  const ts = gerarTypescript(unicas);
  const tsCaminho = path.join(CONFIG.outputDir, "cifras_snippet.ts");
  fs.writeFileSync(tsCaminho, ts, "utf-8");
  console.log(`  📄 Snippet TS salvo: ${tsCaminho}`);

  return unicas;
}

// ── Gera código TypeScript para colar em dados.ts ────────────────
function gerarTypescript(cifras) {
  const items = cifras.map((c) => `  {
    id:           "${c.id}",
    titulo:       "${escapar(c.titulo)}",
    artista:      "${escapar(c.artista)}",
    tom:          "${c.tom}",
    ritmo:        "${c.ritmo}",
    dificuldade:  "${c.dificuldade}",
    tags:         ${JSON.stringify(c.tags)},
    tocadasSemana: ${c.tocadasSemana},
    cifra: \`${c.cifra.replace(/`/g, "'")}\`,
  }`).join(",\n");

  return `// AUTO-GERADO pelo scraper — ${new Date().toLocaleDateString("pt-BR")}
// Cole dentro do array CIFRAS em src/lib/dados.ts

const CIFRAS_IMPORTADAS = [
${items}
];
`;
}

function escapar(str) {
  return (str || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// ════════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════════
async function main() {
  // Cria pasta output se não existir
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const args = process.argv.slice(2);
  const modo = args.find((a) => a.startsWith("--mode="))?.split("=")[1] || "all";

  console.log("╔══════════════════════════════════════╗");
  console.log("║   CIFRA RAIZ — Scraper Cifra Club   ║");
  console.log(`║   Modo: ${modo.padEnd(27)}║`);
  console.log("╚══════════════════════════════════════╝");

  if (modo === "songs" || modo === "all") {
    await coletarMusicas();
  }

  if (modo === "cifras" || modo === "all") {
    const musicas = carregar("songs.json");
    if (!musicas) { console.error("❌ Execute --mode=songs primeiro"); process.exit(1); }
    await coletarCifras(musicas);
  }

  if (modo === "convert" || modo === "all") {
    const cifras = carregar("cifras_raw.json");
    if (!cifras) { console.error("❌ Execute --mode=cifras primeiro"); process.exit(1); }
    converterParaDadosTS(cifras);
  }

  const total = carregar("cifras_final.json")?.length ?? 0;
  console.log(`\n✅ Concluído! ${total} cifras prontas em output/cifras_final.json`);
}

main().catch((err) => {
  console.error("\n❌ Erro fatal:", err.message);
  process.exit(1);
});
