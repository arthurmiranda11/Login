



function Login() {    
    var done = 0;
    var usuario = document.getElementsByName('nome_login')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    seha = senha.toLowerCase();
    console.log(usuario);
    console.log(senha);
  
    if (usuario == "arthur" && senha == "1234") {
      alert("Arthur, Infelizmente nossa pagina ainda não está completa, mas o senhor poderá ter uma prévia dos indicadores no link que foi encaminha pro seu e-mail:");
      done = 1;
    }
    if (done == 0) {
      alert("Dados incorretos, tente novamente, ou faça seu cadastro");  
    }
  }