const https = require("https");

async function fetch(path, headers = {}) {
  return new Promise((resolve) => {
    https.request({
      hostname: "cifra-raiz.vercel.app",
      path,
      method: "GET",
      headers,
    }, (res) => {
      let d = "";
      res.on("data", (c) => d += c);
      res.on("end", () => resolve({
        status: res.statusCode,
        cache: res.headers["x-vercel-cache"],
        cc: res.headers["cache-control"],
        body: d,
      }));
    }).on("error", () => resolve({ status: 0 })).end();
  });
}

(async () => {
  console.log("==== Cache busting /login ====");
  for (let i = 1; i <= 5; i++) {
    const r = await fetch("/login?cb=" + Date.now() + i);
    console.log("ping " + i + ": status " + r.status + " | cache: " + r.cache);
  }
  console.log("\n==== Estado final ====");
  const clean = await fetch("/login", { "Cache-Control": "no-cache" });
  console.log("status:", clean.status);
  console.log("x-vercel-cache:", clean.cache);
  console.log("cache-control:", clean.cc);
  // Verifica se contém código novo (fetch direto)
  const hasFetch = clean.body.includes("grant_type=password") || clean.body.includes("auth/v1/token");
  console.log("contem URL Supabase no HTML/JS:", hasFetch ? "SIM (novo codigo)" : "NAO (HTML so renderiza no client)");
})();
