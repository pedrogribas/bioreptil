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
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Reptil } from "../types/reptile";
import { repteis } from "./../data/reptiles"; // Simulação de dados

const ReptileDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme(); // Acessando o tema
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detectando se é um dispositivo móvel

  // Buscar o réptil pelo ID (simulação, em um caso real poderia vir de uma API)
  const reptile: Reptil | undefined = repteis.find((r) => r.id === Number(id));

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
          boxShaadow: 3,
          overflow: "hidden", // Esconde qualquer overflow de imagem
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <img
          src={`front-end/src/public/assets/images/Reptiles/${reptile.imagemPrincipal}.jpg`}
          alt="Grapefruit slice atop a pile of other slices"
          width={300}
          height={300}
        />
        <CardMedia
          component="img"
          height={isMobile ? "250" : "350"}
          image={`src/public/assets/images/Reptiles/${reptile.imagemPrincipal}.jpg`}
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
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTime color="secondary" />
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Período de Atividade:</strong>
                </Typography>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReptileDetail;
