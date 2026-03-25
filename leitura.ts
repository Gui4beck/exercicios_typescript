import teclado from "npm:readline-sync";

let pagAtual: number = 0,
     pagTotal: number = 0,
     concluido: number = 0;

console.log("Digite o número da página atual:");
pagAtual = teclado.questionFloat();

console.log("Digite o número de páginas do livro:");
pagTotal = teclado.questionFloat();

concluido = (pagAtual / pagTotal) * 100

console.log("O total de páginas lidas é de:" + concluido + "%.");