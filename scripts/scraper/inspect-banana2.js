const axios = require("axios");
const h = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0",
  "Referer": "https://www.bananacifras.com"
};

async function run() {
  // Pega o banana.js para entender as chamadas de API
  const js = await axios.get("https://www.bananacifras.com/js/banana.js?v=193f751b&hl=pt-BR", { headers: h, timeout: 15000 });
  const code = js.data;

  // Procura por URLs de CDN ou endpoints de API
  const cdnUrls = code.match(/https?:\/\/[^'"`,\s]+/g) || [];
  console.log("URLs no banana.js:");
  const unique = [...new Set(cdnUrls)];
  unique.forEach(u => console.log(" -", u));

  // Procura por padrões de fetch/ajax
  const fetchPatterns = code.match(/fetch\([^)]{3,100}\)/g) || [];
  console.log("\nFetch calls:", fetchPatterns.slice(0, 10));

  // Procura por 'b-cdn' ou 'viewapi'
  const apiParts = code.match(/['"](\/[^'"]{5,100}\.js[^'"]*)['"]/g) || [];
  console.log("\nAPI paths:", apiParts.slice(0, 20));

  // Busca padrão de construção de URL de cifra
  const cifraPatterns = code.match(/.{0,30}simplificada.{0,50}/g) || [];
  console.log("\nSimplificada patterns:", cifraPatterns.slice(0, 10));
}

run().catch(e => console.error("FATAL:", e.message));
