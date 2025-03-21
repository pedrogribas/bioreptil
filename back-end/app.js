// app.js - Arquivo principal da aplicação

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "Guia",
};

// Pool de conexões
let pool;

// Inicializar o pool de conexões
async function initializeDbPool() {
  try {
    pool = mysql.createPool(dbConfig);
    console.log(
      "Pool de conexão com o banco de dados inicializado com sucesso"
    );
  } catch (error) {
    console.error("Erro ao inicializar o pool de conexão:", error);
    process.exit(1);
  }
}

// Rotas da API

// GET /api/repteis - Retorna todos os répteis
app.get("/api/repteis", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Repteis");

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao buscar répteis:", error);
    res.status(500).json({ error: "Erro ao buscar os dados dos répteis" });
  }
});

// GET /api/repteis/:id - Retorna um réptil específico pelo ID
app.get("/api/repteis/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Repteis WHERE id_Reptil = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Réptil não encontrado" });
    }

    // Converter strings JSON para objetos JavaScript
    const reptil = {
      ...rows[0],
      Habitat: JSON.parse(rows[0].Habitat),
      Periodo_Atividade: JSON.parse(rows[0].Periodo_Atividade),
      Dieta: JSON.parse(rows[0].Dieta),
    };

    res.json(reptil);
  } catch (error) {
    console.error("Erro ao buscar réptil:", error);
    res.status(500).json({ error: "Erro ao buscar os dados do réptil" });
  }
});

// GET /api/repteis/filtro/habitat/:habitat - Filtra répteis por habitat
app.get("/api/repteis/filtro/habitat/:habitat", async (req, res) => {
  try {
    const habitat = req.params.habitat;
    // Busca répteis onde o JSON de habitat contém o valor especificado
    const [rows] = await pool.query(
      `SELECT * FROM Repteis WHERE JSON_CONTAINS(Habitat, ?)`,
      [JSON.stringify(habitat)]
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao filtrar répteis por habitat:", error);
    res.status(500).json({ error: "Erro ao filtrar répteis por habitat" });
  }
});

// GET /api/repteis/filtro/dieta/:dieta - Filtra répteis por dieta
app.get("/api/repteis/filtro/dieta/:dieta", async (req, res) => {
  try {
    const dieta = req.params.dieta;
    // Busca répteis onde o JSON de dieta contém o valor especificado
    const [rows] = await pool.query(
      `SELECT * FROM Repteis WHERE JSON_CONTAINS(Dieta, ?)`,
      [JSON.stringify(dieta)]
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao filtrar répteis por dieta:", error);
    res.status(500).json({ error: "Erro ao filtrar répteis por dieta" });
  }
});

// GET /api/repteis/filtro/atividade/:periodo - Filtra répteis por período de atividade
app.get("/api/repteis/filtro/atividade/:periodo", async (req, res) => {
  try {
    const periodo = req.params.periodo;
    // Busca répteis onde o JSON de período de atividade contém o valor especificado
    const [rows] = await pool.query(
      `SELECT * FROM Repteis WHERE JSON_CONTAINS(Periodo_Atividade, ?)`,
      [JSON.stringify(periodo)]
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao filtrar répteis por período de atividade:", error);
    res
      .status(500)
      .json({ error: "Erro ao filtrar répteis por período de atividade" });
  }
});

// GET /api/repteis/filtro/naturalidade/:tipo - Filtra répteis por naturalidade (Nativo/Exótico)
app.get("/api/repteis/filtro/naturalidade/:tipo", async (req, res) => {
  try {
    const tipo = req.params.tipo;
    const [rows] = await pool.query(
      "SELECT * FROM Repteis WHERE Naturalidade = ?",
      [tipo]
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao filtrar répteis por naturalidade:", error);
    res.status(500).json({ error: "Erro ao filtrar répteis por naturalidade" });
  }
});

// GET /api/repteis/filtro/perigo - Filtra répteis perigosos
app.get("/api/repteis/filtro/perigo", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Repteis WHERE Perigo = 'Perigo'"
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao filtrar répteis perigosos:", error);
    res.status(500).json({ error: "Erro ao filtrar répteis perigosos" });
  }
});

// GET /api/repteis/busca/:termo - Busca répteis por nome
app.get("/api/repteis/busca/:termo", async (req, res) => {
  try {
    const termo = `%${req.params.termo}%`;
    const [rows] = await pool.query(
      "SELECT * FROM Repteis WHERE Nome_Cientifico LIKE ? OR Nome_Popular LIKE ?",
      [termo, termo]
    );

    // Converter strings JSON para objetos JavaScript
    const processedRows = rows.map((reptil) => ({
      ...reptil,
      Habitat: JSON.parse(reptil.Habitat),
      Periodo_Atividade: JSON.parse(reptil.Periodo_Atividade),
      Dieta: JSON.parse(reptil.Dieta),
    }));

    res.json(processedRows);
  } catch (error) {
    console.error("Erro ao buscar répteis por nome:", error);
    res.status(500).json({ error: "Erro ao buscar répteis por nome" });
  }
});

// Inicializar o servidor
async function startServer() {
  await initializeDbPool();

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

// Tratar erros não capturados
process.on("unhandledRejection", (err) => {
  console.error("Erro não tratado:", err);
});

// Iniciar o servidor
startServer();

module.exports = app; // Para testes
