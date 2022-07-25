//importação da biblioteca express
const express = require("express");

// const servidor = express.Router;

//Importando os roteadores
const todoRouter = require('./routers/todoRouter');


// Criando servidor
const servidor = express();

// Usando o router
servidor.use('/', todoRouter);


servidor.listen(8000);

// servidor.get ('/', (req,res)=>{
//     console.log("cadê?")
//     res.send("alouu");
// })



// module.exports = index.js;

