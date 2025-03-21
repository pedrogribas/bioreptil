import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Conservacao,
  Habitat,
  PeriodoAtividade,
  Reptil,
} from "../types/reptile";

interface ReptileCardProps {
  reptile: Reptil;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
  border: `1px solid ${theme.palette.divider}`,
  overflow: "hidden",
}));

const CardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: theme.spacing(1, 0),
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(1),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(0.5),
}));

const IconImage = styled("img")({
  width: 24,
  height: 24,
  objectFit: "contain",
});

const ReptileCard: React.FC<ReptileCardProps> = ({ reptile }) => {
  const {
    id,
    nomePopular,
    nomeCientifico,
    imagemPrincipal,
    periodoAtividade,
    conservacao,
    naturalidade,
    habitat,
  } = reptile;

  // Helper function to get icon paths
  const getConservacaoIcon = (status: Conservacao) => {
    switch (status) {
      case "POUCO PREOCUPANTE":
        return "src/public/assets/images/Icons/pouco-preocupante.png";
      case "QUASE AMEAÇADA":
        return "src/public/assets/images/Icons/quase-ameacada.png";
      case "VULNERÁVEL":
        return "src/public/assets/images/Icons/vulneravel.png";
      default:
        return null;
    }
  };

  const getNaturalidadeIcon = (nat: "Nativo" | "Exótico") => {
    return nat === "Nativo"
      ? "src/public/assets/images/Icons/nativo.png"
      : "src/public/assets/images/Icons/exotico.png";
  };

  const getPeriodoAtividadeIcon = (periodo: PeriodoAtividade) => {
    return periodo === "Diurno"
      ? "src/public/assets/images/Icons/diurno.png"
      : "src/public/assets/images/Icons/noturno.png";
  };

  const getHabitatIcon = (hab: Habitat) => {
    switch (hab) {
      case "Solo":
        return "src/public/assets/images/Icons/solo.png";
      case "Árvores":
        return "src/public/assets/images/Icons/arvores.png";
      case "Ambiente Aquático":
        return "src/public/assets/images/Icons/aquatico.png";
      case "Subsolo e Serrapilheira":
        return "src/public/assets/images/Icons/subsolo.png";
      default:
        return null;
    }
  };

  const navigate = useNavigate();
  return (
    <StyledCard
      elevation={3}
      onClick={() => navigate(`/reptile`, { state: { id } })}
    >
      <CardHeader>
        <Typography
          variant="subtitle1"
          component="div"
          fontWeight="bold"
          noWrap
        >
          {nomePopular}
        </Typography>
      </CardHeader>
      <CardMedia
        component="img"
        image={`src/public/assets/images/Reptiles/${imagemPrincipal}.jpg`}
        alt={nomePopular}
        sx={{ objectFit: "fill", height: 160 }}
      />

      <CardContent sx={{ pb: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          fontStyle="italic"
          noWrap
        >
          {nomeCientifico}
        </Typography>

        <IconsContainer>
          {/* Período de atividade - Exibe primeiro item do array */}
          {periodoAtividade.length > 0 && (
            <Tooltip title={`Período: ${periodoAtividade.join(", ")}`}>
              <IconWrapper>
                <IconImage
                  src={getPeriodoAtividadeIcon(periodoAtividade[0])}
                  alt={periodoAtividade[0]}
                />
              </IconWrapper>
            </Tooltip>
          )}

          {/* Conservação */}
          <Tooltip title={`Conservação: ${conservacao}`}>
            <IconWrapper>
              <IconImage
                src={getConservacaoIcon(conservacao) ?? ""}
                alt={conservacao}
              />
            </IconWrapper>
          </Tooltip>

          {/* Naturalidade */}
          <Tooltip title={naturalidade}>
            <IconWrapper>
              <IconImage
                src={getNaturalidadeIcon(naturalidade)}
                alt={naturalidade}
              />
            </IconWrapper>
          </Tooltip>

          {/* Habitat - Exibe primeiro item do array */}
          {habitat.length > 0 && (
            <Tooltip title={`Habitat: ${habitat.join(", ")}`}>
              <IconWrapper>
                <IconImage
                  src={getHabitatIcon(habitat[0]) ?? ""}
                  alt={habitat[0]}
                />
              </IconWrapper>
            </Tooltip>
          )}
        </IconsContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ReptileCard;
