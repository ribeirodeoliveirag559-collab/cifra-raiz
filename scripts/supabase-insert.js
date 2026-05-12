/**
 * supabase-insert.js
 * Insere as cifras do cifrascom_raw.json direto no Supabase em lotes de 50
 */
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const SUPABASE_URL = "https://yjjdugjppfdmpxnzjqba.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqamR1Z2pwcGZkbXB4bnpqcWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NTgwMzcsImV4cCI6MjA5NDAzNDAzN30.Ouqe-eEXupMIGKuaRodnWiwasGyE-F_DcjKBzJZ2Dyk";
const RAW_PATH = path.join(__dirname, "scraper", "output", "cifrascom_raw.json");
const BATCH = 50;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function slugify(txt) {
  return (txt || "")
    .toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

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

async function main() {
  const raw = JSON.parse(fs.readFileSync(RAW_PATH, "utf-8"));
  console.log(`\n📂 Total bruto: ${raw.length}`);

  // Dedup por id
  const vistas = new Set();
  const unicas = raw.filter(c => {
    const id = c.id || slugify(`${c.artista}-${c.titulo}`);
    if (!id || vistas.has(id)) return false;
    vistas.add(id);
    return true;
  });

  // Limpa e valida
  const cifras = unicas.map(c => ({
    id:            c.id || slugify(`${c.artista}-${c.titulo}`),
    titulo:        c.titulo,
    artista:       c.artista,
    tom:           c.tom || "C",
    ritmo:         c.ritmo || "Sertanejo",
    dificuldade:   c.dificuldade || "intermediario",
    tags:          c.tags && c.tags.length ? c.tags : ["sertanejo"],
    tocadas_semana: c.tocadasSemana || (Math.floor(Math.random() * 4000) + 200),
    cifra:         limparCifra(c.cifra),
  })).filter(c => c.cifra && c.cifra.length > 30 && c.titulo && c.artista);

  console.log(`✅ Válidas: ${cifras.length}`);

  let ok = 0, erros = 0;

  for (let i = 0; i < cifras.length; i += BATCH) {
    const lote = cifras.slice(i, i + BATCH);
    const { error } = await supabase
      .from("cifras")
      .upsert(lote, { onConflict: "id" });

    if (error) {
      erros++;
      console.error(`  ✗ Lote ${i}-${i+BATCH}: ${error.message}`);
    } else {
      ok += lote.length;
      process.stdout.write(`\r  ✓ ${ok}/${cifras.length} inseridas...`);
    }
  }

  console.log(`\n\n✅ Concluído! ${ok} inseridas | ${erros} lotes com erro`);
}

main().catch(e => { console.error("❌ Fatal:", e.message); process.exit(1); });
