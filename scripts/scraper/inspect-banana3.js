const axios = require("axios");
const h = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0",
  "Referer": "https://www.bananacifras.com"
};

async function run() {
  // 1. Testa Search API para músicas sertanejas
  console.log("=== SEARCH API ===");
  const search = await axios.get("https://cifra.b-cdn.net/searchapi/song?v=6&BR=1&q=chitaozinho+xororo&only_tracks=1", { headers: h, timeout: 15000 });
  console.log("Search result (primeiros 3):", JSON.stringify(Array.isArray(search.data) ? search.data.slice(0,3) : search.data).slice(0,1000));

  // 2. Testa tabversions com ID numérico
  console.log("\n=== TAB VERSIONS (IDs numéricos) ===");
  // Tenta pegar o track_id da página de uma música conhecida
  const songPage = await axios.get("https://www.bananacifras.com/simplificada/pagina-de-amigos", { headers: h, timeout: 15000 });
  const trackIdMatch = songPage.data.match(/track_id['":\s]+(\d+)/);
  console.log("track_id na página:", trackIdMatch && trackIdMatch[1]);

  // Tenta tabversions com IDs de 1 a 10 para descobrir o formato
  for (let id = 100; id <= 105; id++) {
    try {
      const r = await axios.get(`https://www.bananacifras.com/json/tabversions.js?id=${id}`, { headers: h, timeout: 8000 });
      console.log(`ID ${id}:`, JSON.stringify(r.data).slice(0, 200));
    } catch(e) {
      console.log(`ID ${id}: ${e.response && e.response.status}`);
    }
  }

  // 3. Testa search sem filtro e veja o formato completo
  console.log("\n=== SEARCH FORMATO COMPLETO ===");
  const s2 = await axios.get("https://cifra.b-cdn.net/searchapi/song?v=6&BR=1&q=zeze+di+camargo", { headers: h, timeout: 15000 });
  if (Array.isArray(s2.data) && s2.data.length > 0) {
    console.log("1 resultado completo:", JSON.stringify(s2.data[0]));
    console.log("Total resultados:", s2.data.length);
  }
}

run().catch(e => console.error("FATAL:", e.message));
