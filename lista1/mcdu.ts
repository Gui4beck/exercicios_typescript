import teclado from "npm:readline-sync";

let n: number = 0,
    m: number = 0,
    c: number = 0,
    d: number = 0,
    u: number = 0;

console.log("Digite o valor de n:")
n = teclado.questionInt()

if(n <= 0 || n > 9999){
    console.log("Número inválido")
}else{

m = Math.trunc(n/1000)
n = n - (m * 1000)
c = Math.trunc(n/100)
n = n - (c * 100)
d = Math.trunc(n/10)
u = n - (d * 10)

console.log(m)
console.log(c)
console.log(d)
console.log(u)
}