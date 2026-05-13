const axios = require("axios");
const h = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0",
  "Referer": "https://www.bananacifras.com"
};

async function run() {
  // 1. Testa busca de conteúdo de uma música conhecida pelo track_id
  console.log("=== TAB CONTENT PARA TRACK 290484 (É por você que canto - Leandro) ===");
  const tv = await axios.get("https://www.bananacifras.com/json/tabversions.js?id=290484", { headers: h, timeout: 10000 });
  console.log("Versões:", JSON.stringify(tv.data).slice(0, 500));

  // Pega o tab_id da versão simplificada (content_type=1)
  const simplificada = tv.data.find(v => v[1] === "1");
  if (simplificada) {
    const tabId = simplificada[0];
    console.log("\nTab simplificada ID:", tabId, "Tom:", simplificada[4]);
    const content = await axios.get(`https://www.bananacifras.com/json/tab.js?id=${tabId}`, { headers: h, timeout: 10000 });
    console.log("Conteúdo:", JSON.stringify(content.data).slice(0, 800));
  }

  // 2. Busca por múltiplos artistas sertanejos conhecidos
  console.log("\n=== BUSCA DE MÚSICAS POR ARTISTAS SERTANEJOS ===");
  const artistasBusca = [
    "leandro e leonardo",
    "zeze di camargo e luciano",
    "chitaozinho e xororo",
    "gusttavo lima",
    "luan santana",
    "ana castela",
    "marilia mendonca",
    "henrique e juliano",
    "jorge e mateus",
    "simone e simaria",
    "maiara e maraisa",
    "hugo e guilherme",
    "matheus e kauan",
    "joao neto e frederico",
    "joao bosco e vinicius"
  ];

  for (const artist of artistasBusca) {
    const r = await axios.get(`https://cifra.b-cdn.net/searchapi/song?v=6&BR=1&q=${encodeURIComponent(artist)}&only_tracks=1`, { headers: h, timeout: 10000 });
    const songs = Array.isArray(r.data) ? r.data.filter(s => s[1] === "1" || true) : [];
    console.log(`"${artist}": ${songs.length} músicas`);
    songs.slice(0, 3).forEach(s => console.log(`  - [${s[0]}] ${s[2]} | ${s[4]}`));
    await new Promise(r => setTimeout(r, 500));
  }

  // 3. Tenta buscar pelo slug direto para obter track_id
  console.log("\n=== MAPEAMENTO SLUG -> TRACK_ID ===");
  const slugCandidates = [
    { slug: "e-o-amor", expected: "100" },
    { slug: "pagina-de-amigos", expected: "?" },
  ];
  for (const { slug } of slugCandidates) {
    const r = await axios.get(`https://www.bananacifras.com/json/tabversions.js?slug=${slug}`, { headers: h, timeout: 8000 })
      .catch(() => null);
    const r2 = await axios.get(`https://www.bananacifras.com/json/track.js?slug=${slug}`, { headers: h, timeout: 8000 })
      .catch(() => null);
    const r3 = await axios.get(`https://cifra.b-cdn.net/viewapi/track.js?slug=${slug}`, { headers: h, timeout: 8000 })
      .catch(() => null);
    console.log(`"${slug}": tabversions=${r&&r.status}, track=${r2&&JSON.stringify(r2.data).slice(0,100)}, cdn=${r3&&JSON.stringify(r3.data).slice(0,100)}`);
  }
}

run().catch(e => console.error("FATAL:", e.message));
