import readline from 'readline-sync'; 

console.log("bem vindo ao atividade 1"); // Inicio

let salario ; // Declaração da variável salario
salario = readline.questionFloat("Digite o salário:");
console.log(`O salário digitado foi: ${salario.toFixed(2)}`); // ler o salario

let abono; // Declaração da variável abono
abono = readline.questionFloat("Digite o abono:");
console.log(`O abono digitado foi: ${abono.toFixed(2)}`); // ler o abono

let novoSalario; // Declaração da variável novoSalario
novoSalario = salario + abono;
console.log(`O novo salário é: ${novoSalario.toFixed(2)}`); // calcular e ler o novo salário

console.log("Atividade concluída, obrigado!"); // Fim
 
