/**
 * gerar-sql-cifras.js
 * Lê cifras_final.json e gera INSERT SQL para colar no Supabase SQL Editor
 */
const fs   = require("fs");
const path = require("path");

const INPUT = path.join(__dirname, "scraper", "output", "cifras_final.json");
const OUTPUT = path.join(__dirname, "cifras_insert.sql");

if (!fs.existsSync(INPUT)) {
  console.error("Arquivo não encontrado:", INPUT);
  console.error("Execute primeiro: node scripts/scraper/reprocess.js");
  process.exit(1);
}

const cifras = JSON.parse(fs.readFileSync(INPUT, "utf-8"));
console.log(`Gerando SQL para ${cifras.length} cifras...`);

function esc(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "''");
}

function arr(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return "'{}'";
  return "'{" + tags.map(t => esc(t)).join(",") + "}'";
}

const linhas = cifras.map(c => {
  return `('${esc(c.id)}','${esc(c.titulo)}','${esc(c.artista)}','${esc(c.tom)}','${esc(c.ritmo)}','${esc(c.dificuldade)}',${arr(c.tags)},${c.tocadasSemana || 0},'${esc(c.cifra)}')`;
});

const sql = `-- Cifras Raiz — inserção automática
-- Gerado em ${new Date().toISOString()}
-- ${cifras.length} cifras

INSERT INTO cifras (id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana, cifra)
VALUES
${linhas.join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  titulo        = EXCLUDED.titulo,
  artista       = EXCLUDED.artista,
  tom           = EXCLUDED.tom,
  ritmo         = EXCLUDED.ritmo,
  dificuldade   = EXCLUDED.dificuldade,
  tags          = EXCLUDED.tags,
  tocadas_semana = EXCLUDED.tocadas_semana,
  cifra         = EXCLUDED.cifra;
`;

fs.writeFileSync(OUTPUT, sql, "utf-8");
console.log(`✅ SQL gerado: ${OUTPUT}`);
console.log(`   Cole o conteúdo no SQL Editor do Supabase e execute.`);
