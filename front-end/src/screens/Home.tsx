import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { getRepteis } from "../api";
import Filters from "../components/Filters";
import ReptileCard from "../components/ReptileCard";
import {
  Conservacao,
  Dieta,
  Habitat,
  PeriodoAtividade,
  Reptil,
} from "../types/reptile";

const Home: React.FC = () => {
  const theme = useTheme(); // Acessando o tema
  const [repteis, setRepteis] = useState<Reptil[]>([]);
  const [filteredRepteis, setFilteredRepteis] = useState<Reptil[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Espera 5 segundos antes de buscar os dados
        setLoading(true);
        setTimeout(async () => {
          const data = await getRepteis();
          console.log("Dados da API:", data); // <-- Verifique aqui
          setRepteis(data);
          setFilteredRepteis(data);
          setLoading(false); // Após o delay, define o loading como false
        }, 50); // 5000ms = 5 segundos
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedFilters, setSelectedFilters] = useState({
    dieta: [] as Dieta[],
    habitat: [] as Habitat[],
    periodoAtividade: [] as PeriodoAtividade[],
    conservacao: [] as Conservacao[],
    naturalidade: [] as ("Nativo" | "Exótico")[],
    searchQuery: "",
  });

  useEffect(() => {
    let filtered = repteis;

    if (selectedFilters.searchQuery) {
      filtered = filtered.filter(
        (reptil) =>
          reptil.nomePopular
            .toLowerCase()
            .includes(selectedFilters.searchQuery.toLowerCase()) ||
          reptil.nomeCientifico
            .toLowerCase()
            .includes(selectedFilters.searchQuery.toLowerCase())
      );
    }

    if (selectedFilters.dieta.length > 0) {
      filtered = filtered.filter((reptil) =>
        selectedFilters.dieta.every((diet) => reptil.dieta.includes(diet))
      );
    }

    if (selectedFilters.habitat.length > 0) {
      filtered = filtered.filter((reptil) =>
        selectedFilters.habitat.every((hab) => reptil.habitat.includes(hab))
      );
    }

    if (selectedFilters.periodoAtividade.length > 0) {
      filtered = filtered.filter((reptil) =>
        selectedFilters.periodoAtividade.every((period) =>
          reptil.periodoAtividade.includes(period)
        )
      );
    }

    if (selectedFilters.conservacao.length > 0) {
      filtered = filtered.filter((reptil) =>
        selectedFilters.conservacao.includes(reptil.conservacao)
      );
    }

    if (selectedFilters.naturalidade.length > 0) {
      filtered = filtered.filter((reptil) =>
        selectedFilters.naturalidade.includes(reptil.naturalidade)
      );
    }
    setFilteredRepteis(filtered);
  }, [repteis, selectedFilters]);

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const typedCategory = category as keyof typeof selectedFilters;
      const typedValue = value as any;

      if (Array.isArray(newFilters[typedCategory])) {
        const filterArray = newFilters[typedCategory] as any[];

        if (filterArray.includes(typedValue)) {
          newFilters[typedCategory] = filterArray.filter(
            (item) => item !== typedValue
          ) as any;
        } else {
          (newFilters[typedCategory] as any[]).push(typedValue);
        }
      }

      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      dieta: [],
      habitat: [],
      periodoAtividade: [],
      conservacao: [],
      naturalidade: [],
      searchQuery: "",
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  // Função para gerar a string de filtros aplicados
  const generateFilterString = () => {
    const filters = [];
    if (selectedFilters.dieta.length > 0)
      filters.push(`Dieta: ${selectedFilters.dieta.join(" e ")}`);
    if (selectedFilters.habitat.length > 0)
      filters.push(`Habitat: ${selectedFilters.habitat.join(" e ")}`);
    if (selectedFilters.periodoAtividade.length > 0)
      filters.push(`Período: ${selectedFilters.periodoAtividade.join(" e ")}`);
    if (selectedFilters.conservacao.length > 0)
      filters.push(`Conservação: ${selectedFilters.conservacao.join(" e ")}`);
    if (selectedFilters.naturalidade.length > 0)
      filters.push(`Origem: ${selectedFilters.naturalidade.join(" e ")}`);

    return filters.length > 0 ? filters.join(" | ") : "Todos os Répteis";
  };

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          py: 4,
        }}
      >
        <Box display="flex" justifyContent="center" gap={4}>
          <Filters
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
            clearFilters={clearFilters}
          />
          <Box sx={{ width: "60%" }}>
            <TextField
              label="Pesquisar Réptil"
              variant="outlined"
              fullWidth
              value={selectedFilters.searchQuery}
              onChange={handleSearchChange}
            />
          </Box>
          <Button variant="outlined" color="secondary" onClick={clearFilters}>
            Limpar Filtros
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box className="container mx-auto px-4">
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
            >
              {generateFilterString()} ({filteredRepteis.length})
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {filteredRepteis.map((reptil) => {
                console.log("REPTIL AGORA", reptil);

                return (
                  <Box
                    key={reptil.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReptileCard reptile={reptil} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
