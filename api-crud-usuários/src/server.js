//Importações
import express from 'express';
import routes from './routes.js';
import cors from 'cors';

//Configurações
const app = express();
app.use(cors());

app.use(express.json());

app.use('/', routes);

export default app