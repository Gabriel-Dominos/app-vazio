
const express = require("express");
const app = express();
const porta = 3000;

// Arquivos estáticos: CSS, JS e imagens
app.use(express.static("./app/public"));

// Configurar o EJS
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configurar recebimento de dados
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar as rotas
const rota = require("./app/routes/router");
app.use("/", rota);

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor on-line\nhttp://localhost:${porta}`);
});
