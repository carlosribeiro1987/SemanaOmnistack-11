const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Login de ONG
routes.post('/sessions', SessionController.create);

//Listagem de ONGs
routes.get('/ongs',  OngController.index);
//Cadastro de ONG
routes.post('/ongs', OngController.create);

//Listagem de todos os casos de uma ONG
routes.get('/profile', ProfileController.index);

//Listagem de Caso
routes.get('/incidents', IncidentController.index);
//Cadastro de Caso
routes.post('/incidents', IncidentController.create);
//Remoção de Caso
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;