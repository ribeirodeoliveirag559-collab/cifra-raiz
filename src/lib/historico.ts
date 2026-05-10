const KEY = "cifra_raiz_recentes";
const MAX = 6;

export type CifraRecente = {
  id: string;
  titulo: string;
  artista: string;
  tom: string;
  ritmo: string;
  visitadoEm: number;
};

export function getRecentes(): CifraRecente[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CifraRecente[]) : [];
  } catch {
    return [];
  }
}

export function salvarRecente(cifra: Omit<CifraRecente, "visitadoEm">) {
  const recentes = getRecentes().filter((r) => r.id !== cifra.id);
  recentes.unshift({ ...cifra, visitadoEm: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(recentes.slice(0, MAX)));
}

export function tempoRelativo(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (min < 2) return "agora";
  if (min < 60) return `${min} min atrás`;
  if (h < 24) return `${h}h atrás`;
  if (d === 1) return "ontem";
  return `${d} dias atrás`;
}
