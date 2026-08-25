const https = require("https");
const dns = require("dns").promises;

async function check(host) {
  console.log("\n== " + host + " ==");
  try {
    const ips = await dns.resolve4(host);
    console.log("DNS:", ips);
  } catch (e) {
    console.log("DNS FALHOU:", e.code, "-", e.message);
    return;
  }
  return new Promise((resolve) => {
    https.request({ hostname: host, path: "/auth/v1/health", method: "GET" }, (res) => {
      let d = "";
      res.on("data", (c) => d += c);
      res.on("end", () => {
        console.log("HTTP:", res.statusCode, "|", d.substring(0, 100));
        resolve();
      });
    }).on("error", (e) => { console.log("HTTP ERR:", e.code); resolve(); }).end();
  });
}

(async () => {
  await check("yhysidocbposvszzchlr.supabase.co");
})();
