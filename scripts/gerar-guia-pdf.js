/**
 * Gera o PDF "Como Afinar e Tocar Acordes no Violão — Guia Completo Cifra Raiz"
 * Saída: C:\Users\Gustavo\cifra-raiz\public\guia-afinar-violao-cifra-raiz.pdf
 */
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ──────────────────────────────────────────────────────────
// IDENTIDADE VISUAL CIFRA RAIZ
// ──────────────────────────────────────────────────────────
const C = {
  PRIMARY: "#4A2810", // marrom madeira
  GOLD:    "#D4900A", // dourado
  BG:      "#FAF7F2", // bege quente
  DARK:    "#2C1A0E", // marrom muito escuro
  MUTED:   "#7A5C44", // marrom suave
  LIGHT:   "#F0EAE0", // bege claro
  BEIGE:   "#FDF6E8", // amarelo bege
  WHITE:   "#FFFFFF",
  CREAM:   "#C4A882", // creme
  SUCCESS: "#10b981",
  ALERT:   "#ef4444",
};

const OUT  = "C:/Users/Gustavo/cifra-raiz/public/guia-afinar-violao-cifra-raiz.pdf";
const LOGO = "C:/Users/Gustavo/cifra-raiz/public/logo.jpg";

// ──────────────────────────────────────────────────────────
// DOCUMENTO
// ──────────────────────────────────────────────────────────
const doc = new PDFDocument({
  size: "A4",
  margins: { top: 90, bottom: 70, left: 55, right: 55 },
  info: {
    Title:    "Como Afinar e Tocar Acordes no Violão — Guia Completo Cifra Raiz",
    Author:   "Cifra Raiz",
    Subject:  "Guia para iniciantes de violão sertanejo",
    Keywords: "violão, sertanejo, modão, raiz, cifras, acordes, afinador",
  },
  autoFirstPage: false,
  bufferPages: true,  // permite voltar e adicionar header/footer depois
});

doc.pipe(fs.createWriteStream(OUT));

// Fonte Unicode (pra setas ↑↓ e símbolos)
try { doc.registerFont("Body",     "C:/Windows/Fonts/arial.ttf"); } catch { doc.registerFont("Body", "Helvetica"); }
try { doc.registerFont("Bold",     "C:/Windows/Fonts/arialbd.ttf"); } catch { doc.registerFont("Bold", "Helvetica-Bold"); }
try { doc.registerFont("Italic",   "C:/Windows/Fonts/ariali.ttf"); } catch { doc.registerFont("Italic", "Helvetica-Oblique"); }
try { doc.registerFont("Display",  "C:/Windows/Fonts/timesbd.ttf"); } catch { doc.registerFont("Display", "Times-Bold"); }

// A4 dimensions
const PAGE_W = 595.28;
const PAGE_H = 841.89;

// ──────────────────────────────────────────────────────────
// CABEÇALHO / RODAPÉ
// ──────────────────────────────────────────────────────────
// Faixa de páginas que recebe cabeçalho/rodapé (preenchidas no final)
let chromeStartIdx = -1;
let chromeEndIdx   = -1;

function drawHeaderForCurrentPage(pageNumber) {
  doc.image(LOGO, 55, 28, { width: 28, height: 28 });
  doc.font("Display").fontSize(13).fillColor(C.PRIMARY)
     .text("Cifra Raiz", 92, 35, { width: 200, lineBreak: false });
  doc.font("Body").fontSize(8).fillColor(C.MUTED)
     .text("Guia do Violonista", 92, 50, { width: 200, lineBreak: false });
  doc.strokeColor(C.GOLD).lineWidth(0.8)
     .moveTo(55, 70).lineTo(PAGE_W - 55, 70).stroke();
}

function drawFooterForCurrentPage(pageNumber) {
  const y = PAGE_H - 40;
  doc.strokeColor(C.GOLD).lineWidth(0.5)
     .moveTo(55, y - 8).lineTo(PAGE_W - 55, y - 8).stroke();
  doc.font("Body").fontSize(8).fillColor(C.MUTED)
     .text("cifra-raiz.vercel.app", 55, y, { width: 200, lineBreak: false });
  doc.font("Bold").fontSize(9).fillColor(C.GOLD)
     .text(`${pageNumber}`, 0, y, { width: PAGE_W - 55, align: "right", lineBreak: false });
}

// ──────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────
function h1(txt) {
  doc.moveDown(0.5);
  doc.font("Display").fontSize(24).fillColor(C.PRIMARY)
     .text(txt, { align: "left" });
  // Linha dourada curta sob o título
  const y = doc.y + 2;
  doc.strokeColor(C.GOLD).lineWidth(2.5)
     .moveTo(55, y).lineTo(105, y).stroke();
  doc.moveDown(1);
}

function h2(txt) {
  doc.moveDown(0.6);
  doc.font("Bold").fontSize(15).fillColor(C.GOLD).text(txt);
  doc.moveDown(0.3);
}

function h3(txt) {
  doc.moveDown(0.4);
  doc.font("Bold").fontSize(12).fillColor(C.PRIMARY).text(txt);
  doc.moveDown(0.2);
}

function p(txt, opts = {}) {
  doc.font("Body").fontSize(10.5).fillColor(C.DARK).text(txt, {
    align: opts.align || "justify",
    paragraphGap: opts.gap ?? 5,
    lineGap: 2,
    ...opts,
  });
}

function small(txt) {
  doc.font("Body").fontSize(9).fillColor(C.MUTED).text(txt, { lineGap: 1 });
}

function ul(items) {
  items.forEach(item => {
    const startY = doc.y;
    doc.fillColor(C.GOLD).font("Bold").fontSize(11).text("•", 60, startY, { continued: false });
    doc.font("Body").fontSize(10.5).fillColor(C.DARK)
       .text(item, 75, startY, { width: PAGE_W - 130, lineGap: 2 });
    doc.moveDown(0.3);
  });
  doc.moveDown(0.3);
}

function ol(items) {
  items.forEach((item, i) => {
    const startY = doc.y;
    doc.fillColor(C.GOLD).font("Bold").fontSize(10).text(`${i+1}.`, 60, startY);
    doc.font("Body").fontSize(10.5).fillColor(C.DARK)
       .text(item, 78, startY, { width: PAGE_W - 133, lineGap: 2 });
    doc.moveDown(0.4);
  });
  doc.moveDown(0.3);
}

function dica(titulo, texto) {
  ensureSpace(85);
  const startY = doc.y;
  const w = PAGE_W - 110;
  // Box dourado
  doc.fillColor(C.BEIGE).rect(55, startY, w, 70).fill();
  doc.strokeColor(C.GOLD).lineWidth(1).rect(55, startY, w, 70).stroke();
  // Faixa lateral
  doc.fillColor(C.GOLD).rect(55, startY, 4, 70).fill();
  // Conteúdo
  doc.font("Bold").fontSize(10).fillColor(C.GOLD)
     .text("DICA CIFRA RAIZ", 70, startY + 10);
  doc.font("Bold").fontSize(11).fillColor(C.PRIMARY)
     .text(titulo, 70, startY + 24, { width: w - 30 });
  doc.font("Body").fontSize(9.5).fillColor(C.DARK)
     .text(texto, 70, startY + 40, { width: w - 30, lineGap: 1 });
  doc.y = startY + 78;
  doc.moveDown(0.5);
}

function alerta(titulo, texto) {
  ensureSpace(70);
  const startY = doc.y;
  const w = PAGE_W - 110;
  doc.fillColor("#FEF3C7").rect(55, startY, w, 60).fill();
  doc.strokeColor("#F59E0B").lineWidth(1).rect(55, startY, w, 60).stroke();
  doc.fillColor("#F59E0B").rect(55, startY, 4, 60).fill();
  doc.font("Bold").fontSize(10).fillColor("#92400E")
     .text("⚠  " + titulo, 70, startY + 10);
  doc.font("Body").fontSize(9.5).fillColor(C.DARK)
     .text(texto, 70, startY + 26, { width: w - 30, lineGap: 1 });
  doc.y = startY + 68;
  doc.moveDown(0.5);
}

function destaque(titulo, texto) {
  ensureSpace(95);
  const startY = doc.y;
  const w = PAGE_W - 110;
  doc.fillColor(C.PRIMARY).rect(55, startY, w, 80).fill();
  doc.font("Bold").fontSize(11).fillColor(C.GOLD)
     .text(titulo.toUpperCase(), 70, startY + 12, { width: w - 30 });
  doc.font("Body").fontSize(10).fillColor(C.WHITE)
     .text(texto, 70, startY + 32, { width: w - 30, lineGap: 2 });
  doc.y = startY + 88;
  doc.moveDown(0.5);
}

