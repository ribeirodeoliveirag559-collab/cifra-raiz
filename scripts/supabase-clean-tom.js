/**
 * Limpa caracteres \r e espaços extras do campo `tom` no Supabase.
 */
const { createClient } = require("@supabase/supabase-js");
const SUPABASE_URL = "https://yjjdugjppfdmpxnzjqba.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqamR1Z2pwcGZkbXB4bnpqcWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NTgwMzcsImV4cCI6MjA5NDAzNDAzN30.Ouqe-eEXupMIGKuaRodnWiwasGyE-F_DcjKBzJZ2Dyk";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  let offset = 0;
  const LIMIT = 1000;
  const sujas = [];

  while (true) {
    const { data } = await supabase.from("cifras")
      .select("id, tom").range(offset, offset + LIMIT - 1);
    if (!data || !data.length) break;
    for (const c of data) {
      if (c.tom && /[\r\n\t]|\s{2,}|^\s|\s$/.test(c.tom)) {
        sujas.push({ id: c.id, tom: c.tom, limpo: c.tom.replace(/[\r\n\t]/g, "").trim() });
      }
    }
    if (data.length < LIMIT) break;
    offset += LIMIT;
  }

  console.log(`🔍 Cifras com tom sujo: ${sujas.length}`);
  if (sujas.length === 0) return;

  for (const c of sujas) {
    await supabase.from("cifras").update({ tom: c.limpo }).eq("id", c.id);
    console.log(`  ✓ ${c.id}: "${c.tom.replace(/\r/g, "\\r")}" → "${c.limpo}"`);
  }
  console.log("✅ Concluído!");
}

main().catch(e => { console.error(e); process.exit(1); });
