const KEY = "cifra_raiz_playlists";

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

export function getPlaylists(): Playlist[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Playlist[]) : [];
  } catch {
    return [];
  }
}

export function salvarPlaylists(playlists: Playlist[]) {
  localStorage.setItem(KEY, JSON.stringify(playlists));
}

export function criarPlaylist(nome: string): Playlist {
  const nova: Playlist = {
    id: `pl-${Date.now()}`,
    nome: nome.trim(),
    cifras: [],
    criadaEm: Date.now(),
  };
  salvarPlaylists([...getPlaylists(), nova]);
  return nova;
}

export function deletarPlaylist(id: string) {
  salvarPlaylists(getPlaylists().filter((p) => p.id !== id));
}

export function adicionarCifra(playlistId: string, cifra: PlaylistCifra) {
  const playlists = getPlaylists().map((p) => {
    if (p.id !== playlistId) return p;
    if (p.cifras.some((c) => c.id === cifra.id)) return p;
    return { ...p, cifras: [...p.cifras, cifra] };
  });
  salvarPlaylists(playlists);
}

export function removerCifra(playlistId: string, cifraId: string) {
  const playlists = getPlaylists().map((p) => {
    if (p.id !== playlistId) return p;
    return { ...p, cifras: p.cifras.filter((c) => c.id !== cifraId) };
  });
  salvarPlaylists(playlists);
}

export function reordenarCifras(playlistId: string, cifras: PlaylistCifra[]) {
  const playlists = getPlaylists().map((p) =>
    p.id === playlistId ? { ...p, cifras } : p
  );
  salvarPlaylists(playlists);
}
