import teclado from "npm:readline-sync";

let qtdMl: number = 0,
    gota: number = 0.05,
    qtdGotas: number = 0;  // um comentário

console.log("Digite a quantidade de mililitros:");
qtdMl = teclado.questionInt();

qtdGotas = qtdMl / gota;

console.log("A quantidade de gotas é:");
console.log(qtdGotas);