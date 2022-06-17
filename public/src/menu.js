function verifyAuth() {
    const sign = document.getElementById('sign')
    
    if(window.sessionStorage.getItem('user_id')) {
      sign.innerHTML = `
                <p class="saudacao">Olá!</p>
                <span class="material-symbols-outlined logout"
                  onclick="logout()">
  logout
  </span>`
    } else {
      sign.innerHTML = `<a class="nav-link"  href="/signinup.html">Cadastrar/Entrar</a>`
    }           
  }
