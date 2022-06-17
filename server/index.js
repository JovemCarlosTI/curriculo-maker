import express from 'express';
import morgan from 'morgan';
import curriculo from './models/curriculum.js';
import user from './models/usuario.js';
import path from 'path';
import {fileURLToPath} from 'url';
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();


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
});

app.get('/pdf', (req, res) => {
  doc.text("Hello world!", 10, 10);
  doc.textWithLink("aaaaaaaaa");
  doc.save("a4.pdf");

  res.send(doc);
});

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080")
});

app.post('/create-user', async (req, res) => {
  const lastID = await user.create(req.body);

  res.send({"id": `${lastID}`});
});

app.get('/usuarios-infos', async (req, res) => {

  await user.readAll().then(result => {
    res.send(result)
 });
})

app.get('/usuario-info/id/:id', async (req, res) => {
  const id = parseInt((req.params.id));
  const response = await user.readById(id)

 res.json(response);
});

app.post('/auth-user', async (req, res) => {
  const { login, senha } = req.body;

  const lastID = await user.auth(login, senha);

  res.send({"id": `${lastID}`});
});