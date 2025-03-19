import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Conservacao,
  Habitat,
  PeriodoAtividade,
  Reptil,
} from "../types/reptile";
import { useNavigate } from "react-router-dom";

interface ReptileCardProps {
  reptile: Reptil;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(1),
  backgroundColor: "#fff",
  borderRadius: 8,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
  border: "1px solid #e0e0e0",
  overflow: "hidden",
}));

const CardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#4caf50",
  color: "#fff",
  padding: theme.spacing(1, 2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: theme.spacing(1, 0),
  borderTop: "1px solid #e0e0e0",
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
    // Replace with your actual icon paths
    switch (status) {
      case "POUCO PREOCUPANTE":
        return "src/assets/images/Icons/pouco-preocupante.png";
      case "QUASE AMEAÇADA":
        return "src/assets/images/Icons/quase-ameacada.png";
      case "VULNERÁVEL":
        return "src/assets/images/Icons/vulneravel.png";
      default:
        return null;
    }
  };

  const getNaturalidadeIcon = (nat: "Nativo" | "Exótico") => {
    return nat === "Nativo"
      ? "src/assets/images/Icons/nativo.png"
      : "src/assets/images/Icons/exotico.png";
  };

  const getPeriodoAtividadeIcon = (periodo: PeriodoAtividade) => {
    return periodo === "Diurno"
      ? "src/assets/images/Icons/diurno.png"
      : "src/assets/images/Icons/noturno.png"
  };

  const getHabitatIcon = (hab: Habitat) => {
    // Replace with your actual icon paths
    switch (hab) {
      case "Solo":
        return "src/assets/images/Icons/solo.png";
      case "Árvores":
        return "src/assets/images/Icons/arvores.png";
      case "Ambiente Aquático":
        return "src/assets/images/Icons/aquatico.png";
      case "Subsolo e Serrapilheira":
        return "src/assets/images/Icons/subsolo.png";
      default:
        return null;
    }
  };
  const navigate = useNavigate();
  return (
    <StyledCard elevation={3} onClick={()=>
      navigate(`/reptileDetails/${reptile.id}`)}>
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
        image={`src/assets/images/Reptiles/${imagemPrincipal}.jpg`}
        alt={nomePopular}
        sx={{ objectFit: "cover" , height:160}}
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
          {/* Período de atividade */}
          {periodoAtividade.map((periodo, index) => (
            <Tooltip key={`periodo-${index}`} title={periodo}>
              <IconWrapper>
                <IconImage
                  src={getPeriodoAtividadeIcon(periodo)}
                  alt={periodo}
                />
              </IconWrapper>
            </Tooltip>
          ))}

          {/* Conservação */}
          <Tooltip title={`Conservação: ${conservacao}`}>
            <IconWrapper>
                <IconImage
                  src={getConservacaoIcon(conservacao)??''}
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

          {/* Habitat - Mostra apenas o primeiro habitat para economizar espaço */}
          {habitat.length > 0 && (
            <Tooltip title={`Habitat: ${habitat.join(", ")}`}>
              <IconWrapper>
                <IconImage src={getHabitatIcon(habitat[0])??''} alt={habitat[0]} />
              </IconWrapper>
            </Tooltip>
          )}
        </IconsContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ReptileCard;
