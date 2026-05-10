const axios   = require("axios");
const cheerio = require("cheerio");

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Accept-Language": "pt-BR,pt;q=0.9",
};
const TONS = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"];

async function test(url) {
  console.log("Testando:", url);
  const res = await axios.get(url, { headers: HEADERS });
  const $ = cheerio.load(res.data);

  // Tom via script tags
  let tom = "";
  $("script").each((_, el) => {
    const src = $(el).html() || "";
    const m1 = src.match(/"tom"\s*:\s*"([A-G][#b]?)"/);
    const m2 = src.match(/"key"\s*:\s*"([A-G][#b]?)"/);
    const m3 = src.match(/originalTom["']?\s*:\s*["']([A-G][#b]?)/);
    const hit = m1?.[1] || m2?.[1] || m3?.[1];
    if (hit && TONS.includes(hit)) { tom = "SCRIPT:" + hit; return false; }
  });

  // Tom via data-attr
  if (!tom) {
    const da = $("[data-original-tom]").attr("data-original-tom") || $("[data-tom]").attr("data-tom");
    if (da && TONS.includes(da)) tom = "DATA-ATTR:" + da;
  }

  // Tom via select option value
  if (!tom) {
    $("select").each((_, el) => {
      const id = $(el).attr("id") || $(el).attr("name") || "";
      const firstOpt = $(el).find("option").first().val();
      console.log(`  select[${id}] first-option="${firstOpt}"`);
      if (firstOpt && TONS.includes(String(firstOpt))) {
        tom = `SELECT[${id}]:` + firstOpt;
        return false;
      }
    });
  }

  // Dump de todos os atributos data-* que contenham "tom"
  $("[data-original-tom], [data-tom], [data-key]").each((_, el) => {
    const attrs = Object.entries(el.attribs || {}).filter(([k]) => k.includes("tom") || k.includes("key"));
    if (attrs.length) console.log("  data-attrs:", attrs);
  });

  const titulo = $("h1.t1, h1").first().text().trim().slice(0, 50);
  const pre3 = $("pre").first().text().slice(0, 80);

  console.log("TITULO:", titulo);
  console.log("TOM encontrado:", tom || "(nenhum)");
  console.log("PRE início:", pre3.replace(/\n/g, " | "));
  console.log("");
}

(async () => {
  await test("https://www.cifraclub.com.br/chitaozinho-e-xororo/evidencias/");
  await test("https://www.cifraclub.com.br/leandro-e-leonardo/esperando-na-janela/");
})().catch(console.error);
