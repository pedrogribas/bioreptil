import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import ReptileCard from "../components/ReptileCard";
import {
  Conservacao,
  Dieta,
  Habitat,
  PeriodoAtividade,
  Reptil,
} from "../types/reptile";
import Filters from "./../components/Filters";
import { repteis } from "./../data/reptiles";

const Home: React.FC = () => {
  const theme = useTheme(); // Acessando o tema

  const [filteredrepteiss, setFilteredrepteiss] = useState<Reptil[]>(repteis);

  const [selectedFilters, setSelectedFilters] = useState({
    dieta: [] as Dieta[],
    habitat: [] as Habitat[],
    periodoAtividade: [] as PeriodoAtividade[],
    conservacao: [] as Conservacao[],
    naturalidade: [] as ("Nativo" | "Exótico")[],
    searchQuery: "",
  });

  const filterrepteiss = () => {
    let filtered = repteis;

    // Filtros de pesquisa por nome popular e científico
    if (selectedFilters.searchQuery) {
      filtered = filtered.filter(
        (repteis) =>
          repteis.nomePopular
            .toLowerCase()
            .includes(selectedFilters.searchQuery.toLowerCase()) ||
          repteis.nomeCientifico
            .toLowerCase()
            .includes(selectedFilters.searchQuery.toLowerCase())
      );
    }

    // Filtros de dieta
    if (selectedFilters.dieta.length > 0) {
      filtered = filtered.filter((repteis) =>
        selectedFilters.dieta.every((diet) =>
          repteis.dieta.includes(diet as Dieta)
        )
      );
    }

    // Filtros de habitat
    if (selectedFilters.habitat.length > 0) {
      filtered = filtered.filter((repteis) =>
        selectedFilters.habitat.every((hab) => repteis.habitat.includes(hab))
      );
    }

    // Filtros de período de atividade
    if (selectedFilters.periodoAtividade.length > 0) {
      filtered = filtered.filter((repteis) =>
        selectedFilters.periodoAtividade.every((period) =>
          repteis.periodoAtividade.includes(period)
        )
      );
    }

    // Filtros de conservação
    if (selectedFilters.conservacao.length > 0) {
      filtered = filtered.filter((repteis) =>
        selectedFilters.conservacao.includes(repteis.conservacao)
      );
    }

    // Filtros de naturalidade
    if (selectedFilters.naturalidade.length > 0) {
      filtered = filtered.filter((repteis) =>
        selectedFilters.naturalidade.includes(repteis.naturalidade)
      );
    }

    setFilteredrepteiss(filtered);
  };

  useEffect(() => {
    filterrepteiss();
  }, [selectedFilters]);

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
              {generateFilterString()} ({filteredrepteiss.length})
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {filteredrepteiss.map((repteis) => (
                <Box
                  key={repteis.id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ReptileCard reptile={repteis} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
