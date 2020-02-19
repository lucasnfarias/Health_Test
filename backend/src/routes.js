const { Router } = require('express');
const CliController = require('./controllers/CliController');

const routes = Router();

routes.get('/clinicas', CliController.index);
routes.post('/clinicas', CliController.store);

module.exports = routes;