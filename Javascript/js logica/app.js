// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Digite um numero entre 0 e 10";
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Digite um numero entre 0 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 11);
}