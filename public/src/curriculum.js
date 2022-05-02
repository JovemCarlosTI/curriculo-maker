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

function getCurriculo() {
    return curriculo;
}

function setCurriculo(tempCurriculo) {
    console.log(tempCurriculo)

    curriculo = tempCurriculo;
}

export default {getCurriculo, setCurriculo};