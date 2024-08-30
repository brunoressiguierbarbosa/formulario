function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var menssagemErro = document.getElementById("menssagemErro");

    if (nome === "") {
        menssagemErro.innerHTML = "Por favor, preencha o campo de mome.";

        return false;

    }

    return true;

}