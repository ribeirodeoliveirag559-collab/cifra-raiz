/**
 * playlists.ts
 * Playlists vinculadas ao usuário, armazenadas no Supabase.
 *
 * Compatibilidade: se o usuário tinha playlists antigas no localStorage
 * (versão anterior do app), elas são migradas para o Supabase na primeira
 * chamada de getPlaylists() — uma única vez por usuário/dispositivo.
 */
import { createClient } from "@/lib/supabase";

export type PlaylistCifra = {
  id: string;
  titulo: string;
  artista: string;
  tom: string;
  ritmo: string;
};

export type Playlist = {
  id: string;
  nome: string;
  cifras: PlaylistCifra[];
  criadaEm: number;
};

const LOCAL_KEY = "cifra_raiz_playlists";

function getLocalPlaylists(): Playlist[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as Playlist[]) : [];
  } catch {
    return [];
  }
}

async function migrarLocalSeNecessario(userId: string): Promise<void> {
  if (typeof window === "undefined") return;
  const chave = `cifra_raiz_playlists_migrated_${userId}`;
  if (localStorage.getItem(chave)) return;

  const locais = getLocalPlaylists();
  if (locais.length > 0) {
    const supabase = createClient();
    const rows = locais.map((p) => ({
      user_id: userId,
      nome: p.nome,
      cifras: p.cifras,
      criada_em: new Date(p.criadaEm).toISOString(),
    }));
    const { error } = await supabase.from("playlists").insert(rows);
    if (error) {
      console.error("Erro ao migrar playlists:", error.message);
      return;
    }
  }
  // Marca como migrado e limpa o localStorage
  localStorage.setItem(chave, "1");
  localStorage.removeItem(LOCAL_KEY);
}

export async function getPlaylists(): Promise<Playlist[]> {
  if (typeof window === "undefined") return [];
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  await migrarLocalSeNecessario(user.id);

  const { data, error } = await supabase
    .from("playlists")
    .select("*")
    .eq("user_id", user.id)
    .order("criada_em", { ascending: false });

  if (error || !data) return [];

  return data.map((p) => ({
    id: p.id as string,
    nome: p.nome as string,
    cifras: (p.cifras as PlaylistCifra[]) ?? [],
    criadaEm: new Date(p.criada_em as string).getTime(),
  }));
}

export async function criarPlaylist(nome: string): Promise<Playlist | null> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("playlists")
    .insert({ user_id: user.id, nome: nome.trim(), cifras: [] })
    .select()
    .single();

  if (error || !data) {
    console.error("Erro ao criar playlist:", error?.message);
    return null;
  }
  return {
    id: data.id as string,
    nome: data.nome as string,
    cifras: [],
    criadaEm: new Date(data.criada_em as string).getTime(),
  };
}

export async function deletarPlaylist(id: string): Promise<void> {
  const supabase = createClient();
  await supabase.from("playlists").delete().eq("id", id);
}

export async function adicionarCifra(playlistId: string, cifra: PlaylistCifra): Promise<void> {
  const supabase = createClient();
  const { data: pl } = await supabase
    .from("playlists")
    .select("cifras")
    .eq("id", playlistId)
    .single();
  if (!pl) return;

  const cifras = (pl.cifras as PlaylistCifra[]) ?? [];
  if (cifras.some((c) => c.id === cifra.id)) return;

  await supabase
    .from("playlists")
    .update({ cifras: [...cifras, cifra] })
    .eq("id", playlistId);
}

export async function removerCifra(playlistId: string, cifraId: string): Promise<void> {
  const supabase = createClient();
  const { data: pl } = await supabase
    .from("playlists")
    .select("cifras")
    .eq("id", playlistId)
    .single();
  if (!pl) return;

  const cifras = ((pl.cifras as PlaylistCifra[]) ?? []).filter((c) => c.id !== cifraId);
  await supabase.from("playlists").update({ cifras }).eq("id", playlistId);
}

export async function reordenarCifras(playlistId: string, cifras: PlaylistCifra[]): Promise<void> {
  const supabase = createClient();
  await supabase.from("playlists").update({ cifras }).eq("id", playlistId);
}
