const axios   = require("axios");
const cheerio = require("cheerio");

const H = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0", "Referer": "https://www.cifras.com.br" };

async function run() {
  // 1. Pega página do artista para ver estrutura de links
  const r = await axios.get("https://www.cifras.com.br/icaro-e-gilmar", { headers: H, timeout: 15000 });
  const $ = cheerio.load(r.data);

  const links = [];
  $("a[href]").each(function() {
    const href = $(this).attr("href") || "";
    if (href.includes("/icaro-e-gilmar/") && !href.includes("#") && !links.includes(href)) {
      links.push(href);
    }
  });
  console.log("Links de músicas:", links.length);
  console.log("Amostra:", links.slice(0, 10));

  // 2. Acessa uma música para ver estrutura da página de cifra
  if (links.length > 0) {
    const songUrl = links[0].startsWith("http") ? links[0] : "https://www.cifras.com.br" + links[0];
    console.log("\nAcessando:", songUrl);
    const r2 = await axios.get(songUrl, { headers: H, timeout: 15000 });
    const $2 = cheerio.load(r2.data);

    const titulo  = $2("h1").first().text().trim();
    const artista = $2("h2, .artist, .artista").first().text().trim();
    console.log("Título:", titulo);
    console.log("Artista:", artista);

    // Tenta achar o conteúdo da cifra
    const sels = ["pre", ".cifra pre", ".cifra_cnt", "#cifra_cnt", ".g-fix pre", "article pre", ".tab-content", ".chord-sheet"];
    for (const sel of sels) {
      const el = $2(sel).first();
      if (el.length && el.text().length > 30) {
        console.log("Cifra em:", sel, "| tamanho:", el.text().length);
        console.log("Preview:", el.text().slice(0, 300));
        break;
      }
    }

    // Tom
    const tom = $2("[class*='tom'], [id*='tom'], .key").first().text();
    console.log("Tom element:", tom);

    // Título da página
    console.log("Page title:", $2("title").text());
  }

  // 3. Vê quantos artistas sertanejos têm no site
  const rSert = await axios.get("https://www.cifras.com.br/estilo/sertanejo", { headers: H, timeout: 15000 }).catch(() => null);
  if (rSert) {
    const $3 = cheerio.load(rSert.data);
    const artistas = [];
    $3("a[href]").each(function() {
      const href = $3(this).attr("href") || "";
      if (href.match(/^\/[a-z0-9-]+$/) && !href.includes("estilo") && !href.includes("cifra")) {
        artistas.push(href);
      }
    });
    console.log("\nArtistas sertanejos encontrados:", artistas.length);
    console.log("Amostra:", artistas.slice(0, 10));
  }
}

run().catch(e => console.error("ERRO:", e.message));
