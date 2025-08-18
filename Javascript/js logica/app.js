// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Digite um numero entre 0 e 10";
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Digite um numero entre 0 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagem);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');      
    } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }   tentativas++;  
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 11);
}