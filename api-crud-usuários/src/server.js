//Importações
import express from 'express';
import routes from './routes.js';
import cors from 'cors';

//Configurações
const app = express();
app.use(cors({
    origin: ['https://dashboard-green-one-73.vercel.app/cadastro', 'https://dashboard-green-one-73.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/', routes);

export default app