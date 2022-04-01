let curriculo = {name};

function makeCurriculum() {
  document.getElementById('formulario').addEventListener(
    'submit', stopDefAction, false
  );

  curriculo.name = document.getElementById('name').value;

  document.body.innerHTML = `
    <body onload="generateCurriculum()">
      <header>
          <h1 id="name">${curriculo.name}</h1>
      </header>
      <section>
      </section>
      <footer></footer>

      <script src="../scripts/index.js"></script>`

  window.print();

}

function stopDefAction(evt) {
  evt.preventDefault();
}