let bt = document.querySelector('#bt-rec');
let email = document.querySelector('#login-email');

bt.addEventListener("click", enviar);

function enviar(){

    if(email.value == "" ){
    alert("Erro Campo Vazio!");
    }else{
        alert(" Sua nova senha \n será enviada para seu E-mail");
    }
}