function divider() {
  doc.moveDown(0.5);
  const y = doc.y;
  const cx = PAGE_W / 2;
  doc.strokeColor(C.LIGHT).lineWidth(1).moveTo(55, y).lineTo(cx - 18, y).stroke();
  doc.strokeColor(C.LIGHT).lineWidth(1).moveTo(cx + 18, y).lineTo(PAGE_W - 55, y).stroke();
  // Ornamento central — losango dourado
  doc.fillColor(C.GOLD).save();
  doc.translate(cx, y);
  doc.rotate(45);
  doc.rect(-4, -4, 8, 8).fill();
  doc.restore();
  doc.moveDown(1);
}

function ensureSpace(needed) {
  if (doc.y + needed > PAGE_H - 80) doc.addPage();
}

// ──────────────────────────────────────────────────────────
// DIAGRAMA DE ACORDE
// ──────────────────────────────────────────────────────────
// Convenção: corda 1 = Mi agudo (esquerda), corda 6 = Mi grave (direita)
// dedos: [[corda, casa], ...]
function chordBox(x, y, nome, dedos, mudas = [], pestana = null) {
  const sw = 11;          // espaço entre cordas
  const fh = 13;          // altura de casa
  const sx = x + 12;
  const sy = y + 28;

  // Nome do acorde
  doc.font("Display").fontSize(16).fillColor(C.PRIMARY)
     .text(nome, x, y, { width: 90, align: "center" });

  // Indicador de pestana ("3ª casa")
  if (pestana) {
    doc.font("Body").fontSize(7.5).fillColor(C.MUTED)
       .text(`${pestana}ª casa`, x, y + 18, { width: 90, align: "center" });
  }

  // Cordas (6 verticais)
  doc.strokeColor(C.MUTED).lineWidth(0.7);
  for (let i = 0; i < 6; i++) {
    const lx = sx + i * sw;
    doc.moveTo(lx, sy).lineTo(lx, sy + 4 * fh).stroke();
  }

  // Casas (5 horizontais; primeira é o cavalete grosso ou pestana)
  for (let i = 0; i < 5; i++) {
    const ly = sy + i * fh;
    const lw = (i === 0 && !pestana) ? 2.8 : 0.7;
    doc.lineWidth(lw).strokeColor(i === 0 && !pestana ? C.PRIMARY : C.MUTED)
       .moveTo(sx, ly).lineTo(sx + 5 * sw, ly).stroke();
  }

  // Pestana (barre)
  if (pestana) {
    doc.fillColor(C.PRIMARY).rect(sx, sy, 5 * sw, 5).fill();
  }

  // Cordas mudas (x acima)
  doc.font("Bold").fontSize(8).fillColor(C.PRIMARY);
  (mudas || []).forEach(s => {
    const cx = sx + (s - 1) * sw - 2;
    doc.text("×", cx, sy - 11);
  });

  // Dedos (círculos dourados)
  dedos.forEach(([corda, casa]) => {
    const cx = sx + (corda - 1) * sw;
    const cy = sy + (casa - 0.5) * fh;
    doc.fillColor(C.GOLD).circle(cx, cy, 4.8).fill();
  });
}

// Diagrama de palhetada — ↓ e ↑
function palhetadaRow(x, y, padrao) {
  // padrao = ["↓","↓","↑","↓","↑"]
  const cellW = 28;
  padrao.forEach((s, i) => {
    const cx = x + i * cellW;
    doc.font("Bold").fontSize(20).fillColor(s.includes("↑") ? C.MUTED : C.GOLD)
       .text(s, cx, y, { width: cellW, align: "center" });
  });
  // Linha de tempo
  doc.strokeColor(C.LIGHT).lineWidth(0.5)
     .moveTo(x, y + 28).lineTo(x + padrao.length * cellW, y + 28).stroke();
  padrao.forEach((_, i) => {
    const cx = x + i * cellW;
    doc.font("Body").fontSize(8).fillColor(C.MUTED)
       .text(`${i+1}`, cx, y + 32, { width: cellW, align: "center" });
  });
}

// ══════════════════════════════════════════════════════════
// PÁGINA 1 — CAPA
// ══════════════════════════════════════════════════════════
doc.addPage();
// Fundo marrom inteiro
doc.fillColor(C.PRIMARY).rect(0, 0, PAGE_W, PAGE_H).fill();

// Padrão decorativo de violões (pequenas marcas douradas em diagonal)
doc.save();
doc.fillColor(C.GOLD).opacity(0.05);
for (let row = 0; row < 30; row++) {
  for (let col = 0; col < 20; col++) {
    const x = col * 40 + (row % 2) * 20;
    const y = row * 50;
    doc.circle(x, y, 2).fill();
  }
}
doc.restore();
doc.opacity(1);

// Borda dourada
doc.strokeColor(C.GOLD).lineWidth(2)
   .rect(30, 30, PAGE_W - 60, PAGE_H - 60).stroke();
doc.strokeColor(C.GOLD).lineWidth(0.5)
   .rect(38, 38, PAGE_W - 76, PAGE_H - 76).stroke();

// Logo grande centralizada
doc.image(LOGO, PAGE_W / 2 - 70, 110, { width: 140, height: 140 });

// Etiqueta superior
doc.font("Bold").fontSize(10).fillColor(C.GOLD)
   .text("CIFRA RAIZ APRESENTA", 0, 270, { width: PAGE_W, align: "center", characterSpacing: 3 });

// Linha decorativa
doc.strokeColor(C.GOLD).lineWidth(1)
   .moveTo(PAGE_W/2 - 80, 290).lineTo(PAGE_W/2 + 80, 290).stroke();

// Título principal
doc.font("Display").fontSize(38).fillColor(C.WHITE)
   .text("Como Afinar e", 0, 320, { width: PAGE_W, align: "center" });
doc.font("Display").fontSize(38).fillColor(C.GOLD)
   .text("Tocar Acordes", 0, 360, { width: PAGE_W, align: "center" });
doc.font("Display").fontSize(38).fillColor(C.WHITE)
   .text("no Violão", 0, 400, { width: PAGE_W, align: "center" });

// Subtítulo
doc.moveDown(2);
doc.font("Italic").fontSize(14).fillColor(C.CREAM)
   .text("Guia Completo para Quem Quer Tocar Sertanejo,", 0, 470, { width: PAGE_W, align: "center" });
doc.font("Italic").fontSize(14).fillColor(C.CREAM)
   .text("Modão e Música Raiz do Brasil", 0, 488, { width: PAGE_W, align: "center" });

// Ornamento de violão simbólico (SVG-like)
doc.save();
doc.translate(PAGE_W / 2, 580);
// Corpo do violão (simplificado)
doc.strokeColor(C.GOLD).lineWidth(1.5).fillColor("transparent");
doc.circle(0, 30, 32).stroke();    // corpo
doc.circle(0, 30, 8).fillColor(C.PRIMARY).fill();   // boca
doc.fillColor("transparent").strokeColor(C.GOLD);
doc.rect(-3, -50, 6, 50).stroke();  // braço
doc.rect(-8, -60, 16, 12).stroke(); // headstock
doc.restore();

// Rodapé da capa
doc.font("Body").fontSize(9).fillColor(C.CREAM)
   .text("EDIÇÃO ESPECIAL", 0, 720, { width: PAGE_W, align: "center", characterSpacing: 4 });
doc.font("Bold").fontSize(12).fillColor(C.GOLD)
   .text("cifra-raiz.vercel.app", 0, 740, { width: PAGE_W, align: "center" });

// A partir daqui, marcará páginas que recebem cabeçalho/rodapé
// (a próxima addPage será a primeira página de conteúdo)

// ══════════════════════════════════════════════════════════
// PÁGINA 2 — SUMÁRIO
// ══════════════════════════════════════════════════════════
doc.addPage();
chromeStartIdx = doc.bufferedPageRange().count - 1; // índice desta página
h1("Sumário");
p("Use este sumário como um mapa do seu aprendizado. Você pode começar pelo início e seguir em sequência — ou pular direto para a parte que mais te interessa agora.", { gap: 12 });
doc.moveDown(0.5);

const sumario = [
  ["Introdução — Bem-vindo ao Cifra Raiz", "3"],
  ["Parte 1 — Conhecendo Seu Violão", "5"],
  ["Parte 2 — As 6 Cordas e Seus Nomes", "7"],
  ["Parte 3 — 4 Métodos Para Afinar", "8"],
  ["Parte 4 — Postura e Posição Correta", "12"],
  ["Parte 5 — Os 10 Acordes Essenciais", "14"],
  ["Parte 6 — A Arte da Troca de Acordes", "18"],
  ["Parte 7 — Ritmos Sertanejos Básicos", "19"],
  ["Parte 8 — 3 Músicas Pra Praticar Hoje", "21"],
  ["Parte 9 — Dicas Pra Evoluir Rápido", "24"],
  ["Parte 10 — Erros Comuns de Iniciantes", "25"],
  ["Conclusão — Sua Jornada Começa Agora", "26"],
];

