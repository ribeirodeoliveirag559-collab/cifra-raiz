// Testa o parser completo em 2 músicas
process.argv.push("--mode=test");
const fs = require("fs");

// Monkey-patch para testar apenas 2 músicas
const orig = require("./index.js");
