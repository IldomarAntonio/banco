let usuario = {
    nome: "",
    email: "",
    saldo: 0
};

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    
    if (nome && email) {
        usuario.nome = nome;
        usuario.email = email;
        document.getElementById("userName").innerText = nome;
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("conta").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function depositar() {
    const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
    if (valorDeposito && valorDeposito > 0) {
        usuario.saldo += valorDeposito;
        atualizarSaldo();
    } else {
        alert("Por favor, insira um valor válido para depósito.");
    }
}

function fazerPix() {
    const pixEmail = document.getElementById("pixEmail").value;
    const valorPix = parseFloat(document.getElementById("valorPix").value);
    if (pixEmail && valorPix && valorPix > 0) {
        if (valorPix <= usuario.saldo) {
            usuario.saldo -= valorPix;
            atualizarSaldo();
            alert(`PIX de R$ ${valorPix.toFixed(2)} enviado para ${pixEmail}`);
        } else {
            alert("Saldo insuficiente.");
        }
    } else {
        alert("Por favor, preencha todos os campos com valores válidos.");
    }
}

function atualizarSaldo() {
    document.getElementById("saldo").innerText = usuario.saldo.toFixed(2);
}