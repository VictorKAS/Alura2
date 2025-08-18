// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Digite um numero entre 0 e 10";
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Digite um numero entre 0 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');      
    } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }   tentativas++;  
        limparCampo();
}

function gerarNumeroAleatorio() {
    let numereEscolhido =  parseInt(Math.random() * 11);
    let quantidadeDeNumerosSorteados = listaDeNumeroSorteados.length;

    if  (quantidadeDeNumerosSorteados == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numereEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numereEscolhido);
        console.log(listaDeNumeroSorteados);
        return numereEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}