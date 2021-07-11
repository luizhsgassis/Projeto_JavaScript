const livros = require("./database");

const readline = require("readline-sync");

// Pegar o input
const entradaInicial = readline.question("Deseja buscar um livro? S/N ");

// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:");
    console.log("Produtividade", "/Historia brasileira", "/Americas", "/Tecnologia", "/Estilo de vida", "/Tecnologia");

    const entradaCategoria = readline.question("Qual categoria voce quer pesquisar? ");

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
}

// Se não, mostra todos od livros em ordem crescente pela quantidade de páginas
else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log("Essas são todas os livros disponíveis: ");
    console.table(livrosOrdenados);
}