sumario.forEach(([titulo, pg], i) => {
  const startY = doc.y;
  doc.font("Bold").fontSize(11).fillColor(C.GOLD)
     .text(`${(i+1).toString().padStart(2, "0")}`, 60, startY, { width: 28 });
  doc.font("Body").fontSize(11).fillColor(C.DARK)
     .text(titulo, 95, startY, { width: 320 });
  // pontilhado
  const dotStart = 420;
  const dotEnd = PAGE_W - 80;
  doc.font("Body").fontSize(8).fillColor(C.MUTED);
  let dotX = dotStart;
  while (dotX < dotEnd) {
    doc.text(".", dotX, startY + 2, { continued: false });
    dotX += 3.5;
  }
  doc.font("Bold").fontSize(11).fillColor(C.PRIMARY)
     .text(pg, PAGE_W - 78, startY, { width: 30, align: "right" });
  doc.y = startY + 22;
});

// ══════════════════════════════════════════════════════════
// INTRODUÇÃO
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Introdução");
h2("Bem-vindo ao Cifra Raiz");

p("Se você está com este guia em mãos, é porque algo dentro de você quer tocar violão. Talvez seja a vontade de animar o churrasco da família, conquistar alguém com uma canção, ou simplesmente realizar um sonho antigo de tocar aquela música do Almir Sater que seu pai escutava no rádio.");

p("Seja qual for a sua razão, você está no lugar certo. O Cifra Raiz nasceu da paixão pela música que vem do interior do Brasil — o sertanejo de raiz, o modão dos clássicos, a guarânia do Mato Grosso. Aquela música que conta histórias, que fala de amor sem rodeios, que arrepia quando a viola começa.");

destaque(
  "Nossa missão",
  "Levar a tradição do violão sertanejo para qualquer pessoa, em qualquer lugar do Brasil — com cifras revisadas, ferramentas profissionais e um ensino que respeita quem está começando do zero."
);

h2("Para quem é este guia");
p("Este guia foi escrito para você que:");
ul([
  "Nunca pegou um violão na vida e quer aprender do absoluto zero.",
  "Já tentou aprender em vídeos do YouTube mas se perdeu no meio do caminho.",
  "Tem o violão jogado no canto há anos e quer dar uma nova chance.",
  "Já toca um pouquinho mas quer dominar o sertanejo e o modão.",
  "Sonha em tocar suas músicas favoritas em rodas com amigos e família.",
]);

h2("O que você vai aprender aqui");
p("Em poucas semanas de prática você vai conseguir:");
ul([
  "Afinar seu violão de 4 jeitos diferentes — com afinador eletrônico, pelo celular, de ouvido e por harmônicos.",
  "Conhecer todas as partes do instrumento e saber o nome de cada corda.",
  "Tocar os 10 acordes mais usados em quase toda música sertaneja.",
  "Trocar entre acordes com fluidez e sem travar.",
  "Aplicar os ritmos clássicos do sertanejo, modão e guarânia.",
  "Tocar 3 músicas inteiras logo nas primeiras semanas.",
]);

dica(
  "Comece pelo começo",
  "Não pule a Parte 1 e a Parte 2 mesmo que ache 'básico demais'. O segredo de quem toca bem está em dominar o fundamental. Em uma semana você passa pra Parte 3."
);

// ══════════════════════════════════════════════════════════
// PARTE 1 — CONHECENDO SEU VIOLÃO
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 1");
h2("Conhecendo Seu Violão");

p("Antes de aprender a tocar, você precisa conhecer com quem está se relacionando. O violão não é só um pedaço de madeira com cordas — cada parte dele tem uma função, e entender isso vai facilitar muito sua jornada.");

h3("As partes principais do violão");

p("De cima pra baixo, segurando o violão como se fosse tocar, você encontra:");

doc.moveDown(0.3);

const partes = [
  ["Cabeça (Headstock)", "É a parte de cima, onde ficam as tarraxas. As tarraxas são as 'manivelas' que você gira para afinar — apertando ou afrouxando cada corda."],
  ["Pestana (Nut)", "A pequena faixa branca entre a cabeça e o braço. É ela que define a altura inicial das cordas e marca onde começa o braço."],
  ["Braço (Neck)", "A parte longa e fina do violão, onde você aperta as cordas com a mão esquerda. Tem entre 18 e 20 casas (espaços entre os trastes)."],
  ["Trastes (Frets)", "São as barrinhas metálicas no braço. O espaço ENTRE dois trastes se chama casa. Quando alguém diz 'aperte na 3ª casa', é o espaço entre o 3º e o 4º traste."],
  ["Casas", "Numeradas de 1 a 18+ começando pela cabeça. A 'casa zero' (corda solta, sem apertar nada) é quando você toca a corda sem pisar em lugar nenhum."],
  ["Corpo (Body)", "A parte 'redonda' embaixo. É onde o som ressoa. Os violões clássicos são feitos de madeiras como cedro, mogno e pau-rosa."],
  ["Boca (Sound Hole)", "O buraco no meio do corpo. É por ali que o som sai amplificado. Não tampe com a mão direita ao tocar!"],
  ["Cavalete (Bridge)", "A peça embaixo onde as cordas terminam, presas com pinos. Junto com a pestana, define o tamanho 'útil' da corda que vibra."],
  ["Cordas", "São 6, numeradas de 1 a 6 — a mais fina é a 1 (Mi agudo) e a mais grossa é a 6 (Mi grave)."],
];

partes.forEach(([nome, desc]) => {
  ensureSpace(50);
  doc.font("Bold").fontSize(10.5).fillColor(C.PRIMARY).text(nome, { continued: false });
  doc.font("Body").fontSize(10).fillColor(C.DARK).text(desc, { lineGap: 1.5 });
  doc.moveDown(0.4);
});

doc.addPage();
h3("Diagrama simplificado do violão");

// Desenho simplificado do violão
const vy = doc.y + 10;
const vcx = PAGE_W / 2;
// Corpo
doc.fillColor(C.LIGHT).circle(vcx, vy + 130, 75).fill();
doc.strokeColor(C.PRIMARY).lineWidth(1.5).circle(vcx, vy + 130, 75).stroke();
// Boca
doc.fillColor(C.DARK).circle(vcx, vy + 130, 22).fill();
// Cavalete
doc.fillColor(C.PRIMARY).rect(vcx - 32, vy + 170, 64, 8).fill();
// Braço
doc.strokeColor(C.PRIMARY).lineWidth(1.5)
   .rect(vcx - 12, vy + 10, 24, 100).stroke();
doc.fillColor(C.BEIGE).rect(vcx - 11, vy + 11, 22, 98).fill();
// Trastes
doc.strokeColor(C.MUTED).lineWidth(0.5);
for (let i = 1; i <= 8; i++) {
  const fy = vy + 10 + i * 12;
  doc.moveTo(vcx - 12, fy).lineTo(vcx + 12, fy).stroke();
}
// Cordas no braço
doc.strokeColor(C.DARK).lineWidth(0.6);
for (let i = 0; i < 6; i++) {
  const sx = vcx - 10 + i * 4;
  doc.moveTo(sx, vy + 10).lineTo(sx, vy + 170).stroke();
}
// Pestana
doc.fillColor(C.WHITE).rect(vcx - 13, vy + 8, 26, 3).fill();
// Cabeça
doc.fillColor(C.PRIMARY).rect(vcx - 20, vy - 25, 40, 35).fill();
doc.strokeColor(C.GOLD).lineWidth(1).rect(vcx - 20, vy - 25, 40, 35).stroke();
// Tarraxas (6 círculos)
doc.fillColor(C.GOLD);
for (let i = 0; i < 3; i++) {
  doc.circle(vcx - 14, vy - 18 + i * 8, 1.8).fill();
  doc.circle(vcx + 14, vy - 18 + i * 8, 1.8).fill();
}

// Etiquetas
doc.font("Bold").fontSize(8).fillColor(C.PRIMARY);
doc.text("Cabeça", vcx + 30, vy - 18);
doc.text("Pestana", vcx + 30, vy + 6);
doc.text("Trastes", vcx + 30, vy + 50);
doc.text("Casas", vcx + 30, vy + 75);
doc.text("Boca", vcx + 35, vy + 125);
doc.text("Corpo", vcx + 55, vy + 165);
doc.text("Cavalete", vcx + 30, vy + 172);
doc.text("Tarraxas", vcx - 70, vy - 18);
doc.text("Braço", vcx - 55, vy + 50);
doc.text("Cordas", vcx - 60, vy + 100);

