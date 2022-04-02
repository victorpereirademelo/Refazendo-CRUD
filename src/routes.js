const express = require('express');

const ProdutoController = require('./controllers/ProdutoController');

const route = express.Router();

route.post('/produtos', ProdutoController.create);
route.get('/produtos', ProdutoController.read);
route.put('/produtos/:id', ProdutoController.update);
route.delete('/produtos/:id', ProdutoController.delete);

module.exports = route;