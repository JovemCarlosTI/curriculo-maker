import express from 'express';
import morgan from 'morgan';

const app = express();
const router = express.Router();

app.use('/', router);
app.use(express.static('public/pages'));

app.use(morgan('tiny'));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});