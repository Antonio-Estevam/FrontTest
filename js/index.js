let bt = document.querySelector('.btn-login');
let email = document.querySelector('#login-email');
let senha = document.querySelector('#login-password');



bt.addEventListener("click", entrar);

function entrar(){
    console.log(email.value,senha.value); 

    if (email.value == "" || senha.value == ""){
        alert(" Erro  Campo Vazio!\n Digite admin para E-mail e Senha");

    } else if (email.value != "admin"){
        alert(" Erro E-mail Incorreto\n Digite admin para E-mail e Senha");

    } else if(senha.value != "admin"){
        alert(" Erro Senha Incorreto\n Digite admin para E-mail e Senha");        
    }else{
        window.location.href='home.html';
    }
}


