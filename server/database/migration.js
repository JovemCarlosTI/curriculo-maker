import Database from './database.js'

async function up() {
  const db = await Database.connect();

    const createCurriculo = `
        CREATE TABLE curriculo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(50) NOT NULL,
            idade INT,
            tel VARCHAR(15) NOT NULL,
            email VARCHAR(50) NOT NULL,
            linkedin VARCHAR(15),
            github VARCHAR(15)
    )`;

//     const createEndereco = `
//         CREATE TABLE endereco (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             pais VARCHAR(50) NOT NULL,
//             estado VARCHAR(50) NOT NULL,
//             cidade VARCHAR(50) NOT NULL
//         )`;

//     const createUsuario = `
//         CREATE TABLE usuario (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             login VARCHAR(25) NOT NULL,
//             senha VARCHAR(25) NOT NULL
//         )`;

//     const createUsuario = `
//         CREATE TABLE usuario (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             login VARCHAR(25) NOT NULL,
//             senha VARCHAR(25) NOT NULL
//         )`;
    
//     const createHabilidades = `
//         CREATE TABLE habilidades (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             nome VARCHAR(50) NOT NULL,
//             nivel VARCHAR(20) NOT NULL
//         )`;

//     const createAtivComp = `
//         CREATE TABLE ativ_comp (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             nome VARCHAR(50) NOT NULL,
//             duracao VARCHAR(50) NOT NULL,
//             tipo VARCHAR(25) NOT NULL,
//             atual INTEGER NOT NULL
//         )`;

//     const createAtivComp = `
//         CREATE TABLE ativ_comp (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             nome VARCHAR(50) NOT NULL,
//             duracao VARCHAR(50) NOT NULL,
//             tipo VARCHAR(25) NOT NULL,
//             atual INTEGER NOT NULL
//         )`;

//   const sql = `

    

//     CREATE TABLE empresa (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL,
//         cargo VARCHAR(50) NOT NULL,
//         periodo VARCHAR(50) NOT NULL,
//         descr VARCHAR(150) NOT NULL
//     );

//     CREATE TABLE cur_extras (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL,
//         duracao VARCHAR(50) NOT NULL,
//         tipo VARCHAR(25) NOT NULL
//     );

//     CREATE TABLE formacao (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL,
//         periodo VARCHAR(50) NOT NULL,
//         duracao VARCHAR(50) NOT NULL
//     );

//     CREATE TABLE instituicao (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL
//     );

//     CREATE TABLE area-atu (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL
//     );

//     CREATE TABLE especializacao (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome VARCHAR(50) NOT NULL
//     )
//   `;

  db.run(createCurriculo);
}

export default { up };