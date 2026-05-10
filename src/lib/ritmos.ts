export type Stroke = { seta: string; forte: boolean };
export type PadraoRitmo = {
  compasso: string;
  descricao: string;
  beats: Stroke[][];
};

// Cada item do array externo = 1 tempo do compasso
// Cada item do array interno = 1 palhetada naquele tempo
// forte: true = palhetada acentuada (tempo forte)
export const PADROES_RITMO: Record<string, PadraoRitmo> = {
  "Guarânia": {
    compasso: "3/4",
    descricao: "Valsa sertaneja",
    beats: [
      [{ seta: "↓", forte: true }],
      [{ seta: "↓", forte: false }, { seta: "↑", forte: false }],
      [{ seta: "↓", forte: false }, { seta: "↑", forte: false }],
    ],
  },
  "Balada Sertaneja": {
    compasso: "4/4",
    descricao: "Balada romântica",
    beats: [
      [{ seta: "↓", forte: true }],
      [{ seta: "↓", forte: false }, { seta: "↑", forte: false }],
      [{ seta: "↑", forte: false }, { seta: "↓", forte: false }],
      [{ seta: "↑", forte: false }],
    ],
  },
  "Toada": {
    compasso: "4/4",
    descricao: "Toada lenta",
    beats: [
      [{ seta: "↓", forte: true }],
      [{ seta: "↓", forte: false }],
      [{ seta: "↓", forte: true }, { seta: "↑", forte: false }],
      [{ seta: "↑", forte: false }],
    ],
  },
  "Baião": {
    compasso: "4/4",
    descricao: "Baião nordestino",
    beats: [
      [{ seta: "↓", forte: true }, { seta: "↑", forte: false }],
      [{ seta: "↑", forte: false }],
      [{ seta: "↓", forte: false }, { seta: "↑", forte: false }],
      [{ seta: "↑", forte: false }],
    ],
  },
  "Forró": {
    compasso: "2/4",
    descricao: "Forró pé-de-serra",
    beats: [
      [{ seta: "↓", forte: true }, { seta: "↑", forte: false }],
      [{ seta: "↓", forte: false }, { seta: "↑", forte: false }],
    ],
  },
  "Xote": {
    compasso: "4/4",
    descricao: "Xote nordestino",
    beats: [
      [{ seta: "↓", forte: true }],
      [{ seta: "↑", forte: false }, { seta: "↓", forte: false }],
      [{ seta: "↑", forte: false }, { seta: "↓", forte: false }],
      [{ seta: "↑", forte: false }],
    ],
  },
};
