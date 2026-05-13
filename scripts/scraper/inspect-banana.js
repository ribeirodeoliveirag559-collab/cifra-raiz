const axios = require("axios");
const h = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0",
  "Referer": "https://www.bananacifras.com"
};

async function run() {
  // 1. Pega músicas de um artista sertanejo
  const artistPage = await axios.get("https://www.bananacifras.com/simplificada/chitaozinho-xororo", { headers: h, timeout: 15000 });
  const m = artistPage.data.match(/"json":"([^"]+)"/);
  const jsonUrl = m ? "https://www.bananacifras.com" + m[1] : null;
  console.log("JSON URL artista:", jsonUrl);

  if (jsonUrl) {
    const songs = await axios.get(jsonUrl, { headers: h, timeout: 15000 });
    console.log("Músicas do artista:", JSON.stringify(songs.data).slice(0, 1000));
  }

  // 2. Tenta acessar uma música diretamente
  const songCandidates = [
    "https://www.bananacifras.com/simplificada/pagina-de-amigos",
    "https://www.bananacifras.com/simplificada/chitaozinho-xororo/pagina-de-amigos",
  ];
  for (const u of songCandidates) {
    try {
      const r = await axios.get(u, { headers: h, timeout: 10000 });
      console.log("\nOK:", u, "size:", r.data.length);
      const bjs = r.data.match(/bananajs=(\[[\s\S]+?\])\s*<\/script>/);
      if (bjs) console.log("bananajs:", bjs[1].slice(0, 500));
      break;
    } catch (e) {
      console.log("404:", u);
    }
  }

  // 3. Tenta a API JSON de uma música específica com artista
  const apiCandidates = [
    "https://www.bananacifras.com/json/simplificada.js?song=pagina-de-amigos&artist=chitaozinho-xororo",
    "https://www.bananacifras.com/json/cifra.js?song=pagina-de-amigos&artist=chitaozinho-xororo",
    "https://cifra.b-cdn.net/s/chitaozinho-xororo/pagina-de-amigos.js",
    "https://cifra.b-cdn.net/b/chitaozinho-xororo/pagina-de-amigos.js",
    "https://cifra.b-cdn.net/br/chitaozinho-xororo/pagina-de-amigos.js",
  ];
  for (const u of apiCandidates) {
    try {
      const r = await axios.get(u, { headers: h, timeout: 8000 });
      console.log("\nACHOU:", u);
      console.log(JSON.stringify(r.data).slice(0, 500));
      break;
    } catch (e) {
      console.log("FAIL:", u, e.response && e.response.status);
    }
  }
}

run().catch(e => console.error("FATAL:", e.message));
