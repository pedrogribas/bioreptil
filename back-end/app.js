var express = require("express");
var app = express();
var mysql = require("mysql2");
var cors = require("cors"); // Middleware para CORS

app.use(
  cors({
    origin: "*", // Permite qualquer origem
  })
);

app.use(express.json()); // Permite parsing de JSON no body (caso necessário no futuro)

// Criando a conexão com o banco de dados
var connection = mysql.createConnection({
  host: "localhost",
  database: "Guia", // Nome do banco de dados
  user: "root", // Usuário do MySQL
  password: "1234", // Senha do MySQL
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1); // Encerra a aplicação em caso de erro
  }
  console.log("Database connected!");
});

app.get("/", (req, res) => {
  let sql = "SELECT * FROM Repteis"; // Query para selecionar todos os dados da tabela Repteis
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      return res.status(500).json({ error: "Erro ao buscar dados" });
    }

    console.log("Resultados do banco:", results); // LOG DOS RESULTADOS
    const dadosCorrigidos = results.map((reptil) => {
      return {
        ...reptil,
        Habitat:
          typeof reptil.Habitat === "string"
            ? JSON.parse(reptil.Habitat)
            : reptil.Habitat,
        Periodo_Atividade:
          typeof reptil.Periodo_Atividade === "string"
            ? JSON.parse(reptil.Periodo_Atividade)
            : reptil.Periodo_Atividade,
        Dieta:
          typeof reptil.Dieta === "string"
            ? JSON.parse(reptil.Dieta)
            : reptil.Dieta,
      };
    });

    res.json(dadosCorrigidos); // Retorna os dados processados em formato JSON
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
