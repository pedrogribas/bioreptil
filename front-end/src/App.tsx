import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme"; // Importa o tema personalizado

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza os estilos do Material UI */}
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
