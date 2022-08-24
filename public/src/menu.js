import Auth from './auth.js';

window.signout = Auth.signout;

function startIndex() {
	console.log("É isso")
	Auth.isAuthenticated()
	verifyAuth()	
}

function verifyAuth() {
    const sign = document.getElementById('navbarSupportedContent')
    let response = `<a class="nav-link active" aria-current="page" href="/index.html">Home</a>`
    if((Auth.getToken())) {
			response +=  `<a class="nav-link" aria-current="page" href="#">Meus cúrriculos (nao funciona ainda)</a>
                <p class="saudacao" class="navbar-brand" style="
    margin-bottom: 0;
padding: 16px; color: white;">Olá!</p>
                <span class="material-symbols-outlined logout navbar-brand"
                  onclick="signout()" id="logout" alt="Sair">
  logout
  </span>`
    } else {
			response = `<a class="nav-link" aria-current="page" href="/index.html">Home</a>
      <a class="nav-link active"  href="/signinup.html">Cadastrar/Entrar</a>`
			// window.location.href = '/signinup.html'
    }

		sign.innerHTML = response;
}

export default { startIndex, verifyAuth }; //logout
