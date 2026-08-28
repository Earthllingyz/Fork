let alunos = [];

let formAluno = document.getElementById("formAluno");
let campoNome = document.getElementById("nome");
let campoIdade = document.getElementById("idade");
let listaAlunos = document.getElementById("listaAlunos");
let mensagem = document.getElementById("mensagem");

function cadastrarAluno(event) {
    event.preventDefault();

    let nome = campoNome.value.trim();
    let idade = Number(campoIdade.value);

    if (nome === "") {
        mensagem.textContent = "Digite o nome do aluno.";
        return;
    }

    if (idade <= 0 || campoIdade.value === "") {
        mensagem.textContent = "Digite uma idade válida.";
        return;
    }

    let situacao;

    if (idade >= 18) {
        situacao = "Maior de idade";
    } else {
        situacao = "Menor de idade";
    }

    let aluno = {
        nome: nome,
        idade: idade,
        situacao: situacao
    };

    alunos.push(aluno);

    mensagem.textContent = "Aluno cadastrado com sucesso!";

    campoNome.value = "";
    campoIdade.value = "";

    mostrarAlunos();
}

function mostrarAlunos() {
    listaAlunos.innerHTML = "";

    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];

        let item = document.createElement("li");

        item.innerHTML = `
            <strong>${aluno.nome} - ${aluno.idade} anos</strong>
            <span class="status">${aluno.situacao}</span>
        `;

        listaAlunos.appendChild(item);
    }
}

formAluno.addEventListener("submit", cadastrarAluno);

console.log("Sistema de cadastro iniciado!");