import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import Filters from './../components/Filters';
import { repteis } from './../data/reptiles';
import ReptileCard from '../components/ReptileCard';
import { Reptil, Habitat, PeriodoAtividade, Conservacao, Dieta } from '../types/reptile';

const Home: React.FC = () => {
  const [filteredrepteiss, setFilteredrepteiss] = useState<Reptil[]>(repteis);
  const [selectedFilters, setSelectedFilters] = useState({
    dieta: [] as Dieta[],
    habitat: [] as Habitat[],
    periodoAtividade: [] as PeriodoAtividade[],
    conservacao: [] as Conservacao[],
    naturalidade: [] as ("Nativo" | "Exótico")[],
    searchQuery: ''
  });

  const filterrepteiss = () => {
    let filtered = repteis;
    
    if (selectedFilters.searchQuery) {
      filtered = filtered.filter(repteis =>
        repteis.nomePopular.toLowerCase().includes(selectedFilters.searchQuery.toLowerCase()) ||
        repteis.nomeCientifico.toLowerCase().includes(selectedFilters.searchQuery.toLowerCase())
      );
    }
    
    if (selectedFilters.dieta.length > 0) {
      filtered = filtered.filter(repteis => 
        repteis.dieta.some(diet => selectedFilters.dieta.includes(diet as Dieta))
      );
    }
    
    if (selectedFilters.habitat.length > 0) {
      filtered = filtered.filter(repteis => 
        repteis.habitat.some(hab => selectedFilters.habitat.includes(hab))
      );
    }
    
    if (selectedFilters.periodoAtividade.length > 0) {
      filtered = filtered.filter(repteis => 
        repteis.periodoAtividade.some(period => selectedFilters.periodoAtividade.includes(period))
      );
    }
    
    if (selectedFilters.conservacao.length > 0) {
      filtered = filtered.filter(repteis => 
        selectedFilters.conservacao.includes(repteis.conservacao)
      );
    }
    
    if (selectedFilters.naturalidade.length > 0) {
      filtered = filtered.filter(repteis => 
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
          newFilters[typedCategory] = filterArray.filter(item => item !== typedValue) as any;
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
      searchQuery: ''
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const grouprepteissByAttribute = () => {
    const groupedrepteiss: Record<string, Reptil[]> = {};
    
    if (selectedFilters.dieta.length > 0) {
      selectedFilters.dieta.forEach(diet => {
        const dietrepteiss = filteredrepteiss.filter(repteis => 
          repteis.dieta.includes(diet)
        );
        if (dietrepteiss.length > 0) {
          groupedrepteiss[`Dieta: ${diet}`] = dietrepteiss;
        }
      });
    }
    
    if (selectedFilters.habitat.length > 0) {
      selectedFilters.habitat.forEach(habitat => {
        const habitatrepteiss = filteredrepteiss.filter(repteis => 
          repteis.habitat.includes(habitat)
        );
        if (habitatrepteiss.length > 0) {
          groupedrepteiss[`Habitat: ${habitat}`] = habitatrepteiss;
        }
      });
    }
    
    if (selectedFilters.periodoAtividade.length > 0) {
      selectedFilters.periodoAtividade.forEach(period => {
        const periodrepteiss = filteredrepteiss.filter(repteis => 
          repteis.periodoAtividade.includes(period)
        );
        if (periodrepteiss.length > 0) {
          groupedrepteiss[`Período: ${period}`] = periodrepteiss;
        }
      });
    }
    
    if (selectedFilters.conservacao.length > 0) {
      selectedFilters.conservacao.forEach(status => {
        const statusrepteiss = filteredrepteiss.filter(repteis => 
          repteis.conservacao === status
        );
        if (statusrepteiss.length > 0) {
          groupedrepteiss[`Conservação: ${status}`] = statusrepteiss;
        }
      });
    }
    
    if (selectedFilters.naturalidade.length > 0) {
      selectedFilters.naturalidade.forEach(origin => {
        const originrepteiss = filteredrepteiss.filter(repteis => 
          repteis.naturalidade === origin
        );
        if (originrepteiss.length > 0) {
          groupedrepteiss[`Origem: ${origin}`] = originrepteiss;
        }
      });
    }
    
    if (Object.keys(groupedrepteiss).length === 0) {
      groupedrepteiss["Todos os Répteis"] = filteredrepteiss;
    }
    
    return groupedrepteiss;
  };

  const groupedrepteiss = grouprepteissByAttribute();

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <Box sx={{ py: 4, backgroundColor: 'white', boxShadow: 2 }}>
        <Box className="container mx-auto px-4" display="flex" gap={4}>
          <Filters 
            selectedFilters={selectedFilters} 
            handleFilterChange={handleFilterChange} 
            clearFilters={clearFilters} 
          />
          <TextField
            label="Pesquisar Réptil"
            variant="outlined"
            fullWidth
            value={selectedFilters.searchQuery}
            onChange={handleSearchChange}
            sx={{ width: '60%' }}
          />
          <Button variant="outlined" color="secondary" onClick={clearFilters}>
            Limpar Filtros
          </Button>
        </Box>
      </Box>
      <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
        <Box className="container mx-auto px-4">
          {Object.entries(groupedrepteiss).map(([groupName, repteiss]) => (
            <Box key={groupName} sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                {groupName} ({repteiss.length})
              </Typography>
              <Grid container spacing={3}>
                {repteiss.map((repteis) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={repteis.id}>
                    <ReptileCard reptile={repteis} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;