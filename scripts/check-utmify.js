const https = require("https");
https.get("https://cifra-raiz.vercel.app/landing?cb=" + Date.now(), (res) => {
  let html = "";
  res.on("data", (c) => html += c);
  res.on("end", () => {
    console.log("==== Status final dos trackings ====");
    console.log("Meta Pixel (REMOVIDO):....", html.includes("994611726827692") ? "AINDA PRESENTE ✗" : "REMOVIDO ✓");
    console.log("fbevents.js (Meta):.......", html.includes("connect.facebook.net") ? "AINDA PRESENTE ✗" : "REMOVIDO ✓");
    console.log();
    console.log("Utmify UTMs:..............", html.includes("cdn.utmify.com.br/scripts/utms") ? "ATIVO ✓" : "FALTA ✗");
    console.log("Utmify Pixel:.............", html.includes("6a3de0c384db20cfec9804fb") ? "ATIVO ✓" : "FALTA ✗");
  });
});
