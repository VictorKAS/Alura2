const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function VerificaListaVazia(listaDeCompras) {
    const itemDaLista = listaDeCompras.querySelectorAll("li");
    // Verifica se a lista está vazia
    
    if (itemDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default VerificaListaVazia;