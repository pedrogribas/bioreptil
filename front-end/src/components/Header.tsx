import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Leaf } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const theme = useTheme(); // Acessando o tema
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detectando se é dispositivo móvel

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "#209624",
        color: "white",
        px: 4,
        py: isMobile ? 4 : 8, // Ajustando o padding dependendo do dispositivo
      }}
    >
      <Box
        className="container mx-auto px-4"
        sx={{ maxWidth: "lg", mx: "auto" }}
      >
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ mb: isMobile ? 2 : 4 }}>
            <Typography
              variant="h3"
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              <Leaf width={48} height={48} />
              {/* Adicionando o Link */}
              <Link
                to="/sobre"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                BioReptil
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ color: "green.100", mt: 2 }}>
              Explore o fascinante mundo dos répteis através do nosso glossário
              digital completo. Descubra espécies, habitats e curiosidades.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
