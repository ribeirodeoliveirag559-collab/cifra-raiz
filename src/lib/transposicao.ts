const ESCALA = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const ENARMONIA: Record<string, string> = {
  "Db": "C#", "Eb": "D#", "Fb": "E", "Gb": "F#", "Ab": "G#", "Bb": "A#", "Cb": "B",
};

function normalizar(nota: string): string {
  return ENARMONIA[nota] ?? nota;
}

function transporNota(acorde: string, semitons: number): string {
  const match = acorde.match(/^([A-G][#b]?)(.*)/);
  if (!match) return acorde;
  const nota = normalizar(match[1]);
  const sufixo = match[2];
  const idx = ESCALA.indexOf(nota);
  if (idx === -1) return acorde;
  const novoIdx = ((idx + semitons) % 12 + 12) % 12;
  return ESCALA[novoIdx] + sufixo;
}

// Transpõe apenas acordes marcados com [acorde] — não toca na letra
export function transporCifra(cifra: string, semitons: number): string {
  if (semitons === 0) return cifra;
  return cifra.replace(/\[([A-G][#b]?[^\]]*)\]/g, (_, acorde) => {
    const partes = acorde.split("/");
    return "[" + partes.map((p: string) => transporNota(p.trim(), semitons)).join("/") + "]";
  });
}

export const TONS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
