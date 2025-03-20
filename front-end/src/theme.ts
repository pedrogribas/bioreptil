import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#209624", // Cor principal
      light: "#52b858", // Versão mais clara
      dark: "#156b18", // Versão mais escura
      contrastText: "#ffffff", // Texto branco para contraste
    },
    secondary: {
      main: "#146b1a", // Uma cor secundária baseada no verde
      light: "#48a24a",
      dark: "#0e4712",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5", // Fundo principal
      paper: "#ffffff", // Fundo de cartões e elementos elevados
    },
    text: {
      primary: "#212121",
      secondary: "#4f4f4f",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#156b18",
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove letras maiúsculas dos botões
          borderRadius: 8, // Bordas arredondadas
        },
      },
    },
  },
});

export default theme;
