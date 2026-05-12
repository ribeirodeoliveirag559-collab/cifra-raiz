/**
 * cifras-service.ts
 * Funções para buscar cifras direto do Supabase + utilitários de busca local.
 */
import { createClient } from "@/lib/supabase";
import type { Cifra } from "@/lib/dados";

// Mapeia colunas snake_case do Supabase para o tipo Cifra (camelCase)
function mapRow(row: Record<string, unknown>): Cifra {
  return {
    id:            row.id as string,
    titulo:        row.titulo as string,
    artista:       row.artista as string,
    tom:           row.tom as string,
    ritmo:         row.ritmo as string,
    dificuldade:   (row.dificuldade as Cifra["dificuldade"]) || "iniciante",
    tags:          (row.tags as string[]) || [],
    cifra:         (row.cifra as string) || "",
    tocadasSemana: (row.tocadas_semana as number) || 0,
  };
}

/** Remove acentos e baixa caixa para busca tolerante */
export function normalizar(txt: string): string {
  return (txt || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Retorna todas as cifras (sem campo cifra) ordenadas por título.
 *  Faz paginação automática porque o Supabase limita 1000 por query. */
export async function getAllCifras(): Promise<Cifra[]> {
  const supabase = createClient();
  const todas: Cifra[] = [];
  const PAGE = 1000;
  let offset = 0;

  while (true) {
    const { data, error } = await supabase
      .from("cifras")
      .select("id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana")
      .order("titulo", { ascending: true })
      .range(offset, offset + PAGE - 1);

    if (error || !data) {
      console.error("Erro ao buscar cifras:", error?.message);
      break;
    }
    todas.push(...data.map(mapRow));
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return todas;
}

/** Retorna uma cifra completa (com campo `cifra`) pelo id */
export async function getCifraById(id: string): Promise<Cifra | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("cifras")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Erro ao buscar cifra:", error?.message);
    return null;
  }

  return mapRow(data as Record<string, unknown>);
}

/**
 * Busca cifras com matching tolerante (acentos, caixa) por título, artista,
 * ritmo e tags. Resultado vem ordenado por relevância.
 */
export async function searchCifras(query: string): Promise<Cifra[]> {
  const supabase = createClient();
  const q = query.trim();
  if (!q) return [];

  // Faz query ampla no Supabase (ainda case-insensitive via ilike)
  // e depois filtra/ranqueia em memória com normalização sem acento.
  const padraoSQL = `%${q}%`;
  const { data, error } = await supabase
    .from("cifras")
    .select("id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana")
    .or(`titulo.ilike.${padraoSQL},artista.ilike.${padraoSQL},ritmo.ilike.${padraoSQL}`)
    .limit(500);

  if (error || !data) return [];

  const qNorm = normalizar(q);
  const resultados = data.map(mapRow).map((c) => {
    const tituloN  = normalizar(c.titulo);
    const artistaN = normalizar(c.artista);
    const ritmoN   = normalizar(c.ritmo);

    // Ranking: exato > inicia com > contém. Título peso maior que artista.
    let score = 0;
    if (tituloN === qNorm) score += 1000;
    else if (tituloN.startsWith(qNorm)) score += 500;
    else if (tituloN.includes(qNorm)) score += 100;

    if (artistaN === qNorm) score += 800;
    else if (artistaN.startsWith(qNorm)) score += 300;
    else if (artistaN.includes(qNorm)) score += 60;

    if (ritmoN.includes(qNorm)) score += 20;
    if (c.tags?.some((t) => normalizar(t).includes(qNorm))) score += 10;

    // Empate desempata pela popularidade
    score += (c.tocadasSemana || 0) * 0.001;

    return { c, score };
  });

  return resultados
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.c);
}

/**
 * Filtro local em uma lista já carregada (rápido — sem ir ao servidor).
 * Usado para datasets grandes carregados de uma vez na home.
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

/** Top cifras da semana */
export async function getTopCifras(limit = 5): Promise<Cifra[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("cifras")
    .select("id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana")
    .order("tocadas_semana", { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data.map(mapRow);
}
