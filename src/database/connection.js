const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

const Produto = require('../../models/Produto');

const connection = new Sequelize(dbConfig.development);

Produto.init(connection);

module.exports = connection;