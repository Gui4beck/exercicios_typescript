import teclado from "npm:readline-sync";

let a1: number = 0,
     a2: number = 0,
     a3: number = 0, 
     a4: number = 0, 
     media: number = 0; 

const p1 = 0.1,
          p2 = 0.2,
          p3 = 0.3,
          p4 = 0.4;

console.log("Digite a nota da avaliação 1:");
a1 = teclado.questionFloat();

console.log("Digite a nota da avaliação 2:");
a2 = teclado.questionFloat();

console.log("Digite a nota da avaliação 3:");
a3 = teclado.questionFloat();

console.log("Digite a nota da avaliação 4:");
a4 = teclado.questionFloat();

media = (a1*p1) + (a2*p2) + (a3*p3) + (a4*p4) 

console.log("A média ponderada é:");
console.log(media)
