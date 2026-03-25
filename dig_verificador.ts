import teclado from "npm:readline-sync";

let ncc: number = 0,
    d1: number = 0,
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    soma: number = 0,
    rest: number = 0,
    dv: number = 0;

console.log("Digite o número da conta corrente: ")
ncc = teclado.questionInt()

d1 = Math.trunc(ncc/100000)
d2 = Math.trunc((ncc%100000)/10000)
d3 = Math.trunc((ncc%10000)/1000)
d4 = Math.trunc((ncc%1000)/100)
d5 = Math.trunc((ncc%100)/10)
d6 = Math.trunc(ncc%10)

d1 = d1 * 1
d2 = d2 * 2
d3 = d3 * 3
d4 = d4 * 4
d5 = d5 * 5
d6 = d6 * 6

soma = d1 + d2 + d3 + d4 + d5 + d6

rest = soma % 10

dv = 10 - rest 



console.log("O primeiro digito é: " + d1)
console.log("O segundo digito é: " + d2)
console.log("O terceiro digito é: " + d3)
console.log("O quarto digito é: " + d4)
console.log("O quinto digito é: " + d5)
console.log("O sexto digito é: " + d6)

console.log("A soma dos digitos é: " + soma)

console.log("O digito verificador é: " + dv)