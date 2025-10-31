import readlineSync from 'readline-sync';   
let nome = readlineSync.question("Nome do colaborador: ");
let codigoCargo = readlineSync.questionInt("Cargo: ");
let salario = readlineSync.questionFloat("Salário: ");  

let novoSalario;
let cargo;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        novoSalario = salario + (0.10 * salario);
        break;
    case 2:
        cargo = "Vendedor";
        novoSalario = salario + (0.07 * salario);
        break;
    case 3:
        cargo = "Supervisor";
        novoSalario = salario + (0.09 * salario);
        break;
    case 4:
        cargo = "Motorista";
        novoSalario = salario + (0.06 * salario);
        break;
    case 5:
        cargo = "Estoquista";
        novoSalario = salario + (0.05 * salario);
        break;
    case 6:
        cargo = "Técnico de TI";
        novoSalario = salario + (0.08 * salario);
        break;
    default:
        console.log("Código de cargo inválido.");
        break;
}

console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
