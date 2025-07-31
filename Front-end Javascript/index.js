import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const botaoAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    
    VerificaListaVazia();
}) 

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function VerificaListaVazia() {
    const itemDaLista = listaDeCompras.querySelectorAll("li");
    // Verifica se a lista está vazia
    
    if (itemDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

VerificaListaVazia();