import readlineSync from 'readline-sync';


let nome = readlineSync.question("Digite o Nome do doador: ");
let idade = readlineSync.questionInt("Digite a Idade do doador: ");
let primeiraDoacao = readlineSync.question("Primeira doação de sangue? (true/false): ").toLowerCase();


if (idade >= 18 && idade <= 69) {
  if (idade >= 60 && idade <= 69) {
    if (primeiraDoacao === 'false') {
        console.log(`${nome} está apto para doar sangue!`);
    } else {
        console.log(`${nome} não está apto para doar sangue!`);
    }
  } else {
    console.log(`${nome} está apto para doar sangue!`);
  }
} else {
  console.log(`${nome} não está apto para doar sangue!`);
}