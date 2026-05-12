/**
 * supabase-dedup.js
 * Remove cifras duplicadas mantendo no máximo 2 versões por (artista, título-base).
 *
 * Critério de "duplicata": mesma artista + título normalizado (sem sufixos
 * "(ver. N)", "(ao vivo)", "(acústico)", "(part. ...)" etc).
 *
 * Critério de "melhor versão" (para manter as 2 top):
 *   1. Cifra com mais caracteres válidos (mais completa)
 *   2. Que tenha mais acordes detectados em [...]
 *   3. Mais tocadas_semana (popularidade)
 */
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://yjjdugjppfdmpxnzjqba.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqamR1Z2pwcGZkbXB4bnpqcWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NTgwMzcsImV4cCI6MjA5NDAzNDAzN30.Ouqe-eEXupMIGKuaRodnWiwasGyE-F_DcjKBzJZ2Dyk";
const MAX_VERSOES = 2;
const BATCH_DELETE = 50;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/** Normaliza string: lowercase, sem acentos, sem pontuação extra */
function normalizar(txt) {
  return (txt || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Tira sufixos de "versão", "ao vivo", "participação" etc. do título */
function tituloBase(titulo) {
  return normalizar(titulo)
    .replace(/\s*\(?\s*(ver|versao|version)\s*\.?\s*\d+\s*\)?/gi, "")
    .replace(/\s*\(?\s*ao\s+vivo\s*\)?/gi, "")
    .replace(/\s*\(?\s*acustico\s*\)?/gi, "")
    .replace(/\s*\(?\s*part\s*\.?\s+.*?\)/gi, "")
    .replace(/\s*\(?\s*feat\s*\.?\s+.*?\)/gi, "")
    .replace(/\s*\(?\s*com\s+.*?\)/gi, "")
    .replace(/\s*\(?\s*solo\s*\)?/gi, "")
    .replace(/\s*\(?\s*simplificada\s*\)?/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Conta acordes válidos detectados em [XX] na cifra */
function contarAcordes(cifra) {
  if (!cifra) return 0;
  const matches = cifra.match(/\[([A-G][#b]?[a-z0-9/]*)\]/g);
  return matches ? matches.length : 0;
}

/** Pontuação de qualidade — quanto maior, melhor */
function pontuar(c) {
  const tamanho = (c.cifra || "").length;
  const acordes = contarAcordes(c.cifra);
  const tocadas = c.tocadas_semana || 0;
  return tamanho * 0.5 + acordes * 50 + tocadas;
}

async function buscarTodas() {
  console.log("📥 Baixando todas as cifras do Supabase...");
  let todas = [];
  let offset = 0;
  const limit = 1000;

  while (true) {
    const { data, error } = await supabase
      .from("cifras")
      .select("id, titulo, artista, tom, cifra, tocadas_semana")
      .range(offset, offset + limit - 1);

    if (error) { console.error("❌", error.message); break; }
    if (!data || data.length === 0) break;
    todas = todas.concat(data);
    process.stdout.write(`\r   ${todas.length} baixadas...`);
    if (data.length < limit) break;
    offset += limit;
  }
  console.log("");
  return todas;
}

async function deletar(ids) {
  let removidas = 0;
  for (let i = 0; i < ids.length; i += BATCH_DELETE) {
    const lote = ids.slice(i, i + BATCH_DELETE);
    const { error } = await supabase.from("cifras").delete().in("id", lote);
    if (error) console.error(`  ✗ Erro: ${error.message}`);
    else removidas += lote.length;
    process.stdout.write(`\r  🗑️  ${removidas}/${ids.length} removidas...`);
  }
  console.log("");
  return removidas;
}

async function main() {
  const todas = await buscarTodas();
  console.log(`✅ Total no banco: ${todas.length}\n`);

  // Agrupa por (artista normalizado + título base)
  const grupos = new Map();
  for (const c of todas) {
    const chave = `${normalizar(c.artista)}|${tituloBase(c.titulo)}`;
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave).push(c);
  }

  console.log(`🔍 Grupos únicos: ${grupos.size}`);

  // Marca quais excluir
  const paraExcluir = [];
  let gruposComDuplicatas = 0;
  for (const [chave, grupo] of grupos) {
    if (grupo.length <= MAX_VERSOES) continue;
    gruposComDuplicatas++;
    grupo.sort((a, b) => pontuar(b) - pontuar(a));
    const excedentes = grupo.slice(MAX_VERSOES);
    for (const c of excedentes) paraExcluir.push(c.id);
  }

  console.log(`📊 Grupos com >2 versões: ${gruposComDuplicatas}`);
  console.log(`🗑️  Cifras a remover: ${paraExcluir.length}`);
  console.log(`✅ Cifras que restam: ${todas.length - paraExcluir.length}\n`);

  if (paraExcluir.length === 0) {
    console.log("✨ Nada a fazer — banco já está limpo!");
    return;
  }

  // Salva amostra do que será removido para auditoria
  const fs = require("fs");
  const path = require("path");
  const amostra = paraExcluir.slice(0, 30).map(id => {
    const c = todas.find(x => x.id === id);
    return `  ${c.artista} — ${c.titulo}  (${(c.cifra || "").length} chars)`;
  });
  fs.writeFileSync(
    path.join(__dirname, "dedup-amostra.txt"),
    `Amostra das ${Math.min(30, paraExcluir.length)} primeiras a serem removidas:\n\n${amostra.join("\n")}\n\nTotal: ${paraExcluir.length}\n`,
    "utf-8"
  );
  console.log("📝 Amostra salva em scripts/dedup-amostra.txt\n");

  // Executa remoção
  console.log("🚀 Removendo duplicatas...");
  const removidas = await deletar(paraExcluir);
  console.log(`\n✅ Concluído! ${removidas} cifras removidas.`);
  console.log(`   Banco agora tem ~${todas.length - removidas} cifras únicas (max 2 versões cada).`);
}

main().catch(e => { console.error("❌ Fatal:", e.message); process.exit(1); });
