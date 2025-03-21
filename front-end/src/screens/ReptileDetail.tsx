import {
  AccessTime,
  ArrowBack,
  Category,
  Pets,
  Public,
  ReportProblem,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRepteis } from "../api";
import { Reptil } from "../types/reptile";

const ReptileDetail: React.FC = () => {
  const location = useLocation();
  const { id } = location.state || {}; // id será passado via state
  const navigate = useNavigate();
  const theme = useTheme(); // Acessando o tema
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detectando se é um dispositivo móvel
  const [repteis, setRepteis] = useState<Reptil[]>([]);
  const [loading, setLoading] = useState(true);
  const reptile: Reptil | undefined = repteis.find((r) => r.id === Number(id));

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        // Buscar todos os répteis
        const data = await getRepteis();
        setRepteis(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Typography>Carregando</Typography>;
  }

  if (!reptile) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h6">Réptil não encontrado!</Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Voltar ao Glossário
        </Button>
      </Box>
    );
  }

  return (
    <Box py={4} px={2}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate("/")}
        color="primary"
        sx={{
          borderRadius: 20,
          boxShadow: 2,
          textTransform: "none",
          "&:hover": {
            boxShadow: 3,
          },
        }}
      >
        Voltar ao Glossário
      </Button>

      <Card
        sx={{
          mt: 2,
          borderRadius: 2, // Bordas arredondadas
          boxShadow: 3, // Corrigido o nome da propriedade de "boxShaadow" para "boxShadow"
          overflow: "hidden", // Esconde qualquer overflow de imagem
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardMedia
          component="img"
          image={`src/public/assets/images/Reptiles/${reptile.imagemPrincipal}.jpg`}
          height={isMobile ? "250" : "350"}
          alt={reptile.nomePopular}
          sx={{
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {reptile.nomePopular}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontStyle="italic"
            mb={2}
          >
            {reptile.nomeCientifico}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <ReportProblem color="error" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Nível de Perigo:</strong>{" "}
                  {reptile.perigo ?? "Inofensivo"}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Habitat:</strong>
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {reptile.habitat.map((h, idx) => (
                    <Chip
                      key={idx}
                      label={h}
                      color="primary"
                      size="small"
                      sx={{ borderRadius: 10 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTime color="secondary" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Período de Atividade:</strong>
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {reptile.periodoAtividade.map((p, idx) => (
                    <Chip
                      key={idx}
                      label={p}
                      color="secondary"
                      size="small"
                      sx={{ borderRadius: 10 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Public color="info" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Naturalidade:</strong> {reptile.naturalidade}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Category color="warning" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Estado de Conservação:</strong> {reptile.conservacao}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Pets color="action" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Dieta:</strong>
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {reptile.dieta.map((d, idx) => (
                    <Chip
                      key={idx}
                      label={d}
                      color="default"
                      size="small"
                      sx={{ borderRadius: 10 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Box
              sx={{
                marginLeft: 2,
              }}
            >
              <Grid item xs={12}>
                <Box mt={2} width={400}>
                  <Typography variant="h6" gutterBottom>
                    Distribuição
                  </Typography>
                  <CardMedia
                    component="img"
                    image={`src/public/assets/images/Reptiles/${reptile.imagemContinente}.png`}
                    height="500"
                    alt={`Distribuição de ${reptile.nomePopular}`}
                    sx={{
                      borderRadius: 16,
                      objectFit: "contain",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                </Box>
              </Grid>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReptileDetail;
