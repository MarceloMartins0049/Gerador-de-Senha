function gerarSenha() {
    let tamanho = document.getElementById("tamanho").value;
    let incluirNumeros = document.getElementById("incluirNumeros").checked;
    let incluirEspeciais = document.getElementById("incluirEspeciais").checked;
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirEspeciais) caracteres += "!@#$%^&*()_+{}[]:;<>,.?/";

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("senhaGerada").value = senha;
}

function copiarSenha() {
    let campoSenha = document.getElementById("senhaGerada");
    navigator.clipboard.writeText(campoSenha.value).then(() => {
        alert("Senha copiada!");
    });
}
