const https = require("https");
const url = "https://ggcheckout.app/checkout/v5/szixLCzarrqQbKswn7g4";
console.log("Testando:", url);
const req = https.request({
  hostname: "ggcheckout.app",
  path: "/checkout/v5/szixLCzarrqQbKswn7g4",
  method: "GET",
  headers: { "User-Agent": "Mozilla/5.0" }
}, (res) => {
  console.log("Status:", res.statusCode);
  console.log("Location:", res.headers.location || "(nenhum redirect)");
  console.log("Content-Type:", res.headers["content-type"]);
  let d = "";
  res.on("data", c => d += c);
  res.on("end", () => {
    console.log("Body size:", d.length, "bytes");
    if (d.length < 500) console.log("Body:", d);
    if (d.includes("<title>")) {
      const t = d.match(/<title>(.*?)<\/title>/);
      if (t) console.log("Titulo da pagina:", t[1]);
    }
    if (d.includes("erro") || d.includes("Error") || d.includes("404")) {
      console.log("Palavras de erro encontradas no body");
    }
  });
});
req.on("error", e => console.log("ERRO:", e.message));
req.end();
