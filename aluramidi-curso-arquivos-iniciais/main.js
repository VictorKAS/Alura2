function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador = contador + 1;
    console.log(contador);
    if (contador === listaDeTeclas.length) {
        console.log('Chegou ao final da lista de teclas');
    }
    
}



// document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* * Adiciona um evento de clique ao botão 
let botao = document.querySelector('button');
botao.addEventListener('click', function() {
    alert('Fui clicado!');
});  */