// Linhas de chamada (pequenas)
doc.strokeColor(C.MUTED).lineWidth(0.3);
doc.moveTo(vcx + 28, vy - 15).lineTo(vcx + 5, vy - 12).stroke();
doc.moveTo(vcx + 28, vy + 8).lineTo(vcx + 12, vy + 9).stroke();
doc.moveTo(vcx + 28, vy + 52).lineTo(vcx + 12, vy + 46).stroke();
doc.moveTo(vcx + 28, vy + 77).lineTo(vcx + 12, vy + 70).stroke();
doc.moveTo(vcx + 33, vy + 127).lineTo(vcx + 21, vy + 130).stroke();
doc.moveTo(vcx + 28, vy + 175).lineTo(vcx + 32, vy + 175).stroke();
doc.moveTo(vcx - 50, vy - 15).lineTo(vcx - 17, vy - 12).stroke();
doc.moveTo(vcx - 40, vy + 52).lineTo(vcx - 12, vy + 46).stroke();
doc.moveTo(vcx - 45, vy + 100).lineTo(vcx - 10, vy + 100).stroke();

doc.y = vy + 220;
doc.moveDown(1);

dica(
  "Curiosidade",
  "O violão chegou ao Brasil pelos colonizadores portugueses no século 17. Foi nas mãos do povo do interior que ele virou o que conhecemos hoje — o instrumento símbolo da música caipira, sertaneja e raiz brasileira."
);

// ══════════════════════════════════════════════════════════
// PARTE 2 — AS 6 CORDAS
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 2");
h2("As 6 Cordas e Seus Nomes");

p("Toda música que você vai tocar começa com cordas afinadas. E pra afinar, primeiro você precisa saber o nome de cada uma. Vamos lá.");

h3("Da corda mais fina à mais grossa");

p("Segurando o violão para tocar, você vai notar que tem 6 cordas — algumas mais finas (agudas), outras mais grossas (graves). Cada uma tem um nome musical:");

doc.moveDown(0.5);

// Tabela das cordas
const cordasData = [
  ["Corda", "Nome", "Nota", "Característica"],
  ["1ª", "Mi agudo", "E", "A mais fina — som agudo, brilhante"],
  ["2ª", "Si", "B", "Fina — som claro, médio-agudo"],
  ["3ª", "Sol", "G", "Média fina — sem encapamento de metal"],
  ["4ª", "Ré", "D", "Média — começam as cordas com metal"],
  ["5ª", "Lá", "A", "Grossa — som médio-grave"],
  ["6ª", "Mi grave", "E", "A mais grossa — som grave e profundo"],
];

const tw = PAGE_W - 110;
const cw = [tw * 0.12, tw * 0.22, tw * 0.13, tw * 0.53];
let ty = doc.y;

cordasData.forEach((row, i) => {
  const isHeader = i === 0;
  const isAlt = !isHeader && i % 2 === 0;
  const rowH = 24;

  if (isHeader) doc.fillColor(C.PRIMARY).rect(55, ty, tw, rowH).fill();
  else if (isAlt) doc.fillColor(C.BEIGE).rect(55, ty, tw, rowH).fill();

  let cx = 55;
  row.forEach((cell, j) => {
    doc.font(isHeader ? "Bold" : (j < 3 ? "Bold" : "Body"))
       .fontSize(isHeader ? 10 : 9.5)
       .fillColor(isHeader ? C.GOLD : (j === 2 ? C.GOLD : C.DARK))
       .text(cell, cx + 8, ty + 7, { width: cw[j] - 16, lineGap: 0.5 });
    cx += cw[j];
  });
  ty += rowH;
});

doc.strokeColor(C.MUTED).lineWidth(0.5).rect(55, doc.y, tw, ty - doc.y).stroke();
doc.y = ty + 15;

h3("O mnemônico que todo violonista decora");

p("Pra nunca esquecer o nome das cordas, decore essa frase começando da corda mais GROSSA (6ª) pra mais FINA (1ª):");

doc.moveDown(0.5);
// Caixa com o mnemônico
const mty = doc.y;
doc.fillColor(C.PRIMARY).rect(55, mty, PAGE_W - 110, 60).fill();
doc.font("Display").fontSize(20).fillColor(C.GOLD)
   .text("Mi  Lá  Ré  Sol  Si  Mi", 55, mty + 12, { width: PAGE_W - 110, align: "center" });
doc.font("Italic").fontSize(10).fillColor(C.CREAM)
   .text("(da mais grossa pra mais fina)", 55, mty + 40, { width: PAGE_W - 110, align: "center" });
doc.y = mty + 75;
doc.moveDown(0.5);

p("Em notação americana (que aparece nas cifras e afinadores):");
doc.moveDown(0.3);
const aty = doc.y;
doc.fillColor(C.GOLD).rect(55, aty, PAGE_W - 110, 40).fill();
doc.font("Bold").fontSize(18).fillColor(C.WHITE)
   .text("E  A  D  G  B  E", 55, aty + 10, { width: PAGE_W - 110, align: "center", characterSpacing: 4 });
doc.y = aty + 50;
doc.moveDown(0.5);

dica(
  "Truque pra decorar fácil",
  "Cante a frase 'Mi-Lá-Ré-Sol-Si-Mi' uma vez ao dia durante 3 dias enquanto olha pras cordas do seu violão. Em 72 horas você sabe pra vida toda."
);

// ══════════════════════════════════════════════════════════
// PARTE 3 — COMO AFINAR
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 3");
h2("4 Métodos Para Afinar o Violão");

p("Violão desafinado é o motivo número 1 pelo qual iniciantes desistem. Pode parecer que você tá fazendo tudo certo, mas se o instrumento está desafinado, soa horrível — e dá vontade de jogar pela janela.");

p("A boa notícia: afinar é simples quando você sabe como. Vou te mostrar 4 métodos, do mais fácil ao mais avançado. Use o que funcionar pra você.");

destaque(
  "Antes de começar",
  "Cada corda tem uma tarraxa correspondente na cabeça. Apertando (girando contra o sentido horário, normalmente), a corda fica mais TENSA e o som mais AGUDO. Afrouxando, a corda fica mais SOLTA e o som mais GRAVE. Vá com calma — apertar demais arrebenta."
);

h3("Método 1 — Afinador eletrônico");
p("É o jeito mais preciso e fácil para iniciantes. Existem 2 tipos:");

ul([
  "Afinador de pinça (clip-on): você prende na cabeça do violão. Custa entre R$30 e R$80 e dura anos. Marcas confiáveis: Korg, Boss, Eno.",
  "Afinador embutido na pedaleira ou pedal: pra quem já tem equipamento, mas não é necessário pra começar."
]);

p("Como usar (passo a passo):");
ol([
  "Ligue o afinador e prenda na cabeça do violão (perto das tarraxas).",
  "Toque uma corda solta (sem apertar nada com a mão esquerda). Comece pela 6ª corda (Mi grave, a mais grossa).",
  "O afinador vai mostrar uma nota. Se aparecer 'E' com a agulha no centro (verde), tá afinado. Se aparecer 'D#' ou 'F', a corda está desafinada.",
  "Gire a tarraxa correspondente devagar. Se a nota está MAIS GRAVE que o E, aperte. Se está mais aguda, afrouxe.",
  "Toque a corda de novo. Repita até a agulha ficar verde no centro do E.",
  "Faça o mesmo com as outras cordas, na ordem: 6 (Mi), 5 (Lá), 4 (Ré), 3 (Sol), 2 (Si), 1 (Mi).",
  "Quando terminar, volte na 6ª e confira de novo — afinar uma corda mexe levemente nas outras.",
]);

dica(
  "Pequena lição importante",
  "Sempre afine SUBINDO (apertando até a nota). Se você passou do ponto, AFROUXE bem a corda, deixe ela mais grave e SUBA de novo. Isso fixa a afinação por mais tempo."
);

doc.addPage();
h3("Método 2 — Afinador no celular (ou no Cifra Raiz)");

p("Não tem afinador físico? Sem problema. Seu celular já tem microfone — e existem apps gratuitos que afinam com a mesma precisão de um afinador profissional.");

p("Opções recomendadas:");
ul([
  "Afinador do Cifra Raiz — disponível direto na plataforma, sem instalar nada. Acesse cifra-raiz.vercel.app/afinador e libere o microfone.",
  "GuitarTuna (Android e iOS) — o mais popular do mundo, com versão gratuita.",
  "Cifra Club Tuner — leve e simples, em português.",
  "Fender Tune (oficial da Fender) — bonito e preciso.",
]);

p("O funcionamento é igual ao afinador físico: você toca a corda, o app reconhece a nota, e te mostra se está grave demais, aguda demais ou afinada.");

alerta(
  "Atenção ao ambiente",
  "Afinar pelo celular funciona melhor em locais silenciosos. Se tiver TV ligada, ventilador barulhento ou conversa por perto, o microfone capta esses ruídos e pode dar leitura errada."
);

h3("Método 3 — Afinação de ouvido (5ª casa)");

p("Esse é o método clássico, usado por gerações. Você só precisa de UMA corda afinada como referência (geralmente a 6ª) e o resto sai por comparação. É bom aprender porque desenvolve seu ouvido musical.");

