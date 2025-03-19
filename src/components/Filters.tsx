import React from 'react';
import { Menu, MenuItem, Button, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Habitat, PeriodoAtividade, Conservacao, Dieta } from '../types/reptile';

interface FiltersProps {
  selectedFilters: {
    dieta: Dieta[];
    habitat: Habitat[];
    periodoAtividade: PeriodoAtividade[];
    conservacao: Conservacao[];
    naturalidade: ("Nativo" | "Exótico")[];
    searchQuery: string;
  };
  handleFilterChange: (category: string, value: string) => void;
  clearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilters, handleFilterChange, clearFilters }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Mapaemento de dietas disponíveis
  const dietaOptions: Dieta[] = [
    "Aracnídeos",
    "Vegetais e Algas",
    "Insetos",
    "Peixes",
    "Mamíferos",
    "Aves",
    "Animais com forma de Serpente",
    "Ovos",
    "Lagartos",
    "Lesmas e Caracóis",
    "Anuros",
    "Minhocas"
  ];

  // Mapeamento de habitats disponíveis
  const habitatOptions: Habitat[] = [
    "Solo",
    "Árvores",
    "Ambiente Aquático",
    "Subsolo e Serrapilheira"
  ];

  // Mapeamento de períodos de atividade
  const periodoOptions: PeriodoAtividade[] = [
    "Diurno",
    "Noturno"
  ];

  // Mapeamento de status de conservação
  const conservacaoOptions: Conservacao[] = [
    "POUCO PREOCUPANTE",
    "VULNERÁVEL",
    "QUASE AMEAÇADA"
  ];

  // Mapeamento de origem
  const naturalidadeOptions = [
    "Nativo",
    "Exótico"
  ];

  return (
    <>
      <Button variant="outlined" startIcon={<FilterListIcon />} onClick={handleMenuClick}>
        Filtros
      </Button>
      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            maxHeight: '80vh',
            width: '350px',
            overflow: 'auto'
          }
        }}
      >
        <FormGroup sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>🔹 Dieta 🥦🍖</Typography>
          {dietaOptions.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox 
                  checked={selectedFilters.dieta.includes(item)} 
                  onChange={() => handleFilterChange('dieta', item)} 
                />
              }
              label={item}
            />
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>🔹 Habitat Principal 🌍</Typography>
          {habitatOptions.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox 
                  checked={selectedFilters.habitat.includes(item)} 
                  onChange={() => handleFilterChange('habitat', item)} 
                />
              }
              label={item}
            />
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>🔹 Período de Atividade 🌞🌙</Typography>
          {periodoOptions.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox 
                  checked={selectedFilters.periodoAtividade.includes(item)} 
                  onChange={() => handleFilterChange('periodoAtividade', item)} 
                />
              }
              label={item}
            />
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>🔹 Status de Conservação 🆘</Typography>
          {conservacaoOptions.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox 
                  checked={selectedFilters.conservacao.includes(item)} 
                  onChange={() => handleFilterChange('conservacao', item)} 
                />
              }
              label={item}
            />
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>🔹 Origem 🌎✈️</Typography>
          {naturalidadeOptions.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox 
                  checked={selectedFilters.naturalidade.includes(item as "Nativo" | "Exótico")} 
                  onChange={() => handleFilterChange('naturalidade', item)} 
                />
              }
              label={item}
            />
          ))}

          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => {
              clearFilters();
              handleCloseMenu();
            }}
            sx={{ mt: 2 }}
            fullWidth
          >
            Limpar Filtros
          </Button>
        </FormGroup>
      </Menu>
    </>
  );
};

export default Filters;