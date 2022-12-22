function exibirPopup() {
    //alert("Digite o seu nome completo");
    var nomeCompleto=prompt("Digite o seu nome completo");
    var primeiroNome = nomeCompleto.split(' ');
    var agradecimento = primeiroNome[0] + ', muito obrigado. Volte sempre :)'
    alert(primeiroNome[0] + ", muito obrigado por acessar nosso site!");
    document.getElementById("agradecimento_texto").innerHTML= agradecimento;
}   