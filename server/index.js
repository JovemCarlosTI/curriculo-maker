import express from 'express';
import morgan from 'morgan';
import curriculo from './models/curriculum.js';
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

app.post('/curriculum', async (req, res) => {
  const lastID = await curriculo.setCurriculo(req.body)
  
  res.send({"id": `${lastID}`});
});

app.get('/curriculum', (req, res) => {
  console.log(req.params)
  res.sendFile(path.join(__dirname, '/../public/curriculum-layout.html'));
});

app.get('/curriculum-infos', (req, res) => {

  curriculo.readAll().then(result => {
    res.send(result)

 });
})

app.get('/curriculum-info/id/:id', async (req, res) => {
  const id = parseInt((req.params.id));
  const response = await curriculo.getCurriculo(id)

 res.json(response);
})

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080")
});