import teclado from "npm:readline-sync";

let a: number = 0,
     b: number = 0,
     c: number = 0;

console.log("Digite o valor de a:");
a = teclado.questionInt();

console.log("Digite o valor de b:");
b = teclado.questionInt();

c = a

a = b

b = c

console.log(a);
console.log(b);
