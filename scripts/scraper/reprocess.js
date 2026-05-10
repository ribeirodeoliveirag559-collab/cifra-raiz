/**
 * reprocess.js
 * Relê cifras_raw.json, aplica limpeza e regera cifras_final.json + dados.ts
 */
const fs   = require("fs");
const path = require("path");

const RAW_PATH   = path.join(__dirname, "output", "cifras_raw.json");
const FINAL_PATH = path.join(__dirname, "output", "cifras_final.json");
const DADOS_PATH = path.join(__dirname, "..", "..", "src", "lib", "dados.ts");

function limparCifra(texto) {
  if (!texto) return "";
  return texto
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, "  ")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\\(\d)/g, "$1")
    .replace(/`/g, "'")
    .replace(/\$(?!\{)/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

function escapar(str) {
  return (str || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/[\x00-\x1F]/g, "");
}

function limparTitulo(titulo) {
  if (!titulo) return titulo;
  return titulo
    .replace(/^\d+/, "")
    .replace(/\d[\d.]*\s*[A-G][#b]?\s*$/, "")
    .replace(/\d[\d.]*\s*$/, "")
    .trim();
}

function limparArtista(artista) {
  return (artista || "").replace(/\s*[-–]\s*Cifra Club.*/i, "").trim();
}

// ── Lê raw ───────────────────────────────────────────────────────
const raw = JSON.parse(fs.readFileSync(RAW_PATH, "utf-8"));
console.log(`Cifras brutas: ${raw.length}`);

// ── Remove duplicatas por id ─────────────────────────────────────
const vistas = new Set();
const unicas = raw.filter((c) => {
  if (vistas.has(c.id)) return false;
  vistas.add(c.id);
  return true;
});

// ── Aplica limpeza ───────────────────────────────────────────────
const limpas = unicas.map((c) => ({
  ...c,
  titulo:        limparTitulo(c.titulo),
  artista:       limparArtista(c.artista),
  cifra:         limparCifra(c.cifra),
  tocadasSemana: c.tocadasSemana || (Math.floor(Math.random() * 5000) + 300),
})).filter((c) => c.cifra && c.cifra.length > 20); // descarta cifras vazias

// Ordena por artista
limpas.sort((a, b) => a.artista.localeCompare(b.artista, "pt-BR"));

console.log(`Após limpeza: ${limpas.length} cifras válidas`);

// Salva final
fs.writeFileSync(FINAL_PATH, JSON.stringify(limpas, null, 2), "utf-8");
console.log(`Salvo: ${FINAL_PATH}`);

// ── Gera entradas TypeScript ─────────────────────────────────────
const dadosOriginal = fs.readFileSync(DADOS_PATH, "utf-8");

// Detecta IDs já existentes
const idsExistentes = new Set();
const reId = /id:\s+["']([^"']+)["']/g;
let m;
while ((m = reId.exec(dadosOriginal)) !== null) idsExistentes.add(m[1]);

const novas = limpas.filter((c) => !idsExistentes.has(c.id));
console.log(`Novas para adicionar: ${novas.length} (${limpas.length - novas.length} já existiam)`);

if (novas.length === 0) {
  console.log("Nada a adicionar.");
  process.exit(0);
}

const entradas = novas.map((c) => `  {
    id:            "${escapar(c.id)}",
    titulo:        "${escapar(c.titulo)}",
    artista:       "${escapar(c.artista)}",
    tom:           "${c.tom}",
    ritmo:         "${c.ritmo}",
    dificuldade:   "${c.dificuldade}",
    tags:          ${JSON.stringify(c.tags)},
    tocadasSemana: ${c.tocadasSemana},
    cifra: \`${c.cifra}\`,
  }`).join(",\n");

// Injeta antes do marcador // FIM_CIFRAS
const marcador = "// FIM_CIFRAS";
let atualizado;
if (dadosOriginal.includes(marcador)) {
  atualizado = dadosOriginal.replace(marcador, `${entradas},\n  ${marcador}`);
} else {
  atualizado = dadosOriginal.replace(
    /(\n\];\s*\n\/\/ ─── Módulos)/,
    `\n${entradas},\n$1`
  );
}

// Backup + salva
fs.writeFileSync(DADOS_PATH + ".bak", dadosOriginal, "utf-8");
fs.writeFileSync(DADOS_PATH, atualizado, "utf-8");
console.log(`✅ dados.ts atualizado com ${novas.length} novas cifras!`);
