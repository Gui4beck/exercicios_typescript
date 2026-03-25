import teclado from "npm:readline-sync";

let horasAula: number = 0,
     minHoraAula: number = 50,
     minTotais: number = 0,
     horasRelogio = 0; 
     

console.log("Digite a quantidade de aulas:");
horasAula = teclado.questionFloat();

minTotais = horasAula * minHoraAula

horasRelogio =  minTotais/60

console.log("A carga horária em horas-relógio é de:" + horasRelogio.toFixed(2) + "horas.");

				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				