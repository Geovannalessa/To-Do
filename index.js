//importação da biblioteca express
const express = require("express");

const path = require('path');
// const servidor = express.Router;

//Importando os roteadores
const todoRouter = require('./routers/todoRouter');


// Criando servidor
const servidor = express();

//Configuração do Template Engine
servidor.set('view engine', 'ejs');
// o engine que voce ira usar é o ejs

//configurando a parta public como contedora dos arquivos estáticos *precisa ser adicionada antes do filmes router
servidor.use(express.static(path.join(__dirname, 'public')));

// Usando o router
servidor.use('/', todoRouter);


servidor.listen(8000);

// servidor.get ('/', (req,res)=>{
//     console.log("cadê?")
//     res.send("alouu");
// })



// module.exports = index.js;

