const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    // Agora temos o arquivo e podemos fazer mais validações
    if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
        lert('Por favor, selecione uma imagem PNG ou JPEG.');
        return;
    }
    // Vamos limitar o tamanho a 2MB
    if (file.size > 2 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 2MB.');
        return;
    }
}); 

/* document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (file) {
        const reader = new FileReader(); // Criando uma instância do FileReader
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
            preview.style.display = 'block'; // Tornando a pré-visualização visível
        };
        reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
    }
}); */

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }

        leitor.onerror = () => {
            reject(`Erro ao ler o arquivo: ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    });
}

const imagemPrincipal = document.querySelector(".main-image");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];

    if (arquivo) {
        try {
            const ConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = ConteudoDoArquivo.url;
            nomeDaImagem.textContent = ConteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro ao ler o arquivo");
            
        }
    }
})

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

const tagsDisponiveis = [ "Front-end", "Back-end", "Full Stack", "JavaScript", "HTML", "CSS", "React", "Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Swift", "Kotlin"];

inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault(); // Evita o envio do formulário
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== ""  && tagsDisponiveis.includes(tagTexto)) { // Verifica se o campo não está vazio e se a tag é válida
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
            listaTags.appendChild(tagNova); // Adiciona a nova tag à lista
            inputTags.value = ""; // Limpa o campo de entrada
        } else {
            alert("Tag inválida ou não disponível. Por favor, escolha uma tag válida.");
        }
    }
})

listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagParaRemover = evento.target.parentElement;
        listaTags.removeChild(tagParaRemover);
    }
})

async function VerificarTagsDisponiveis(tagTexto) {
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000); // Simula uma verificação assíncrona com um atraso de 1 segundo
    })
}