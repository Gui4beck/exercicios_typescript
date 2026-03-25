import teclado from "npm:readline-sync";

let preco: number = 0,
     desconto: number = 0.35,
     precoFinal: number = 0;

console.log("Digite o valor do produto:");
preco = teclado.questionFloat();

precoFinal = preco - (preco * desconto)

console.log("O preço final é: R$ " + precoFinal + ".");