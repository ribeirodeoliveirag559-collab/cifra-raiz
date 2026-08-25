const https = require("https");
https.get("https://cifra-raiz.vercel.app/landing?cb=" + Date.now(), (res) => {
  let html = "";
  res.on("data", (c) => html += c);
  res.on("end", () => {
    console.log("==== Validacao dos CTAs ====");
    const targetBlank = (html.match(/target="_blank"/g) || []).length;
    const ggCheckout = (html.match(/ggcheckout\.app\/checkout\/v5/g) || []).length;
    const relNoopener = (html.match(/rel="noopener/g) || []).length;
    console.log("Total <a target=_blank>:......", targetBlank);
    console.log("Links pro checkout GGCheckout:", ggCheckout);
    console.log("rel=noopener presente:.......", relNoopener);
    // Extrai as ancoras que apontam pro checkout
    const anchors = html.match(/<a[^>]*href="https:\/\/ggcheckout[^"]*"[^>]*>/g) || [];
    console.log("\n==== Anchors pro checkout ====");
    anchors.slice(0, 3).forEach((a, i) => console.log((i+1) + ".", a.substring(0, 150) + (a.length > 150 ? "..." : "")));
    console.log("Total:", anchors.length);
  });
});
