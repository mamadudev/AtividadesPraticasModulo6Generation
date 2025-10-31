
import readlineSync from 'readline-sync';

let A = readlineSync.questionInt("Digite o número A: ");
let B = readlineSync.questionInt("Digite o número B: ");
let C = readlineSync.questionInt("Digite o número C: ");

let soma = A + B;

if (soma > C) {
  console.log(`${A} + ${B} = ${soma} > ${C}`);
  console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
  console.log(`${A} + ${B} = ${soma} < ${C}`);
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log(`${A} + ${B} = ${soma} = ${C}`);
  console.log("A Soma de A + B é Igual a C");
}
