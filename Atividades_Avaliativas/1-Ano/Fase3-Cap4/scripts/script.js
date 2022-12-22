
const primero_numero = document.querySelector("#primeiro_numero");
const segundo_numero = document.querySelector("#segundo_numero");
const errorNodes = document.querySelectorAll(".error");
const resultado = document.querySelector("#resultado");

function limparMensagens(){
    errorNodes[0].innerText = "";
    errorNodes[1].innerText = "";
    resultado.innerText = "";
    primero_numero.value = "";
    segundo_numero.value = "";

}

function validarCampos(){

    if(!primero_numero.value && !segundo_numero.value ){
        errorNodes[0].innerText = "Campo não pode ser vazio";
        errorNodes[1].innerText = "Campo não pode ser vazio";
        return false;
    }
    
    else if(!primero_numero.value){
        errorNodes[0].innerText = "Campo não pode ser vazio";
        errorNodes[1].innerText = "";

        return false;
    }
    
    else if(!segundo_numero.value){
        errorNodes[0].innerText = "";
        errorNodes[1].innerText = "Campo não pode ser vazio";
        return false;
    }
    
    else{
        errorNodes[0].innerText = "";
        errorNodes[1].innerText = "";
        return true;
    }

}

function somar(){
    if(validarCampos() == true){
        var n1 = parseInt(primero_numero.value);
        var n2 = parseInt(segundo_numero.value);
        var soma = n1 + n2;
        resultado.innerText = "O resultado é: " + soma;
    }

}

function subtrair(){
    if(validarCampos() == true){
        var n1 = parseInt(primero_numero.value);
        var n2 = parseInt(segundo_numero.value);
        var subtrair = n1 - n2;
        resultado.innerText = "O resultado é: " + subtrair;
    }
}

function dividir(){
    if(validarCampos() == true){
        var n1 = parseInt(primero_numero.value);
        var n2 = parseInt(segundo_numero.value);
        var dividir = n1 / n2;
        resultado.innerText = "O resultado é: " + dividir;
    }
}

function multiplicar(){
        if(validarCampos() == true){
        var n1 = parseInt(primero_numero.value);
        var n2 = parseInt(segundo_numero.value);
        var multiplicar = n1 * n2;
        resultado.innerText = "O resultado é: " + multiplicar;
    }
}
