let curriculo = {
  name,
  idade,
  telefone,
  email,
  pais,
  estado,
  cidade,
  linkedin,
  github,
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

document.getElementById('formulario').addEventListener(
  'submit', stopDefAction, false
);

function saveInfos() {
  // Dados Pessoais
  curriculo.name = document.getElementById('name').value;
  curriculo.idade = Number(document.getElementById('idade').value);
  curriculo.telefone = document.getElementById('telefone').value;
  curriculo.email = document.getElementById('email').value;

  curriculo.pais = document.getElementById('pais').value;
  curriculo.estado = document.getElementById('estado').value;
  curriculo.cidade = document.getElementById('cidade').value;

  curriculo.linkedin = document.getElementById('linkedin').value;
  curriculo.github = document.getElementById('github').value;

  // Habilidades
  getHabilidades();

  curriculo.objetivo_profissional.area_atuacao = document.getElementById('area').value;
  curriculo.objetivo_profissional.especializacao = document.getElementById('especi').value;

  curriculo.formacao_academica = {
      nivel_graduacao: document.getElementById('nivelgr').value,
      nome_instituicao: document.getElementById('nomeInstituicao').value,
      periodo: document.getElementById('periodo').value,
      duracao: document.getElementById('duracao').value
  };

  curriculo.experiencia_profissional = {
      nome_empresa: document.getElementById('nomeEmpresa').value,
      cargo: document.getElementById('cargo').value,
      periodo: document.getElementById('periodoEmpresa').value,
      descricao: document.getElementById('desEmpresa').value
  };
  
  getCursos();

  getAtividades();

  console.log(curriculo);

  let habilidadesToPrint = printHabilidades();
  let cursosToPrint = printCursos();
  let atividadesToPrint = printAtividades();

  console.log(cursosToPrint);
  console.log(atividadesToPrint);

  document.body.innerHTML = `<body class="">

  <main class="px-5">
      <section class="row gy-4 mt-3 justify-content-center grid " >
          <h2>Dados Pessoais</h2>
          <hr>
          <div class="mb-3 mx-3 rounded-3 border col-10  bg-light text-dark">
              <p class="text-muted ">Nome Completo</p>
              <h4>${curriculo.name}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-5  bg-light text-dark">
              <p class="text-muted ">Idade</p>
              <h4>${curriculo.idade}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Telefone</p>
              <h4>${curriculo.telefone}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-10 p-2 bg-light text-dark">
              <p class="text-muted ">E-mail</p>
              <h4>${curriculo.email}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-10 p-2 bg-light text-dark">
              <p class="text-muted ">Endereço</p>
              <h4>Endereço ${curriculo.pais}, ${curriculo.estado}, ${curriculo.cidade}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">LinkedIn</p>
              <h4>${curriculo.linkedin}</h4>
          </div>
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Github</p>
              <h4>github.io/${curriculo.github}</h4>
          </div>
          

          <h2>Habilidades</h2>
          <hr class="habilidades">

          ${habilidadesToPrint}                    
          
          <h2>Objetivo Profissional</h2>
          <hr>

          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Área de atuação</p>
              <h4>${curriculo.objetivo_profissional.area_atuacao}</h4>
          </div>            
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Especialização</p>
              <h4>${curriculo.objetivo_profissional.especializacao}</h4>
          </div>
          <h2>Formação Acadêmica</h2>
          <hr>
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Nível da Graduação</p>
              <h4>${curriculo.formacao_academica.nivel_graduacao}</h4>
          </div>            
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Nome da Instituição</p>
              <h4>${curriculo.formacao_academica.nome_instituicao}</h4>
          </div>
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Período</p>
              <h4>${curriculo.formacao_academica.periodo}</h4>
          </div>            
          
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">Duração</p>
              <h4>${curriculo.formacao_academica.duracao}</h4>
          </div>
      
      
      <h2>Experiência Profissional</h2>
      <hr>
      <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
          <p class="text-muted ">Nome da Empresa</p>
          <h4>${curriculo.experiencia_profissional.nome_empresa}</h4>
      </div>            
      
      <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
          <p class="text-muted ">Período na Empresa</p>
          <h4>${curriculo.experiencia_profissional.periodo}</h4>
      </div>
      <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
          <p class="text-muted ">Cargo</p>
          <h4>${curriculo.experiencia_profissional.cargo}</h4>
      </div>            
      
      <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
          <p class="text-muted ">Descrição</p>
          <p>${curriculo.experiencia_profissional.descricao}</p>
      </div>


      <h2>Cursos Extracurriculares</h2>
      <hr>
      ${cursosToPrint}
  
      <h2>Atividades Complementares</h2>
      <hr> 
      ${atividadesToPrint}
      
          
      </section>
      </main>
      </body>`

  window.print();
}

function getHabilidades() {
  for (let i = 0; i < curriculo.habilidades.length; i++) {
      let habilidade = document.getElementById('nome_habil' + (i + 1)).value;


      if (habilidade !== '') {
          curriculo.habilidades[i] = {
              nome: habilidade,
              nivel: document.getElementById('nivel_habil' + (i + 1)).value
          }
      }
  }
}

function printHabilidades() {
  let response = '';

  for (let i = 0; i < curriculo.habilidades.length; i++) {
      if (curriculo.habilidades[i].nome !== '' && curriculo.habilidades[i].nome !== undefined) {
          response += `
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted ">${curriculo.habilidades[i].nivel}</p>
              <h4>${curriculo.habilidades[i].nome}</h4>
          </div>`
      }
  }

  return response;
}

function getCursos() {
  for (let i = 0; i < curriculo.cursos.length; i++) {
      let curso = document.getElementById('nCurso' + (i + 1)).value;


      if (curso !== '') {
          curriculo.cursos[i] = {
              nome: curso,
              duracao: document.getElementById('dCurso' + (i + 1)).value,
              tipo: document.getElementById('tCurso' + (i + 1)).value
          }
      }
  }
}

function printCursos() {
  let response = '';

  for (let i = 0; i < curriculo.cursos.length; i++) {
      if (curriculo.cursos[i].nome !== '' && curriculo.cursos[i].nome !== undefined) {
          response += `
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
      <p class="text-muted">Nome do Curso</p>
      <h4>${curriculo.cursos[i].nome}</h4>

      <p class="text-muted">Duração do Curso</p>
      <h4>${curriculo.cursos[i].duracao}</h4>

      <p class="text-muted">Tipo do Curso</p>
      <h4>${curriculo.cursos[i].tipo}</h4>
  </div>`
      }
  }

  return response;
}

function getAtividades() {
  for (let i = 0; i < curriculo.atividades_complementares.length; i++) {
      let atividade = document.getElementById('nAtiv' + (i + 1)).value;


      if (atividade !== '') {
          curriculo.atividades_complementares[i] = {
              nome: atividade,
              duracao: document.getElementById('dAtiv' + (i + 1)).value,
              tipo: document.getElementById('tAtiv' + (i + 1)).value,
              atualmente: document.getElementById('atualmente' + (i + 1)).value
          }
          console.log(document.getElementById('atualmente' + (i + 1)).value)
      }
  }
}

function printAtividades() {
  let response = '';

  for (let i = 0; i < curriculo.atividades_complementares.length; i++) {
      let atualmente;

      if (curriculo.atividades_complementares[i].nome !== '' && curriculo.atividades_complementares[i].nome !== undefined) {
          response += `
          <div class="mb-3 mx-3 rounded-3 border col-5 p-2 bg-light text-dark">
              <p class="text-muted">Nome da Atividade</p>
              <h4>${curriculo.atividades_complementares[i].nome}</h4>

              <p class="text-muted">Duração da Atividade</p>
              <h4>${curriculo.atividades_complementares[i].duracao}</h4>

              <p class="text-muted">Tipo de Atividade</p>
              <h4>${curriculo.atividades_complementares[i].tipo}</h4>

              <p class="text-muted">Participando Atualmente?</p>
              <h4>${curriculo.atividades_complementares[i].atualmente}</h4>
          </div>`
      }
  }

  return response;
  }

function stopDefAction(evt) {
  evt.preventDefault();
}