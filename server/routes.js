import { Router } from "express";
import 'dotenv/config'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import curriculo from './models/curriculum.js';
import user from './models/usuario.js';

import path from 'path';
import {fileURLToPath} from 'url';

import SendMail from './services/SendMail.js'

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const router = Router();

import { isAuthenticated } from "./middleware/auth.js";

router.post('/curriculum', isAuthenticated, async (req, res) => {
  const lastID = await curriculo.setCurriculo(req.body, req.userId)
  
  res.send({"id": `${lastID}`});
});

router.get('/curriculum', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/curriculum-layout.html'));
});

router.get('/curriculum-infos', (req, res) => {

  curriculo.readAll().then(result => {
    res.send(result)

 });
})

router.get('/curriculum-info/id/:id', isAuthenticated, async (req, res) => {
  const id = parseInt((req.params.id));
  const response = await curriculo.getCurriculo(id)

 res.json(response);
});

router.get('/pdf', (req, res) => {
  doc.text("Hello world!", 10, 10);
  doc.textWithLink("aaaaaaaaa");
  doc.save("a4.pdf");

  res.send(doc);
});

router.post('/create-user', async (req, res) => {
  const newUser = await user.create(req.body);

  await SendMail.createNewUser(req.body.login);

  res.send(newUser);
});

router.get('/usuarios-infos', isAuthenticated, async (req, res) => {

  await user.readAll().then(result => {
    res.send(result)
 });
})

router.get('/usuario-info/id/:id', isAuthenticated, async (req, res) => {
  const id = parseInt((req.params.id));
  const response = await user.readById(id)

 res.json(response);
});

router.post('/auth-user', async (req, res) => {
	try {
		const { login, senha } = req.body;
	
	  const token = await user.auth(login, senha);
	
	  res.json(token);
	} catch(error) {
		res.status(401).json({ error: 'User not found' });
	}})

  router.post('/send-curriculum', async (req, res) => {
    try {
      const {to, htmlContent} = req.body
      await SendMail.sendNewCurriculum(to, htmlContent);
    } catch (error) {
      res.status(401).json({ error: 'Error in send email' });
    }
  })

export default router;

