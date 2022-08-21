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
			response +=  `
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

// não tava funcionando entao eu tirei e mudei diretamente pro signout
// function logout() {
// 	  Auth.signout()
// }

// function userIsAuth() {
// 	if (window.sessionStorage.getItem('user_id') && typeof window.sessionStorage.getItem('user_id') != 'undefined') return true;
// 	else return false;
// }

export default { startIndex, verifyAuth }; //logout
