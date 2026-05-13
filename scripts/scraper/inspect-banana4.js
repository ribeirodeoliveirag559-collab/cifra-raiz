const axios = require("axios");
const h = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0",
  "Referer": "https://www.bananacifras.com"
};
const CDN = "https://cifra.b-cdn.net";

async function run() {
  // Para ID 100, temos hash "6ef6feb6f2c42fc3347477971978c80d" e tab_id "96"(cifra) e "1394352"(simplificada)
  const hash = "6ef6feb6f2c42fc3347477971978c80d";
  const tabId = "1394352"; // simplificada

  console.log("=== TENTANDO URLs DE CONTEÚDO ===");
  const candidates = [
    `${CDN}/${hash}.js`,
    `${CDN}/tabs/${hash}.js`,
    `${CDN}/tab/${tabId}.js`,
    `${CDN}/tabs/${tabId}.js`,
    `${CDN}/t/${tabId}.js`,
    `${CDN}/content/${hash}.js`,
    `${CDN}/c/${hash}.js`,
    `${CDN}/s/${hash}.js`,
    `https://www.bananacifras.com/json/tab.js?id=${tabId}`,
    `https://www.bananacifras.com/json/tabcontent.js?id=${tabId}`,
    `https://www.bananacifras.com/json/content.js?id=${tabId}&hash=${hash}`,
  ];
  for (const u of candidates) {
    try {
      const r = await axios.get(u, { headers: h, timeout: 8000 });
      console.log("ACHOU:", u);
      console.log("Conteúdo:", JSON.stringify(r.data).slice(0, 500));
      break;
    } catch(e) {
      console.log(`FAIL(${e.response && e.response.status}): ${u}`);
    }
  }

  // Tenta buscar a música de track_id 100 direto
  console.log("\n=== BUSCA PELA MÚSICA ID 100 ===");
  try {
    const r = await axios.get(`https://www.bananacifras.com/json/tabversions.js?id=100`, { headers: h, timeout: 10000 });
    console.log("Versões ID 100:", JSON.stringify(r.data));
  } catch(e) { console.log("Fail:", e.message); }

  // Tenta o search API para encontrar músicas sertanejas com track_id
  console.log("\n=== SEARCH SERTANEJO ARTISTAS CONHECIDOS ===");
  const artistas = ["chitaozinho xororo", "gusttavo lima", "zeze di camargo luciano", "leandro leonardo"];
  for (const a of artistas) {
    const r = await axios.get(`https://cifra.b-cdn.net/searchapi/song?v=6&BR=1&q=${encodeURIComponent(a)}&only_tracks=1`, { headers: h, timeout: 10000 });
    if (Array.isArray(r.data)) {
      console.log(`"${a}": ${r.data.length} resultados`);
      if (r.data.length > 0) console.log(" Primeiro:", JSON.stringify(r.data[0]));
    }
  }
}

run().catch(e => console.error("FATAL:", e.message));
