
import readlineSync from 'readline-sync';

let numero1 = readlineSync.questionFloat("Digite o primeiro numero: ");
let numero2 = readlineSync.questionFloat("Digite o segundo numero: ");
let operacao = readlineSync.questionInt("digite um numero:\n Operacao: (1-Soma, 2-Subtracao, 3-Multiplicacao, 4-Divisao): ");

switch (operacao) {
  case 1:
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case 2:
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case 3:
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
  case 4:
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    break;
  default:
    console.log("Operacao Invalida!");
}