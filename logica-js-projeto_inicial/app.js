alert('Boas vindas ao jogo secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 0 e 10:');

if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou! O número secreto era ${numeroSecreto}.`);
}else {
    alert('Que pena, você errou. O número secreto era ' + numeroSecreto + '.');
}