p("Como funciona:");
ol([
  "Afine a 6ª corda (Mi grave) usando um afinador, um diapasão, ou comparando com outro instrumento. Essa é sua referência.",
  "Aperte a 6ª corda na 5ª casa e toque. Essa nota tem que ser igual ao som da 5ª corda solta. Se não estiver, ajuste a 5ª corda (Lá) até ficar igual.",
  "Aperte a 5ª corda na 5ª casa. Igual ao som da 4ª corda solta (Ré). Ajuste a 4ª.",
  "Aperte a 4ª corda na 5ª casa. Igual à 3ª corda solta (Sol). Ajuste a 3ª.",
  "ATENÇÃO: pra afinar a 2ª corda (Si), aperte a 3ª corda na 4ª CASA (não na 5ª). Isso porque o intervalo entre Sol e Si é diferente.",
  "Por fim, aperte a 2ª corda na 5ª casa. Igual à 1ª corda solta (Mi agudo). Ajuste a 1ª.",
]);

doc.moveDown(0.5);

// Tabela visual da afinação 5ª casa
const tafy = doc.y;
const tafw = PAGE_W - 110;
doc.fillColor(C.PRIMARY).rect(55, tafy, tafw, 22).fill();
doc.font("Bold").fontSize(10).fillColor(C.GOLD)
   .text("REGRA RÁPIDA DA 5ª CASA", 55, tafy + 6, { width: tafw, align: "center" });

const afRegras = [
  "6ª na 5ª casa = 5ª solta",
  "5ª na 5ª casa = 4ª solta",
  "4ª na 5ª casa = 3ª solta",
  "3ª na 4ª CASA = 2ª solta  ← exceção",
  "2ª na 5ª casa = 1ª solta",
];

let aty2 = tafy + 22;
afRegras.forEach((r, i) => {
  if (i % 2 === 0) doc.fillColor(C.BEIGE).rect(55, aty2, tafw, 22).fill();
  doc.font("Body").fontSize(10).fillColor(r.includes("exceção") ? C.GOLD : C.DARK)
     .font(r.includes("exceção") ? "Bold" : "Body")
     .text(r, 55, aty2 + 6, { width: tafw, align: "center" });
  aty2 += 22;
});
doc.strokeColor(C.MUTED).lineWidth(0.5).rect(55, tafy, tafw, aty2 - tafy).stroke();
doc.y = aty2 + 10;

doc.addPage();
h3("Método 4 — Afinação por harmônicos (avançado)");

p("Esse é o método dos profissionais e é o MAIS PRECISO de todos. Usa os 'harmônicos naturais' — sons puros que surgem quando você toca a corda em pontos específicos sem apertá-la totalmente.");

p("Como tocar um harmônico:");
ol([
  "Encoste levemente o dedo da mão esquerda sobre a corda — bem em cima do 5º traste (não na casa, em cima da barra metálica).",
  "Toque a corda com a mão direita.",
  "Tire o dedo da esquerda IMEDIATAMENTE após tocar.",
  "Vai sair um som puro, agudo, quase 'cristalino' — esse é o harmônico.",
]);

p("Para afinar usando harmônicos:");
ol([
  "Toque o harmônico da 6ª corda na 5ª casa.",
  "Toque o harmônico da 5ª corda na 7ª casa.",
  "Os dois sons têm que ser exatamente iguais — se vibrarem juntos sem 'batidas' (oscilações de volume), está afinado.",
  "Repita: 5ª na 5ª e 4ª na 7ª. Depois 4ª na 5ª e 3ª na 7ª.",
  "Pra 2ª corda: harmônico da 6ª na 7ª casa = 2ª solta. (Aqui não dá pra usar a 3ª como referência por causa do intervalo).",
  "Pra 1ª corda: harmônico da 5ª na 7ª casa = 1ª solta.",
]);

dica(
  "Por que é mais preciso?",
  "Os harmônicos produzem sons 'puros', sem as imperfeições da pressão do dedo no traste. Por isso ouvidos treinados conseguem detectar até diferenças mínimas — é assim que afinadores de piano profissionais trabalham."
);

h3("Dicas finais sobre afinação");

ul([
  "Afine SEMPRE antes de começar a tocar — mesmo que pareça que está afinado.",
  "Em violões novos ou com cordas novas, afine 2-3 vezes durante a primeira hora de uso. As cordas 'esticam' e desafinam rápido nos primeiros dias.",
  "Mudanças de temperatura e umidade afetam a afinação. Se levou o violão pra outro lugar, afine de novo.",
  "Cordas velhas (mais de 3 meses de uso intenso) perdem brilho e dificultam a afinação. Trocar a cada 3-6 meses faz milagres.",
  "Toque a corda com firmeza ao afinar — toque fraco engana o afinador.",
]);

alerta(
  "Sinais de cordas vencidas",
  "Se sua corda está escura, com aspecto sujo de metal, áspera ao toque, ou se vive desafinando mesmo após afinar — está na hora de trocar. Um jogo de cordas custa entre R$30 e R$80 e renova o som do instrumento."
);

// ══════════════════════════════════════════════════════════
// PARTE 4 — POSTURA
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 4");
h2("Postura e Posição Correta");

p("Postura é a parte que ninguém ensina e todo iniciante erra. E aí, depois de meses tocando errado, vem dor nas costas, no pulso, nos dedos — e a culpa cai no violão (mas é a postura).");

p("Vamos consertar isso desde o início.");

h3("Sentado — a posição clássica");
ul([
  "Sente em uma cadeira firme, com os pés apoiados no chão.",
  "Apoie o violão sobre a coxa DIREITA (se você for destro). O corpo do violão fica encostado no seu abdômen.",
  "Mantenha as costas eretas — não curve a coluna pra ver o braço do violão. Se precisar ver os dedos, incline LEVEMENTE pra frente, mas tente olhar 'de cima'.",
  "O braço do violão fica ligeiramente inclinado pra cima, em ângulo de uns 30 graus.",
]);

h3("Em pé — usando a alça");
ul([
  "Use uma alça (correia) ajustável. Sem ela, fica impossível tocar em pé sem dor.",
  "Ajuste a altura pra que o violão fique aproximadamente na mesma posição de quando você toca sentado.",
  "Não deixe o violão muito baixo (estilo rockeiro) se estiver começando — fica difícil alcançar as casas do braço."
]);

h3("Mão direita — a palhetada");
p("A mão direita é responsável pelo RITMO. Ela toca as cordas, seja com palheta ou só com os dedos.");
ul([
  "Posicione o antebraço sobre o aro superior do corpo do violão. O punho fica sobre a boca, sem encostar.",
  "Se usar palheta: segure entre o polegar e o indicador, deixando uns 5mm pra fora. Não aperte forte — palheta solta vibra melhor.",
  "Sem palheta (dedos): polegar toca as cordas graves (6, 5, 4), indicador a 3ª, médio a 2ª, anelar a 1ª.",
  "O movimento da palhetada vem do PULSO, não do braço. Pulso solto = ritmo fluido.",
]);

doc.addPage();
h3("Mão esquerda — a digitação dos acordes");
p("A mão esquerda aperta as cordas pra formar os acordes. Aqui mora a maior parte da dificuldade pra quem está começando.");

ul([
  "Posicione o polegar nas costas do braço, mais ou menos no meio — não por cima do braço (a não ser em acordes muito específicos).",
  "Os dedos devem cair de cima nas cordas, formando uma 'gaiola'. As pontas dos dedos é que apertam, não as polpas.",
  "Aperte JUSTO DEPOIS DO TRASTE — não no meio da casa. Quanto mais perto do traste, menos força você precisa fazer.",
  "Unhas da mão esquerda DEVEM SER CURTAS. Se estiverem grandes, machucam você e abafam o som.",
  "Não aperte demais — só o suficiente pra corda não chiar. Apertar demais cansa e atrasa a troca de acordes.",
]);

alerta(
  "Dor é sinal de algo errado",
  "Cansaço nos dedos no começo é normal. Mas DOR aguda no pulso, antebraço ou ombro indica postura errada. Pare, ajuste a posição e volte. Continuar tocando com dor pode causar lesões sérias."
);

h3("Erros comuns de postura");
ul([
  "Apoiar o violão na perna errada (esquerda em vez de direita).",
  "Curvar a coluna pra olhar o braço — isso destrói as costas em poucos meses.",
  "Apertar as cordas com a polpa do dedo (parte 'gordinha') em vez da ponta.",
  "Polegar enrolando o braço por cima — só faça isso em acordes específicos.",
  "Tocar com unhas longas na mão esquerda — abafa o som e machuca.",
  "Antebraço direito tenso, com tendão pulando — relaxe o ombro e o cotovelo.",
]);

