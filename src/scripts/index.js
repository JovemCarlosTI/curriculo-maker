let curriculo = {name};

function saveInfos() {
  document.getElementById('formulario').addEventListener(
    'submit', stopDefAction, false
  );

  curriculo.name = document.getElementById('name').value;

  // window.location.href = "http://127.0.0.1:5500/src/pages/curriculum-layout.html";

  document.body.innerHTML = `
<body onload="generateCurriculum()">
  <header>
      <h1 id="name">${curriculo.name}</h1>
  </header>
  <section>
  </section>
  <footer></footer>

  <script src="../scripts/index.js"></script>`

  // console.log(curriculo.name);

  window.print();

  // document.getElementById('name').innerText(name);
}

function generateCurriculum() {
  console.log(curriculo.name);

  document.getElementById('name').innerText = curriculo.name;
}

function stopDefAction(evt) {
  evt.preventDefault();
}