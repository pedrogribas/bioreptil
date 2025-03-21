import { Box, Container, Typography, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme(); // Usa o tema definido no ThemeProvider

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark, // Usa a cor escura do tema
        py: 3,
        color: theme.palette.primary.contrastText, // Mantém o contraste adequado
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          align="center"
          color="primary.light" // Usa a cor clara do tema
        >
          © 2025 BioReptil - Glossário Digital de Répteis. Projeto Acadêmico.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
