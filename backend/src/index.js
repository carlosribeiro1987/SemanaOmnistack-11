const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors()); //Permite que qualquer aplicação acesse o backend

// Para restringir o acesso, adicionar a origem do qual o backand pode ser acessado.
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));
app.use(express.json());
app.use(routes);

/**
 *  GET: Buscar informação do back-end.
 *  POST: Criar informação no back-end.
 *  PUT: Alterar informação no back-end.
 *  DELETE: Apagar informação do back-end.
 */

/**
 *  Tipos de parâmetros:
 * 
 *  Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação).
 *  Route Params: Parâmetros utilizados para identificar recursos.
 *  Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
 */



app.listen(3333);

/**
 * 
 * npm install -D nodemon (Para monitorar o código sem precisar reiniciar o node)
 * 
 * adicionar 
 */