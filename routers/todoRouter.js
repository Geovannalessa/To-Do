//Importar o express:
const express = require('express');

//Importando o controller
const todoController = require('../controllers/todoController');

//Criando o roteador:
const router = express.Router();

//Criando a rota:
router.get("/home", todoController.home);
 
//Exportando o roteador:
module.exports = router;

