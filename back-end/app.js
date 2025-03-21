var express = require("express");
var app = express();
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  database: "Guia", // Nome do banco de dados de répteis
  user: "root", // Usuário do MySQL
  password: "1234", // Senha do MySQL
});

module.exports = connection;

app.get("/", function (req, res) {
  let sql = "SELECT * FROM Repteis"; // Nome da tabela de répteis
  connection.query(sql, function (err, results) {
    if (err) throw err;

    const processedResults = results.map((reptil) => ({
      ...reptil,
    }));

    res.json(processedResults); // Envia os dados como JSON
  });
});

app.listen(3000, function () {
  console.log("App Listening on port 3000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
  });
});
