const express = require("express");
const aplicacao = express();
const porta = 3000;

//configurando a aplicação para usar ejs
const path = require("path");
aplicacao.use(express.static("arquivos"));
aplicacao.set("views", "./views");
aplicacao.set("view engine", "ejs");

aplicacao.get("/", (req, res) => {
    console.log("Calculadora");
    res.render("calculadora");
});

aplicacao.listen(porta, () => console.log("Servidor no ar"));