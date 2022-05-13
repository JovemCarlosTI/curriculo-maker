import Database from '../../server/database/database.js';

let curriculo = {
  name: '',
  idade: '',
  telefone: '',
  email: '',
  pais: '',
  estado: '',
  cidade: '',
  linkedin: '',
  github: '',
  habilidades: [{
      nome: '',
      nivel: ''
  }, {
      nome: '',
      nivel: ''
  }, {
      nome: '',
      nivel: ''
  }, {
      nome: '',
      nivel: ''
  }, {
      nome: '',
      nivel: ''
  }],
  objetivo_profissional: {
      area_atuacao: '',
      especializacao: ''
  },
  formacao_academica: {
      nivel_graduacao: '',
      nome_instituicao: '',
      periodo: '',
      duracao: ''
  },
  experiencia_profissional: {
      nome_empresa: '',
      cargo: '',
      periodo: '',
      descricao: ''
  },
  cursos: [{
          nome: '',
          duracao: '',
          tipo: ''
      }, {
          nome: '',
          duracao: '',
          tipo: ''
      }, {
          nome: '',
          duracao: '',
          tipo: ''
      }
  ],
  atividades_complementares: [{
          nome: '',
          duracao: '',
          tipo: '',
          atualmente: ''
      }, {
          nome: '',
          duracao: '',
          tipo: '',
          atualmente: ''
      }, {
          nome: '',
          duracao: '',
          tipo: '',
          atualmente: ''
      }
  ]
};

// Renderiza o currículo no html

async function getCurriculo(id) {
    const db = await Database.connect();

  const sql = `
    SELECT
      *
    FROM
      curriculo
    WHERE
    id = ?
  `;

  const curriculo = await db.get(sql, [id]);

  return curriculo;
}

async function readAll() {
    const db = await Database.connect();

    const sql = `
      SELECT
        *
      FROM
        curriculo
    `;
  
    const curriculo = await db.all(sql);
  
    return curriculo;
}

async function setCurriculo(tempCurriculo) {
    const db = await Database.connect();


    const {nome, idade, tel, email, linkedin, github} = tempCurriculo;

    const sql = `
      INSERT INTO
        curriculo (nome, idade, tel, email, linkedin, github)
      VALUES
        (?, ?, ?, ?, ?, ?)
    `;

  
    const {lastID} = await db.run(sql, [nome, idade, tel, email, linkedin, github]);
  
    return getCurriculo(lastID);
}

export default {getCurriculo, setCurriculo, readAll};