dica(
  "Truque para checar postura",
  "Toque alguns acordes de olhos fechados. Se conseguir tocar bem sem olhar pros dedos, sua postura está boa. Se precisa olhar, está se curvando demais."
);

// ══════════════════════════════════════════════════════════
// PARTE 5 — OS 10 ACORDES ESSENCIAIS
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 5");
h2("Os 10 Acordes Essenciais do Sertanejo");

p("Com os 10 acordes dessa parte, você já consegue tocar mais de 80% das músicas sertanejas. Sério. Decore esses 10 e o resto do seu progresso fica muito mais rápido.");

p("Como ler os diagramas:");
ul([
  "As 6 linhas verticais são as cordas. A esquerda é a 1ª (Mi agudo), a direita é a 6ª (Mi grave).",
  "As linhas horizontais são as casas. A primeira (mais grossa) é o cavalete/pestana.",
  "Os pontos dourados são onde você aperta com os dedos da mão esquerda.",
  "Um × em cima de uma corda significa que essa corda NÃO deve ser tocada (abafada).",
]);

doc.moveDown(0.5);

// Acordes — todos os 10 com diagramas
const acordes = [
  { nome: "C",  dedos: [[2,1],[4,2],[5,3]],         mudas: [6],   pestana: null, dif: "Iniciante",     desc: "Indicador na 2ª corda casa 1, médio na 4ª casa 2, anelar na 5ª casa 3. Não toque a 6ª." },
  { nome: "G",  dedos: [[1,3],[5,2],[6,3]],         mudas: [],    pestana: null, dif: "Iniciante",     desc: "Médio na 5ª casa 2, anelar na 6ª casa 3, mindinho na 1ª casa 3. Todas as cordas." },
  { nome: "D",  dedos: [[1,2],[2,3],[3,2]],         mudas: [5,6], pestana: null, dif: "Iniciante",     desc: "Indicador na 3ª casa 2, médio na 1ª casa 2, anelar na 2ª casa 3. Não toque 5ª e 6ª." },
  { nome: "A",  dedos: [[2,2],[3,2],[4,2]],         mudas: [6],   pestana: null, dif: "Iniciante",     desc: "Indicador, médio e anelar todos na casa 2 (cordas 2, 3 e 4). Não toque a 6ª." },
  { nome: "E",  dedos: [[3,1],[4,2],[5,2]],         mudas: [],    pestana: null, dif: "Iniciante",     desc: "Indicador na 3ª casa 1, médio na 5ª casa 2, anelar na 4ª casa 2. Toque tudo." },
  { nome: "Am", dedos: [[2,1],[3,2],[4,2]],         mudas: [6],   pestana: null, dif: "Iniciante",     desc: "Indicador na 2ª casa 1, médio na 4ª casa 2, anelar na 3ª casa 2. Não toque 6ª." },
  { nome: "Em", dedos: [[4,2],[5,2]],               mudas: [],    pestana: null, dif: "Fácil",         desc: "O mais fácil! Médio na 5ª casa 2, anelar na 4ª casa 2. Toque tudo." },
  { nome: "Dm", dedos: [[1,1],[2,3],[3,2]],         mudas: [5,6], pestana: null, dif: "Iniciante",     desc: "Indicador na 1ª casa 1, médio na 3ª casa 2, anelar na 2ª casa 3. Não toque 5ª e 6ª." },
  { nome: "F",  dedos: [[3,2],[4,3],[5,3]],         mudas: [],    pestana: 1,    dif: "Intermediário", desc: "Indicador em pestana na casa 1 (todas as cordas), médio na 3ª casa 2, anelar e mindinho nas 4ª e 5ª casa 3. EXIGE FORÇA." },
  { nome: "B7", dedos: [[1,2],[3,2],[4,1],[5,2]],   mudas: [6],   pestana: null, dif: "Intermediário", desc: "Indicador na 4ª casa 1, médio na 5ª casa 2, anelar na 3ª casa 2, mindinho na 1ª casa 2. Não toque 6ª." },
];

// Layout: 2 acordes por linha (em 2 colunas), com nome+diagrama+descrição
acordes.forEach((ac, i) => {
  // Página nova a cada 4 acordes
  if (i > 0 && i % 4 === 0) doc.addPage();
  if (i % 4 === 0) {
    h3(`Acordes ${i+1} a ${Math.min(i+4, acordes.length)}`);
  }

  const startY = doc.y;
  // Caixa do acorde
  doc.fillColor(C.BEIGE).rect(55, startY, PAGE_W - 110, 110).fill();
  doc.strokeColor(C.LIGHT).lineWidth(1).rect(55, startY, PAGE_W - 110, 110).stroke();

  // Diagrama à esquerda
  chordBox(70, startY + 5, ac.nome, ac.dedos, ac.mudas, ac.pestana);

  // Descrição à direita
  const dx = 180;
  const dw = PAGE_W - 110 - dx + 55 - 15;
  doc.font("Display").fontSize(20).fillColor(C.PRIMARY)
     .text(ac.nome, dx, startY + 8);
  // Badge de dificuldade
  const badgeColor = ac.dif === "Intermediário" ? "#FEF3C7" : "#D1FAE5";
  const badgeText  = ac.dif === "Intermediário" ? "#92400E" : "#065F46";
  doc.fillColor(badgeColor).roundedRect(dx + 50, startY + 14, 90, 16, 8).fill();
  doc.font("Bold").fontSize(8).fillColor(badgeText)
     .text(ac.dif.toUpperCase(), dx + 50, startY + 18, { width: 90, align: "center" });
  doc.font("Body").fontSize(9.5).fillColor(C.DARK)
     .text(ac.desc, dx, startY + 38, { width: dw - 10, lineGap: 1.5 });
  doc.y = startY + 120;
});

doc.addPage();
h3("Dica de ouro pra decorar os acordes");
p("Não tente decorar todos de uma vez. Pegue 3 acordes (sugestão: G, Em, C) e fique uma semana só tocando trocas entre eles. Quando os dedos memorizarem, adicione D. Depois Am. E assim por diante.");

dica(
  "Cronograma sugerido",
  "Semana 1: G, Em, C (você já consegue tocar muita música).  Semana 2: + D (G-D-Em-C abre 50% do sertanejo).  Semana 3: + Am, Dm.  Semana 4: + A, E.  Mês 2: F com pestana.  Mês 3: B7 e variações."
);

// ══════════════════════════════════════════════════════════
// PARTE 6 — TROCA DE ACORDES
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 6");
h2("A Arte da Troca de Acordes");

p("Saber tocar um acorde é fácil. O DIFÍCIL é trocar entre eles sem parar a música. É aqui que a maioria dos iniciantes trava — e é a parte que mais separa quem 'sabe alguns acordes' de quem 'sabe tocar'.");

h3("As 3 leis da troca rápida");
ol([
  "Antecipe mentalmente. Antes mesmo de soltar o acorde atual, sua mente já tem que estar pensando no próximo. Tipo dirigir — você não olha o volante, olha pra frente.",
  "Use 'dedos âncora'. Se 2 acordes consecutivos têm um dedo na MESMA corda e MESMA casa, NÃO TIRE esse dedo. Por exemplo, na troca G→Em, o anelar fica na 6ª corda casa 3 (em G) e depois sai. Mas C→Am mantém o indicador na 2ª corda casa 1.",
  "Pratique LENTO antes de rápido. Se você não consegue fazer perfeito em câmera lenta, nunca vai conseguir rápido. Use metrônomo em 40 BPM, mude de acorde a cada 4 batidas, suba 5 BPM por dia.",
]);

h3("As 5 trocas mais comuns no sertanejo");
ul([
  "G → D → Em → C — a 'sequência mágica' do sertanejo. Aparece em centenas de músicas.",
  "G → Em → C → D — mesma família, ordem invertida.",
  "C → G → Am → F — a 'sequência pop', muito usada em modão moderno.",
  "D → A → Bm → G — tom de D maior, comum em sertanejo universitário.",
  "Em → C → G → D — sequência melancólica, perfeita pra moda de viola.",
]);

dica(
  "Exercício diário de 5 minutos",
  "Pegue uma das sequências acima. Toque cada acorde durante 2 batidas (1-2-troca-1-2-troca). Faça por 5 minutos seguidos. Depois aumente pra 1 batida cada (1-troca-1-troca). Em 1 semana você troca sem pensar."
);

h3("O segredo dos profissionais");
p("Quem toca há anos não pensa em cada dedo individualmente — pensa em SHAPES (formas). Quando você fala 'G', o cérebro já manda a mão fazer todo o desenho de uma vez. Isso só vem com repetição.");

p("Por isso a recomendação é: pratique 15-20 minutos POR DIA em vez de 2 horas no fim de semana. Repetição diária constrói memória muscular. Sessão longa cansa.");

// ══════════════════════════════════════════════════════════
// PARTE 7 — RITMOS SERTANEJOS
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 7");
h2("Ritmos Sertanejos Básicos");

