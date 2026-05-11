/**
 * cifras-service.ts
 * Funções para buscar cifras direto do Supabase.
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
    cifra:         row.cifra as string,
    tocadasSemana: (row.tocadas_semana as number) || 0,
  };
}

/** Retorna todas as cifras ordenadas por título */
export async function getAllCifras(): Promise<Cifra[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("cifras")
    .select("id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana")
    .order("titulo", { ascending: true });

  if (error || !data) {
    console.error("Erro ao buscar cifras:", error?.message);
    return [];
  }

  return data.map(mapRow);
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

/** Busca cifras por texto (título ou artista) */
export async function searchCifras(query: string): Promise<Cifra[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("cifras")
    .select("id, titulo, artista, tom, ritmo, dificuldade, tags, tocadas_semana")
    .or(`titulo.ilike.%${query}%,artista.ilike.%${query}%`)
    .order("titulo", { ascending: true });

  if (error || !data) return [];
  return data.map(mapRow);
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
