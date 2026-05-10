/**
 * Inspetor de estrutura do Cifra Club
 * Mostra a estrutura real da página para ajustar o parser
 */
const axios   = require("axios");
const cheerio = require("cheerio");
const fs      = require("fs");

const URL = "https://www.cifraclub.com.br/chitaozinho-e-xororo/evidencias/";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Accept-Language": "pt-BR,pt;q=0.9",
  "Accept": "text/html,application/xhtml+xml",
};

(async () => {
  console.log("Baixando página...");
  const res = await axios.get(URL, { headers: HEADERS, timeout: 15000 });
  const html = res.data;
  const $ = cheerio.load(html);

  // Salva HTML completo para inspeção manual
  fs.writeFileSync("output/pagina_evidencias.html", html, "utf-8");
  console.log("HTML salvo em output/pagina_evidencias.html\n");

  // ── Headings ────────────────────────────────────────────────
  console.log("=== HEADINGS ===");
  $("h1, h2, h3").each((_, el) => {
    const tag = el.tagName;
    const cls = $(el).attr("class") || "";
    const txt = $(el).text().trim().slice(0, 80);
    console.log(`  <${tag} class="${cls}"> ${txt}`);
  });

  // ── Title tag ───────────────────────────────────────────────
  console.log("\n=== TITLE TAG ===");
  console.log(" ", $("title").text().trim());

  // ── Meta description ────────────────────────────────────────
  console.log("\n=== META ===");
  $("meta[property], meta[name]").each((_, el) => {
    const n = $(el).attr("name") || $(el).attr("property");
    const v = ($(el).attr("content") || "").slice(0, 100);
    if (n && v) console.log(`  ${n}: ${v}`);
  });

  // ── PRE elements ────────────────────────────────────────────
  console.log("\n=== PRE ELEMENTS ===");
  $("pre").each((i, el) => {
    const cls = $(el).attr("class") || "";
    const id  = $(el).attr("id") || "";
    const raw = $(el).html() || "";
    console.log(`  pre[${i}] class="${cls}" id="${id}"`);
    console.log(`    HTML (200 chars): ${raw.slice(0, 200)}`);
    console.log(`    TEXT (200 chars): ${$(el).text().slice(0, 200).replace(/\n/g, "|")}`);
  });

  // ── Script tags com dados relevantes ────────────────────────
  console.log("\n=== SCRIPT DATA ===");
  $("script").each((i, el) => {
    const src = $(el).html() || "";
    if (src.includes("tom") || src.includes("cifra") || src.includes("musica") || src.includes("artista")) {
      const trimmed = src.trim().slice(0, 300);
      console.log(`  script[${i}]: ${trimmed}`);
      console.log("  ---");
    }
  });

  // ── Artista (link/texto no breadcrumb ou header) ─────────────
  console.log("\n=== ARTISTA SELETORES ===");
  ["h2.t3 a", ".art_main a", "a[href*='/chitaozinho']", "[itemprop='name']", ".js-autor"].forEach(sel => {
    const txt = $(sel).first().text().trim();
    if (txt) console.log(`  ${sel}: "${txt}"`);
  });

  // ── Elementos com "tom" ─────────────────────────────────────
  console.log("\n=== ELEMENTOS TOM ===");
  $("[class*='tom'], [id*='tom'], [data*='tom']").each((_, el) => {
    const tag = el.tagName;
    const cls = $(el).attr("class") || "";
    const id  = $(el).attr("id") || "";
    const txt = $(el).text().trim().slice(0, 50);
    const attrs = JSON.stringify(el.attribs || {});
    console.log(`  <${tag} class="${cls}" id="${id}"> txt="${txt}" attrs=${attrs.slice(0,150)}`);
  });

})().catch(console.error);