p("Os acordes são o esqueleto da música. O RITMO é o coração. É ele que faz uma música ser sertanejo, modão, guarânia ou xote. Vamos aos 4 ritmos que cobrem 90% do que você vai tocar.");

h3("1. Balada Sertaneja");
p("O ritmo mais usado no sertanejo universitário moderno. Simples e versátil.");
p("Padrão: down-down-up-up-down-up");
palhetadaRow(80, doc.y, ["↓","↓","↑","↑","↓","↑"]);
doc.y += 50;
p("Velocidade: média (90-110 BPM). Exemplos: 'Largado às Traças' (Zé Neto e Cristiano), 'Cuida Bem Dela' (Henrique e Juliano).", { gap: 8 });
divider();

h3("2. Sertanejo Raiz (Pagode de Viola)");
p("O ritmo dos clássicos do interior. Mais marcado e seco.");
p("Padrão: down-up-down-up");
palhetadaRow(120, doc.y, ["↓","↑","↓","↑"]);
doc.y += 50;
p("Velocidade: média-rápida (110-130 BPM). Exemplos: 'Pagode em Brasília' (Renato Teixeira), 'Boate Azul' (Bruno e Marrone).", { gap: 8 });
divider();

doc.addPage();
h3("3. Guarânia (3/4)");
p("Ritmo lento e melancólico, vindo do Paraguai e adotado pelos clássicos do sertanejo. Compasso ternário — conte 1-2-3, 1-2-3.");
p("Padrão: down (pausa) up — repete");
palhetadaRow(150, doc.y, ["↓","-","↑"]);
doc.y += 50;
p("Velocidade: lenta (60-80 BPM). Exemplos: 'Índia' (Cascatinha e Inhana), 'Pingo de Mel' (Chitãozinho & Xororó).", { gap: 8 });
divider();

h3("4. Modão / Toada");
p("O ritmo das duplas clássicas. Quadrado, bem definido. O baixo é destacado (você toca a 6ª ou 5ª corda no tempo forte).");
p("Padrão: baixo-down-up-baixo-down-up");
palhetadaRow(80, doc.y, ["B↓","↓","↑","B↓","↓","↑"]);
doc.y += 50;
p("Onde B = tocar SÓ a corda mais grave (o baixo do acorde). Velocidade: média (90-110 BPM). Exemplos: 'Cabocla Tereza' (Tonico e Tinoco), 'Chico Mineiro' (Tonico e Tinoco).", { gap: 8 });
divider();

dica(
  "Como pegar o ritmo",
  "Coloque a música original tocando no celular e ACOMPANHE só com a mão direita, sem se preocupar com o acorde. Bata na perna ou na mesa no ritmo que ouvir. Só depois que você 'pegou' o ritmo, junte com o violão."
);

// ══════════════════════════════════════════════════════════
// PARTE 8 — 3 MÚSICAS
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 8");
h2("3 Músicas Pra Praticar Hoje");

p("Chega de teoria. Vamos colocar a mão na massa com 3 músicas escolhidas a dedo — uma de cada nível, todas sertanejas e todas com a versão SIMPLIFICADA pra iniciantes.");

