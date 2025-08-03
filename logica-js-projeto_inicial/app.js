alert('Boas vindas ao jogo secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 0 e 100:');

   if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente!`);
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente!`);
        }

        tentativas++;
    }
}

let mensagemTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou! O número secreto era ${numeroSecreto} com ${tentativas} ${mensagemTentativas}.`);
/*
if (tentativas > 1) {
    alert(`Parabéns, você acertou! O número secreto era ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns, você acertou! O número secreto era ${numeroSecreto} com ${tentativas} tentativa.`);
} */
