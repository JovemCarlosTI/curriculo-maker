import Database from '../database/database.js';

async function create(tempUsuario) {
    const db = await Database.connect();
    
    const {login, senha} = tempUsuario;

    if (await verifyEmail(login)) {
      const usuarioSQL = `
        INSERT INTO
          usuario (login, senha)
        VALUES
          (?, ?)
        `;

      let {lastID} = await db.run(usuarioSQL, [login, senha]);
      
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

  if(user && user.login === login && user.senha === senha) {
    return user.id;
  } else return false;
}


export default {create, readAll, readById, auth};