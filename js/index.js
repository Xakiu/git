var nome = "Luis Henrique"
var cargo = "Desenvolvedor"

var nomeHtml = document.getElementById("nome-no-html")
var cargoHtml = document.getElementById("cargo-no-html")
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
nomeHtml.innerHTML = nome;
}

function logarNome() {
    console.log(nome);
}

function colocarCargoHtml(cargo) {
cargoHtml.innerHTML = cargo;
}

function clickNoProjetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("clicou no botão sobre!!")
    texto1.style.display = "block";
    texto2.style.display = "none";
}

logarNome();

colocarNomeNoHtml(nome);
colocarCargoHtml(cargo);
