const https = require("https");
https.get("https://cifra-raiz.vercel.app/landing?cb=" + Date.now(), (res) => {
  let html = "";
  res.on("data", (c) => html += c);
  res.on("end", () => {
    console.log("==== Validacao Utmify na landing ====");
    console.log("Script UTMs:..............", html.includes("cdn.utmify.com.br/scripts/utms/latest.js") ? "OK" : "FALTA");
    console.log("Atributo prevent-xcod-sck:", html.includes("data-utmify-prevent-xcod-sck") ? "OK" : "FALTA");
    console.log("Atributo prevent-subids:..", html.includes("data-utmify-prevent-subids") ? "OK" : "FALTA");
    console.log("Pixel ID Utmify:..........", html.includes("6a3de0c384db20cfec9804fb") ? "OK" : "FALTA");
    console.log("Pixel.js Utmify:..........", html.includes("cdn.utmify.com.br/scripts/pixel/pixel.js") ? "OK" : "FALTA");
    console.log();
    console.log("==== Meta Pixel (continua OK?) ====");
    console.log("Pixel ID Meta:............", html.includes("994611726827692") ? "OK" : "FALTA");
  });
});
