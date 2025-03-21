import axios from "axios";

// Configuração do axios com a URL base do back-end
const api = axios.create({
  baseURL: "http://localhost:3000/", // A porta deve ser a mesma do back-end (3000)
});

// Função para buscar todos os répteis
export const getRepteis = async () => {
  try {
    const response = await api.get("/");
    console.log("REPTEISLOG", response.data);

    // Mapear os dados para o formato correto
    const mappedRepteis = response.data.map((reptil: any) => ({
      id: reptil.id_Reptil, // Ajustando o campo para 'id' esperado
      nomePopular: reptil.Nome_Popular, // Ajustando para o nome popular
      nomeCientifico: reptil.Nome_Cientifico, // Ajustando para o nome científico
      conservacao: reptil.Conservacao, // Conservação
      dieta: reptil.Dieta, // Dieta (já está como um array, não precisa de alteração)
      habitat: reptil.Habitat, // Habitat (já está como um array, não precisa de alteração)
      imagemContinente: reptil.Imagem_Continente, // Imagem do continente
      imagemPrincipal: reptil.Imagem_principal, // Imagem principal
      imagemVariacao: reptil.Imagem_variacao, // Imagem de variação (pode ser nulo)
      naturalidade: reptil.Naturalidade, // Naturalidade
      perigo: reptil.Perigo, // Perigo
      periodoAtividade: reptil.Periodo_Atividade, // Período de atividade
    }));

    return mappedRepteis;
  } catch (error) {
    console.error("Erro ao buscar répteis:", error);
    throw error;
  }
};
