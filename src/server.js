import express from 'express';
import cors from 'cors';

import amazoniaRoute from './Routes/amazonia.route.js';
import dicasRoute from './Routes/dicas.route.js';
import livrosRoute from './Routes/dicas.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/amazonia', amazoniaRoute);
app.use('/dicas', dicasRoute);
app.use('/livros', livrosRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
