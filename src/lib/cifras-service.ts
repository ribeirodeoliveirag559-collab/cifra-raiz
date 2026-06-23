/**
 * cifras-service.ts
 * Serviço de cifras usando os dados locais (CIFRAS de dados.ts).
 *
 * Manteve a API assíncrona pra compatibilidade com os consumidores
 * (todos usam .then()). Internamente é puro JS em memória — instantâneo.
 */
import { CIFRAS, type Cifra } from "@/lib/dados";

/** Remove acentos e baixa caixa para busca tolerante */
export function normalizar(txt: string): string {
  return (txt || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Retorna todas as cifras ordenadas por título */
export async function getAllCifras(): Promise<Cifra[]> {
  return [...CIFRAS].sort((a, b) =>
    a.titulo.localeCompare(b.titulo, "pt-BR")
  );
}

/** Retorna uma cifra completa pelo id */
export async function getCifraById(id: string): Promise<Cifra | null> {
  return CIFRAS.find((c) => c.id === id) ?? null;
}

/**
 * Busca cifras com matching tolerante (acentos, caixa) por título,
 * artista, ritmo e tags. Resultado ordenado por relevância.
 */
export async function searchCifras(query: string): Promise<Cifra[]> {
  return filtrarCifrasLocal(CIFRAS, query);
}

/**
 * Filtro local em uma lista já carregada — rápido, em memória.
 */
export function filtrarCifrasLocal(cifras: Cifra[], query: string): Cifra[] {
  const q = normalizar(query);
  if (!q) return cifras;

  const resultados = cifras.map((c) => {
    const tituloN  = normalizar(c.titulo);
    const artistaN = normalizar(c.artista);
    const ritmoN   = normalizar(c.ritmo);

    let score = 0;
    if (tituloN === q) score += 1000;
    else if (tituloN.startsWith(q)) score += 500;
    else if (tituloN.includes(q)) score += 100;

    if (artistaN === q) score += 800;
    else if (artistaN.startsWith(q)) score += 300;
    else if (artistaN.includes(q)) score += 60;

    if (ritmoN.includes(q)) score += 20;
    if (c.tags?.some((t) => normalizar(t).includes(q))) score += 10;

    score += (c.tocadasSemana || 0) * 0.001;
    return { c, score };
  });

  return resultados
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.c);
}

/** Top cifras da semana (por tocadas) */
export async function getTopCifras(limit = 5): Promise<Cifra[]> {
  return [...CIFRAS]
    .sort((a, b) => (b.tocadasSemana ?? 0) - (a.tocadasSemana ?? 0))
    .slice(0, limit);
}
