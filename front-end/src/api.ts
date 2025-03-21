import axios from "axios";

// Configuração do axios com a URL base do back-end
const api = axios.create({
  baseURL: "http://localhost:3000/api", // A porta deve ser a mesma do back-end (3000)
});

// Função para buscar todos os répteis
export const getRepteis = async () => {
  try {
    const response = await api.get("/repteis");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar répteis:", error);
    throw error;
  }
};

// Função para buscar um réptil específico pelo ID
export const getReptilById = async (id: number) => {
  try {
    const response = await api.get(`/repteis/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar réptil com ID ${id}:`, error);
    throw error;
  }
};

// Função para filtrar répteis por habitat
export const getRepteisByHabitat = async (habitat: string) => {
  try {
    const response = await api.get(`/repteis/filtro/habitat/${habitat}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao filtrar répteis por habitat ${habitat}:`, error);
    throw error;
  }
};

// Função para filtrar répteis por dieta
export const getRepteisByDieta = async (dieta: string) => {
  try {
    const response = await api.get(`/repteis/filtro/dieta/${dieta}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao filtrar répteis por dieta ${dieta}:`, error);
    throw error;
  }
};

// Função para filtrar répteis por período de atividade
export const getRepteisByPeriodoAtividade = async (periodo: string) => {
  try {
    const response = await api.get(`/repteis/filtro/atividade/${periodo}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao filtrar répteis por período de atividade ${periodo}:`,
      error
    );
    throw error;
  }
};

// Função para filtrar répteis por naturalidade (Nativo/Exótico)
export const getRepteisByNaturalidade = async (tipo: string) => {
  try {
    const response = await api.get(`/repteis/filtro/naturalidade/${tipo}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao filtrar répteis por naturalidade ${tipo}:`, error);
    throw error;
  }
};

// Função para filtrar répteis perigosos
export const getRepteisPerigosos = async () => {
  try {
    const response = await api.get("/repteis/filtro/perigo");
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar répteis perigosos:", error);
    throw error;
  }
};

// Função para buscar répteis por nome (científico ou popular)
export const searchRepteis = async (termo: string) => {
  try {
    const response = await api.get(`/repteis/busca/${termo}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar répteis por termo ${termo}:`, error);
    throw error;
  }
};
