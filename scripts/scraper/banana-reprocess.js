/**
 * banana-reprocess.js
 * Lê banana_raw.json, filtra novas cifras e injeta em dados.ts + gera SQL
 */
const fs   = require("fs");
const path = require("path");

const RAW_PATH    = path.join(__dirname, "output", "banana_raw.json");
const DADOS_PATH  = path.join(__dirname, "..", "..", "src", "lib", "dados.ts");
const SQL_PATH    = path.join(__dirname, "..", "banana_insert.sql");

function limparCifra(texto) {
  if (!texto) return "";
  return texto
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

function escapar(str) {
  return (str || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/[\x00-\x1F]/g, "");
}

function escSQL(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "''");
}

if (!fs.existsSync(RAW_PATH)) {
  console.error("❌ banana_raw.json não encontrado. Rode primeiro: node banana-scraper.js");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(RAW_PATH, "utf-8"));
console.log(`Cifras brutas do Banana Cifras: ${raw.length}`);

// Remove duplicatas internas por id
const vistas = new Set();
const unicas = raw.filter(c => {
  if (!c.id || vistas.has(c.id)) return false;
  vistas.add(c.id);
  return true;
});

// Aplica limpeza
const limpas = unicas.map(c => ({
  ...c,
  cifra: limparCifra(c.cifra),
  tocadasSemana: c.tocadasSemana || (Math.floor(Math.random() * 4000) + 200),
})).filter(c => c.cifra && c.cifra.length > 30);

console.log(`Após limpeza: ${limpas.length} cifras válidas`);

// Detecta IDs já existentes em dados.ts
const dadosOriginal = fs.readFileSync(DADOS_PATH, "utf-8");
const idsExistentes = new Set();
const reId = /id:\s+["']([^"']+)["']/g;
let m;
while ((m = reId.exec(dadosOriginal)) !== null) idsExistentes.add(m[1]);

const novas = limpas.filter(c => !idsExistentes.has(c.id));
console.log(`Novas para adicionar: ${novas.length} (${limpas.length - novas.length} já existiam)`);

if (novas.length === 0) {
  console.log("Nada novo para adicionar. Banco já está atualizado!");
  process.exit(0);
}

// ── Injeta em dados.ts ────────────────────────────────────────────────────────
const entradas = novas.map(c => `  {
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

fs.writeFileSync(DADOS_PATH + ".bak", dadosOriginal, "utf-8");
fs.writeFileSync(DADOS_PATH, atualizado, "utf-8");
console.log(`✅ dados.ts atualizado com ${novas.length} novas cifras!`);

// ── Gera SQL para Supabase ────────────────────────────────────────────────────
const linhasSQL = novas.map(c =>
  `('${escSQL(c.id)}','${escSQL(c.titulo)}','${escSQL(c.artista)}','${escSQL(c.tom)}','${escSQL(c.ritmo)}','${escSQL(c.dificuldade)}','{${c.tags.map(t => escSQL(t)).join(",")}}',${c.tocadasSemana},'${escSQL(c.cifra)}')`
);

const sql = `-- Banana Cifras — ${novas.length} novas cifras sertanejo
-- Gerado em ${new Date().toISOString()}

INSERT INTO cifras (id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana, cifra)
VALUES
${linhasSQL.join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  titulo         = EXCLUDED.titulo,
  artista        = EXCLUDED.artista,
  tom            = EXCLUDED.tom,
  ritmo          = EXCLUDED.ritmo,
  dificuldade    = EXCLUDED.dificuldade,
  tags           = EXCLUDED.tags,
  tocadas_semana = EXCLUDED.tocadas_semana,
  cifra          = EXCLUDED.cifra;
`;

fs.writeFileSync(SQL_PATH, sql, "utf-8");
console.log(`✅ SQL gerado: ${SQL_PATH}`);
console.log(`   Cole no SQL Editor do Supabase para adicionar ao banco.`);
