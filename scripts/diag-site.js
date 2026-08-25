const https = require("https");

function check(path) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.request({
      hostname: "cifra-raiz.vercel.app",
      path,
      method: "GET",
      timeout: 30000,
      headers: { "Cache-Control": "no-cache" },
    }, (res) => {
      let d = "";
      res.on("data", (c) => d += c);
      res.on("end", () => resolve({
        path,
        status: res.statusCode,
        time: Date.now() - start,
        location: res.headers.location,
        size: d.length,
      }));
    });
    req.on("error", (e) => resolve({ path, err: e.code || e.message }));
    req.on("timeout", () => { req.destroy(); resolve({ path, err: "TIMEOUT 30s" }); });
    req.end();
  });
}

(async () => {
  console.log("=== Diagnostico do site ===\n");
  for (const p of ["/landing", "/login", "/", "/cifras", "/api/primeiro-acesso"]) {
    const r = await check(p);
    if (r.err) {
      console.log(`${p}: ERRO ${r.err}`);
    } else {
      console.log(`${p}: ${r.status} em ${r.time}ms${r.location ? " → " + r.location : ""} (${r.size} bytes)`);
    }
  }
})();
