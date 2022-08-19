import bcrypt from 'bcryptjs';

import Database from '../database/database.js';

const salt = Number(process.env.SALT);

async function create(tempUsuario) {
    const db = await Database.connect();

		console.log(tempUsuario, 'se aparecer isso funciona')
    
    const {login, senha} = tempUsuario;

		const hash = bcrypt.hashSync(senha, salt);

    if (await verifyEmail(login)) {
      const usuarioSQL = `
        INSERT INTO
          usuario (login, senha)
        VALUES
          (?, ?)
        `;

      let {lastID} = await db.run(usuarioSQL, [login, hash]);
      
      return lastID;
    } else return false;
}

async function verifyEmail(login) {
  const db = await Database.connect();

  const loginSQL = `
    SELECT
      login
    FROM
      usuario
    WHERE
      login = ?
  `

  const user = await db.get(loginSQL, [login]);

  if (user == undefined) return true;
  else false;
}

async function readAll() {
  const db = await Database.connect();

  const selectAllUsuarioSQL = `
    SELECT
      id, login
    FROM
      usuario
  `;

  return await db.all(selectAllUsuarioSQL);
}

async function readById(id) {
  const db = await Database.connect();

  const selectByIdUsuarioSQL = `
    SELECT
      *
    FROM
      usuario
    WHERE
     id = ?
  `;

  return (await db.get(selectByIdUsuarioSQL, [id]));
}

async function auth(login, senha) {
  const db = await Database.connect();
  
  const verifyAuthSQL = `
    SELECT
      *
    FROM
      usuario
    WHERE
      login = ?
  `

  const user = await db.get(verifyAuthSQL, [login]);

	const { id: id, senha: hash } = user;

	const match = await bcrypt.compareSync(senha, hash);


  if(user && user.login === login && match) {
      const token = jwt.sign(
        { id },
        process.env.SECRET,
        { expiresIn: 3600 } // 1h
      );

      res.json({ auth: true, token });
  } else throw new Error('User not found');
}


export default {create, readAll, readById, auth};