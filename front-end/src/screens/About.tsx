import { Book, Person, School, Storage, Web } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

// Custom theme with reptile-inspired colors

export function About() {
  const navigate = useNavigate(); // Hook do react-router-dom para navegação

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          pt: 6,
          pb: 8,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 2,
              background: "linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)",
              color: "white",
            }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Sobre o BioReptil
            </Typography>
            <Typography variant="h5" align="center">
              Um projeto interdisciplinar do IFMG - Campus Sabará
            </Typography>
          </Paper>

          <Box sx={{ mb: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBackClick}
              startIcon={<Web />}
            >
              Voltar
            </Button>
          </Box>
          {/* Objetivo do Projeto */}
          <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <School sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
              <Typography variant="h4" color="primary.main">
                Objetivo do Projeto
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              O BioReptil é um glossário digital que visa proporcionar uma fonte
              acessível e educativa sobre répteis, combinando tecnologia e
              conhecimento biológico para criar uma experiência de aprendizado
              interativa.
            </Typography>
          </Paper>

          {/* Disciplinas Envolvidas */}
          <Typography variant="h4" color="primary.main" sx={{ mb: 3, ml: 1 }}>
            Disciplinas Envolvidas
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ height: "100%", borderTop: "4px solid #2e7d32" }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Storage
                      sx={{ fontSize: 30, mr: 2, color: "primary.main" }}
                    />
                    <Typography variant="h5" color="primary.main">
                      Banco de Dados
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    Estruturação e gerenciamento de dados
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ height: "100%", borderTop: "4px solid #2e7d32" }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Web sx={{ fontSize: 30, mr: 2, color: "primary.main" }} />
                    <Typography variant="h5" color="primary.main">
                      Programação Web
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    Desenvolvimento frontend e backend
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ height: "100%", borderTop: "4px solid #2e7d32" }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Book sx={{ fontSize: 30, mr: 2, color: "primary.main" }} />
                    <Typography variant="h5" color="primary.main">
                      Experiência do Usuário
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    Design e interatividade
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Equipe */}
          <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Equipe
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  variant="outlined"
                  sx={{ mb: 2, bgcolor: "rgba(46, 125, 50, 0.05)" }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Person
                        sx={{ fontSize: 30, mr: 2, color: "primary.main" }}
                      />
                      <Typography variant="h5" color="primary.main">
                        Desenvolvimento
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <List dense>
                      <Box
                        sx={{
                          display: "flex",
                          witdh: "100%",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Box>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pedro Ribas" />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="André" />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="João Pedro" />
                          </ListItem>
                        </Box>
                        <Box>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Lucas Martins" />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Velber" />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.light" }}>
                                <Person />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vinicius" />
                          </ListItem>
                        </Box>
                      </Box>
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  variant="outlined"
                  sx={{ mb: 2, bgcolor: "rgba(46, 125, 50, 0.05)" }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Book
                        sx={{ fontSize: 30, mr: 2, color: "primary.main" }}
                      />
                      <Typography variant="h5" color="primary.main">
                        Pesquisa e Conteúdo
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Typography>
                      Referência utilizada: Guia de Identificação de Répteis.
                    </Typography>
                    <Link
                      to={
                        "https://drive.google.com/drive/folders/1Z07Zg-bt3-__JV4PQUcrfIKx332VhTH-"
                      }
                    >
                      <CardMedia
                        sx={{ width: 300, height: 300 }}
                        image={"src/public/assets/images/bookcover.png"}
                      />
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
