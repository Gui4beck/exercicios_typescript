import teclado from "npm:readline-sync";

let salario: number = 0,
     reajuste: number = 0.125,
     novoSalario: number = 0;

console.log("Digite o valor do salário atual:");
salario = teclado.questionFloat();

novoSalario = salario + (salario * reajuste)

console.log("O salário reajustado será de: R$ " + novoSalario + ".");