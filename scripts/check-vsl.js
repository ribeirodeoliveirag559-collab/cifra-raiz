const https = require("https");
https.request({ hostname: "cifra-raiz.vercel.app", path: "/vsl.mp4", method: "HEAD" }, (res) => {
  console.log("Status:", res.statusCode);
  console.log("Content-Type:", res.headers["content-type"]);
  console.log("Content-Length:", res.headers["content-length"], "bytes (" + (res.headers["content-length"] / 1024 / 1024).toFixed(1) + " MB)");
}).end();
