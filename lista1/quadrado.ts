import teclado from "npm:readline-sync";

let n: number = 0,
    q: number = 0;

console.log("Digite o valor de n:");
n = teclado.questionInt();

q = n * n 

console.log("O quadrado de " + n + " é: " + q)