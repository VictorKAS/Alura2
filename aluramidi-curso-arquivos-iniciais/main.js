function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// enquanto
//while (contador < listaDeTeclas.length) {
/*forma mais enxuta*/ for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }
}



// document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* * Adiciona um evento de clique ao botão 
let botao = document.querySelector('button');
botao.addEventListener('click', function() {
    alert('Fui clicado!');
});  */