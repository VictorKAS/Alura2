function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
    if (elemento /* != null*/ && /*AND*/ elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não é um áudio');
    }
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

    tecla.onkeydown = function(evento) {
        //console.log(evento.code);
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}



// document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* * Adiciona um evento de clique ao botão 
let botao = document.querySelector('button');
botao.addEventListener('click', function() {
    alert('Fui clicado!');
});  */