// MÚSICA 1
h3("Música 1 — Fio de Cabelo (Chitãozinho & Xororó)");
const m1y = doc.y;
doc.fillColor(C.BEIGE).rect(55, m1y, PAGE_W - 110, 35).fill();
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("TOM:", 70, m1y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("D maior", 110, m1y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("RITMO:", 200, m1y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("Balada Sertaneja", 245, m1y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("DIFICULDADE:", 70, m1y + 20);
doc.font("Body").fontSize(10).fillColor(C.SUCCESS).text("Iniciante absoluto", 165, m1y + 20);
doc.y = m1y + 45;

doc.moveDown(0.3);
h3("Acordes que você precisa");
p("D — G — A");
small("Versão simplificada: a música original tem mais acordes, mas com esses 3 você toca o refrão inteiro.");

doc.moveDown(0.5);
h3("Sequência do refrão");
doc.font("Body").fontSize(11).fillColor(C.DARK);
const seq1 = [
  "D                 G",
  "Fio de cabelo, que ficou no meu paletó",
  "          A                    D",
  "Foi você que deixou, quando me abraçou",
];
seq1.forEach(l => {
  doc.font(l.match(/[A-G][#m]?/g) && l.length < 50 ? "Bold" : "Body")
     .fontSize(10).fillColor(l.match(/[A-G][#m]?/g) && l.length < 50 ? C.GOLD : C.DARK)
     .text(l, { lineGap: 2 });
});

dica(
  "Como praticar essa música",
  "Comece tocando cada acorde por 4 batidas. Quando ficar fluido, comece a cantar junto. Em 3-4 dias você toca o refrão inteiro com fluidez."
);

doc.addPage();
// MÚSICA 2
h3("Música 2 — Evidências (Chitãozinho & Xororó)");
const m2y = doc.y;
doc.fillColor(C.BEIGE).rect(55, m2y, PAGE_W - 110, 35).fill();
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("TOM:", 70, m2y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("G maior", 110, m2y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("RITMO:", 200, m2y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("Balada Sertaneja", 245, m2y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("DIFICULDADE:", 70, m2y + 20);
doc.font("Body").fontSize(10).fillColor(C.SUCCESS).text("Iniciante", 165, m2y + 20);
doc.y = m2y + 45;

doc.moveDown(0.3);
h3("Acordes que você precisa");
p("G — Em — C — D");

doc.moveDown(0.5);
h3("Sequência do refrão");
const seq2 = [
  "G                Em",
  "Quando eu digo que deixei de te amar",
  "      C                  D",
  "É porque eu te amo",
  "G                Em",
  "Quando eu digo que não quero mais você",
  "      C                D            G",
  "É porque eu te quero",
];
seq2.forEach(l => {
  doc.font(l.match(/^[A-G\s#m]+$/) ? "Bold" : "Body")
     .fontSize(10).fillColor(l.match(/^[A-G\s#m]+$/) ? C.GOLD : C.DARK)
     .text(l, { lineGap: 2 });
});

dica(
  "A música mais pedida do Brasil",
  "Evidências é tocada em quase todo churrasco, casamento e roda de violão. Se você dominar essa, sua reputação no grupo de amigos cresce IMEDIATAMENTE."
);

doc.addPage();
// MÚSICA 3
h3("Música 3 — Garçom (Reginaldo Rossi)");
const m3y = doc.y;
doc.fillColor(C.BEIGE).rect(55, m3y, PAGE_W - 110, 35).fill();
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("TOM:", 70, m3y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("C maior", 110, m3y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("RITMO:", 200, m3y + 8);
doc.font("Body").fontSize(10).fillColor(C.DARK).text("Bolero / Modão", 245, m3y + 8);
doc.font("Bold").fontSize(10).fillColor(C.PRIMARY).text("DIFICULDADE:", 70, m3y + 20);
doc.font("Body").fontSize(10).fillColor(C.SUCCESS).text("Iniciante", 165, m3y + 20);
doc.y = m3y + 45;

doc.moveDown(0.3);
h3("Acordes que você precisa");
p("C — F — G — Am");
small("ATENÇÃO: aqui aparece o F, que tem pestana. Se ainda não dominou, use a versão simplificada do F (só as 4 cordas mais agudas — sem a pestana cheia).");

doc.moveDown(0.5);
h3("Sequência do refrão");
const seq3 = [
  "C                  F",
  "Garçom, aqui nessa mesa de bar",
  "C                  G",
  "Você já cansou de escutar",
  "Am                F",
  "Centenas de casos de amor",
];
seq3.forEach(l => {
  doc.font(l.match(/^[A-G\s#m]+$/) ? "Bold" : "Body")
     .fontSize(10).fillColor(l.match(/^[A-G\s#m]+$/) ? C.GOLD : C.DARK)
     .text(l, { lineGap: 2 });
});

dica(
  "Bonus: pegue o jeito do bolero",
  "Garçom é tocada em ritmo de bolero — mais lento e marcado. Conte 'um-dois-três-quatro' bem devagar, e bata down-up-down-up sem pressa. A emoção vem da lentidão."
);

destaque(
  "Quer mais músicas?",
  "Na plataforma Cifra Raiz você tem acesso a mais de 7.200 cifras sertanejas completas, com transposição de tom, diagrama de acordes interativo e o vídeo original tocando na mesma tela. Acesse cifra-raiz.vercel.app e comece hoje."
);

// ══════════════════════════════════════════════════════════
// PARTE 9 — DICAS PRA EVOLUIR
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 9");
h2("Dicas Pra Evoluir Rápido");

p("Em 15 anos vendo gente aprender violão, percebi que quem evolui rápido tem hábitos em comum. Aqui estão os 10 mandamentos do violonista iniciante:");

ol([
  "Toque TODO DIA, mesmo que seja 10 minutos. Consistência vence intensidade. 10 minutos por dia em 30 dias = 5 horas. 5 horas no fim de semana = burnout.",
  "Comece SEMPRE afinando. Tocar desafinado treina seu ouvido errado. Afinou? Pode começar.",
  "Pratique LENTO. Velocidade vem como consequência da técnica. Se está difícil, está rápido demais.",
  "Grave-se tocando. Pega no celular, grava 30 segundos, escuta. Vai ouvir coisas que não nota tocando. É desconfortável e poderoso.",
  "Aprenda músicas que você AMA. Aprender música que você acha chata mata a vontade. Música que você ama te faz querer praticar.",
  "Toque pra outras pessoas. Mesmo errando, mesmo tremendo. Tocar pra alguém ouvindo é uma habilidade separada — só se aprende fazendo.",
  "Não compre violão muito barato. Violões abaixo de R$300 normalmente desafinam toda hora e desmotivam. Um bom violão de início (R$400-700) faz diferença enorme.",
  "Estude TEORIA aos pouquinhos. Não precisa virar especialista, mas entender a diferença entre tom maior e menor já abre muitas portas.",
  "Diversifique os estilos. Tocar só sertanejo te limita. Aprenda umas músicas de MPB, rock acústico, gospel — vai te dar versatilidade.",
  "Não compare seu mês 1 com o ano 10 de outra pessoa. Cada um tem seu ritmo. O importante é estar melhor hoje do que ontem.",
]);

dica(
  "Marco dos 21 dias",
  "Estudos mostram que leva ~21 dias pra criar um hábito. Se você tocar todos os dias por 21 dias seguidos (mesmo que 10 minutos), virou hábito. Aí o violão vira parte da sua rotina."
);

// ══════════════════════════════════════════════════════════
// PARTE 10 — ERROS COMUNS
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Parte 10");
h2("Erros Comuns de Iniciantes");

p("Conhecer os erros antes de cometê-los economiza meses. Aqui estão os 8 mais frequentes:");

h3("1. Comprar palheta dura demais");
p("Iniciante deve usar palheta FINA (0.46mm ou 0.60mm). Palheta dura (1mm+) exige técnica que você ainda não tem.");

h3("2. Querer tocar 'Stairway to Heaven' na primeira semana");
p("Cada coisa no seu tempo. Comece com músicas de 3 acordes. Em 3 meses você tá pronto pra desafios.");

h3("3. Pular o aquecimento");
p("Antes de tocar, faça 2-3 minutos de exercícios pra alongar e aquecer os dedos. Evita lesão e melhora o desempenho.");

h3("4. Praticar só o que já sabe");
p("Tocar o que você domina é confortável mas não te faz crescer. Reserve metade do tempo pra coisas DIFÍCEIS — onde você ainda erra.");

h3("5. Não usar metrônomo");
p("Sem metrônomo, você acha que está no ritmo, mas não está. Use desde o começo. App grátis pra celular: GuitarTuna ou Pro Metronome.");

h3("6. Mudar de violão toda hora");
p("Trocar de instrumento o tempo todo atrapalha. Pegue um bom violão e fique com ele pelo menos 2 anos antes de pensar em upgrade.");

h3("7. Tentar aprender no YouTube sozinho");
p("YouTube é ótimo, mas dispersa. Você vê 5 vídeos diferentes, cada um ensinando de um jeito, e fica perdido. Plataformas com curso estruturado (como o Cifra Raiz) seguem uma ordem que funciona.");

h3("8. Desistir no mês 2");
p("Entre o mês 1 e o mês 2 é quando a maioria desiste — os dedos doem, as músicas não ficam boas, parece que não evolui. PERSISTA. O 'click' acontece entre o mês 2 e 3, e depois disso tudo flui.");

// ══════════════════════════════════════════════════════════
// CONCLUSÃO
// ══════════════════════════════════════════════════════════
doc.addPage();
h1("Conclusão");
h2("Sua Jornada Começa Agora");

p("Se você chegou até aqui, parabéns. Já está na frente de 90% das pessoas que pegam um violão pela primeira vez. Tem o conhecimento — agora é só praticar.");

p("Lembre-se: NINGUÉM nasce sabendo tocar. Almir Sater, Chitãozinho, Tonico e Tinoco — todos começaram desafinando, errando acordes, com os dedos doendo. A diferença é que eles não desistiram.");

p("Você está começando a mais bonita das jornadas: aprender uma arte que vai te acompanhar pela vida toda. Em festas, em momentos de tristeza, em alegria — o violão sempre vai estar lá pra você.");

doc.moveDown(1);

destaque(
  "Próximo passo: Cifra Raiz",
  "Tudo o que você aprendeu neste guia está disponível em formato interativo na nossa plataforma. Mais de 7.200 cifras sertanejas, afinador online, diagramas de acorde clicáveis, vídeo do YouTube embutido, transposição de tom com 1 clique. Acesso vitalício por menos do que um lanche."
);

doc.moveDown(0.5);
const ctay = doc.y;
doc.fillColor(C.PRIMARY).rect(55, ctay, PAGE_W - 110, 100).fill();
doc.strokeColor(C.GOLD).lineWidth(2).rect(55, ctay, PAGE_W - 110, 100).stroke();
doc.font("Display").fontSize(22).fillColor(C.WHITE)
   .text("Comece sua jornada hoje", 55, ctay + 18, { width: PAGE_W - 110, align: "center" });
doc.font("Bold").fontSize(14).fillColor(C.GOLD)
   .text("cifra-raiz.vercel.app", 55, ctay + 50, { width: PAGE_W - 110, align: "center" });
doc.font("Italic").fontSize(10).fillColor(C.CREAM)
   .text("Acesso vitalício • Sem mensalidade • Garantia de 7 dias", 55, ctay + 72, { width: PAGE_W - 110, align: "center" });
doc.y = ctay + 110;

doc.moveDown(1);
h3("Junte-se à comunidade");
p("Tem dúvidas? Quer trocar dicas com outros violonistas iniciantes? Entre no nosso grupo do WhatsApp — é gratuito e tem gente compartilhando descobertas todo dia.");

p("Até a próxima e boa música! 🎸", { align: "center" });
doc.moveDown(0.5);
doc.font("Italic").fontSize(11).fillColor(C.GOLD)
   .text("— Equipe Cifra Raiz", { align: "center" });

// ══════════════════════════════════════════════════════════
// CONTRACAPA
// ══════════════════════════════════════════════════════════
chromeEndIdx = doc.bufferedPageRange().count - 1; // última página de conteúdo
doc.addPage();
doc.fillColor(C.PRIMARY).rect(0, 0, PAGE_W, PAGE_H).fill();
// Padrão decorativo
doc.save();
doc.fillColor(C.GOLD).opacity(0.05);
for (let row = 0; row < 30; row++) {
  for (let col = 0; col < 20; col++) {
    const x = col * 40 + (row % 2) * 20;
    const y = row * 50;
    doc.circle(x, y, 2).fill();
  }
}
doc.restore();
doc.opacity(1);

// Logo no centro
doc.image(LOGO, PAGE_W / 2 - 50, 300, { width: 100, height: 100 });

doc.font("Display").fontSize(28).fillColor(C.GOLD)
   .text("Cifra Raiz", 0, 420, { width: PAGE_W, align: "center" });

doc.font("Italic").fontSize(14).fillColor(C.CREAM)
   .text("A plataforma do sertanejo de verdade.", 0, 460, { width: PAGE_W, align: "center" });

doc.strokeColor(C.GOLD).lineWidth(0.5)
   .moveTo(PAGE_W/2 - 60, 490).lineTo(PAGE_W/2 + 60, 490).stroke();

doc.font("Body").fontSize(11).fillColor(C.CREAM)
   .text("Cifras • Cursos • Afinador • Comunidade", 0, 510, { width: PAGE_W, align: "center" });

doc.font("Bold").fontSize(13).fillColor(C.GOLD)
   .text("cifra-raiz.vercel.app", 0, 550, { width: PAGE_W, align: "center" });

doc.font("Body").fontSize(8).fillColor(C.MUTED)
   .text("© Cifra Raiz — Todos os direitos reservados.", 0, PAGE_H - 50, { width: PAGE_W, align: "center" });

// ──────────────────────────────────────────────────────────
// PINTA HEADER + FOOTER NAS PÁGINAS DE CONTEÚDO
// ──────────────────────────────────────────────────────────
const range = doc.bufferedPageRange(); // { start, count }
let displayedPage = 0;
for (let i = range.start; i < range.start + range.count; i++) {
  if (i >= chromeStartIdx && i <= chromeEndIdx) {
    displayedPage++;
    doc.switchToPage(i);
    drawHeaderForCurrentPage(displayedPage);
    drawFooterForCurrentPage(displayedPage);
  }
}

// FIM
doc.end();
console.log("PDF gerado em:", OUT);
