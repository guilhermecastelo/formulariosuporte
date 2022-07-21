function validaForm() {

    let frmContato = document.querySelector("#frmContato");

    let txtNome = document.querySelector("#txtNome");
    let txtTelefone = document.querySelector("#txtTelefone");
    let txtEmail = document.querySelector("#txtEmail");
    let txtDescricao = document.querySelector("#txtDescricao");
    let slcSistema = document.querySelector("#slcSistema");

    let spnNome = document.querySelector("#spnNome");
    let spnTelefone = document.querySelector("#spnTelefone");
    let spnEmail = document.querySelector("#spnEmail");
    let spnDescricao = document.querySelector("#spnDescricao");
    let spnSistema = document.querySelector("#spnSistema");

    let erros = 0;

    //Nome
    if (txtNome.value == "") {
        erros++;
        spnNome.innerHTML = "Informe o seu nome";
    } else {
        spnNome.innerHTML = "";
    }

    //Telefone
    if (txtTelefone.value == "") {
        erros++;
        spnTelefone.innerHTML = "Informe o seu telefone";
    } else {
        spnTelefone.innerHTML = "";
    }

    //E-mail
    if (txtEmail.value == "") {
        erros++;
        spnEmail.innerHTML = "Informe o seu e-mail";
    } else if (txtEmail.value.indexOf("@") == -1 || txtEmail.value.indexOf(".") == -1) {
        erros++;
        spnEmail.innerHTML = "Informe um e-mail válido (exemplo@email.com)";
    } else {
        spnEmail.innerHTML = "";
    }

    //Select sistema
    if (slcSistema.value == "Selecione uma opção") {
        erros++;
        spnSistema.innerHTML = "Selecione uma opção de sistema";
    } else {
        spnSistema.innerHTML = "";
    }

    //Descrição
    if(txtDescricao.value == ""){
        erros++;
        spnDescricao.innerHTML = "Descreva o motivo do suporte";
    }else{
        spnDescricao.innerHTML = "";
    }

    //Envio do formulário
    if(erros == 0){
        alert("Dados enviados :)\nNossa equipe retornará o contato em breve.");
        frmContato.submit();
    }else{
        alert("Foram identificados " + erros + " erro(s) no formulário :(\nVerifique os dados informados e tente enviar novamente.");
    }

}