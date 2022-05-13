import express from 'express';
import morgan from 'morgan';
import curriculo from '../public/src/curriculum.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();

app.use('/', router);
app.use('/', express.static('public'));
app.use(express.json())

app.use(morgan('tiny'));

app.post('/curriculum', (req, res) => {
  curriculo.setCurriculo(req.body);

  res.status(200).json(curriculo.getCurriculo());
});

app.get('/curriculum', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/curriculum-layout.html'));
});

app.get('/curriculum-infos', (req, res) => {
  res.send(curriculo.readAll())
})

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080")
});