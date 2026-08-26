/**
 * Extrai um índice leve (sem o texto/acordes de cada música) do arquivo
 * dados.ts (14MB) para reduzir drasticamente o JS enviado ao navegador
 * nas páginas de listagem/busca. O texto completo continua em dados.ts,
 * usado só no servidor (API route) quando o usuário abre 1 música.
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "src", "lib", "dados.ts");
const OUT = path.join(__dirname, "..", "src", "lib", "dados-index.ts");
const TMP = path.join(__dirname, "..", "src", "lib", "_tmp-cifras.cjs");

const raw = fs.readFileSync(SRC, "utf8");

const startMarker = "export const CIFRAS: Cifra[] = [";
const endMarker = "\nexport type Aula";

const startIdx = raw.indexOf(startMarker);
const endIdx = raw.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) {
  throw new Error("Não encontrei os marcadores esperados em dados.ts — verifique o arquivo.");
}

// Pega só o array literal, sem a anotação de tipo
const arrayLiteral = raw
  .slice(startIdx + "export const CIFRAS: Cifra[] = ".length, endIdx)
  .trim()
  .replace(/;\s*$/, "");

fs.writeFileSync(TMP, "module.exports = " + arrayLiteral + ";\n", "utf8");

// Carrega o array real em memória via require (JS puro, sem tipos)
delete require.cache[require.resolve(TMP)];
const CIFRAS = require(TMP);

console.log("Total de cifras carregadas:", CIFRAS.length);

// Remove o campo pesado (texto + acordes) — mantém só metadados
const indice = CIFRAS.map(({ cifra, ...resto }) => resto);

const header = `/**
 * Índice leve das cifras — SEM o campo de texto/acordes.
 * Gerado automaticamente por scripts/gerar-indice-cifras.js a partir
 * de dados.ts. Não edite manualmente — rode o script novamente se
 * dados.ts mudar.
 *
 * Usado para listagem, busca e "mais tocadas" — muito mais leve que
 * importar o dados.ts inteiro (14MB) no cliente. Para o texto completo
 * de UMA música, use a API /api/cifras/[id] (server-side, lê dados.ts).
 */
import type { Cifra } from "@/lib/dados";

export type CifraIndex = Omit<Cifra, "cifra">;

export const CIFRAS_INDEX: CifraIndex[] = `;

const body = JSON.stringify(indice);

fs.writeFileSync(OUT, header + body + ";\n", "utf8");
fs.unlinkSync(TMP);

const stats = fs.statSync(OUT);
console.log("Índice gerado em:", OUT);
console.log("Tamanho:", (stats.size / 1024 / 1024).toFixed(2), "MB (era 14MB o arquivo completo)");
