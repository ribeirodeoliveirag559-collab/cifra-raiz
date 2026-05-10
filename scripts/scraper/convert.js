/**
 * convert.js
 * Integra output/cifras_final.json diretamente em src/lib/dados.ts
 *
 * Uso: node convert.js
 */

const fs   = require("fs");
const path = require("path");

const JSON_PATH  = path.join(__dirname, "output", "cifras_final.json");
const DADOS_PATH = path.join(__dirname, "..", "..", "src", "lib", "dados.ts");

if (!fs.existsSync(JSON_PATH)) {
  console.error("❌ Arquivo cifras_final.json não encontrado. Rode o scraper primeiro.");
  process.exit(1);
}

const novasCifras = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
const dadosOriginal = fs.readFileSync(DADOS_PATH, "utf-8");

// Extrai os IDs já existentes em dados.ts
const idsExistentes = new Set();
const reId = /id:\s*["']([^"']+)["']/g;
let match;
while ((match = reId.exec(dadosOriginal)) !== null) {
  idsExistentes.add(match[1]);
}

// Filtra apenas as novas (não duplicar)
const novas = novasCifras.filter((c) => !idsExistentes.has(c.id));

if (novas.length === 0) {
  console.log("ℹ️  Nenhuma cifra nova para adicionar (todas já estão em dados.ts).");
  process.exit(0);
}

console.log(`➕ Adicionando ${novas.length} cifras novas (${novasCifras.length - novas.length} já existiam)...`);

// Gera entradas formatadas
function escapar(str) {
  return (str || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const novasEntradas = novas.map((c) => `  {
    id:            "${c.id}",
    titulo:        "${escapar(c.titulo)}",
    artista:       "${escapar(c.artista)}",
    tom:           "${c.tom}",
    ritmo:         "${c.ritmo}",
    dificuldade:   "${c.dificuldade}",
    tags:          ${JSON.stringify(c.tags)},
    tocadasSemana: ${c.tocadasSemana},
    cifra: \`${(c.cifra || "").replace(/`/g, "'")}\`,
  }`).join(",\n");

// Injeta antes do fechamento do array CIFRAS
const marcador = "// FIM_CIFRAS";
let dadosAtualizado;

if (dadosOriginal.includes(marcador)) {
  // Insere antes do marcador
  dadosAtualizado = dadosOriginal.replace(
    marcador,
    `${novasEntradas},\n  ${marcador}`
  );
} else {
  // Insere antes do ]; de fechamento do array CIFRAS
  dadosAtualizado = dadosOriginal.replace(
    /(\];\s*\/\/ ?CIFRAS|\nexport const PROGRESSO)/,
    (found) => `${novasEntradas},\n${found}`
  );
}

// Backup do original
fs.writeFileSync(DADOS_PATH + ".bak", dadosOriginal, "utf-8");
console.log(`  💾 Backup salvo em dados.ts.bak`);

fs.writeFileSync(DADOS_PATH, dadosAtualizado, "utf-8");
console.log(`  ✅ dados.ts atualizado com ${novas.length} novas cifras!`);
console.log(`\n  Reinicie o servidor: npm run dev`);
