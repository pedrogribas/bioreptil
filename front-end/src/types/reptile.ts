export type Habitat =
  | "Solo"
  | "Árvores"
  | "Ambiente Aquático"
  | "Subsolo e Serrapilheira";

export type PeriodoAtividade = "Diurno" | "Noturno";

export type Conservacao = "POUCO PREOCUPANTE" | "VULNERÁVEL" | "QUASE AMEAÇADA";

export type Dieta =
  | "Aracnídeos"
  | "Vegetais e Algas"
  | "Insetos"
  | "Peixes"
  | "Mamíferos"
  | "Aves"
  | "Animais com forma de Serpente"
  | "Ovos"
  | "Lagartos"
  | "Lesmas e Caracóis"
  | "Anuros"
  | "Minhocas";

export interface Reptil {
  id: number;
  nomeCientifico: string;
  nomePopular: string;
  habitat: Habitat[]; // Array de habitats
  periodoAtividade: PeriodoAtividade[]; // Array de períodos de atividade
  naturalidade: "Nativo" | "Exótico";
  conservacao: Conservacao;
  perigo: string | null; // Pode ser null
  imagemContinente: string;
  imagemPrincipal: string;
  imagemVariacao: string | null; // Pode ser null
  dieta: Dieta[]; // Array de dietas
}
