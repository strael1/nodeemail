const express = require('express');
const router = express.Router();
const contatoControllers = require('../controllers/contato.controller');
const cadastroControllers = require('../controllers/cadastro.controller');

// GET Contato
router.get('/contato', contatoControllers.getContato);

// POST Contato
router.post('/contato', contatoControllers.postContato);

// GET cadastro
router.get('/cadastro', cadastroControllers.getCadastro);
router.get('/usuarios', cadastroControllers.getAllUsers);

// POST cadastro
router.post('/cadastro', cadastroControllers.postCadastro);


module.exports = router;