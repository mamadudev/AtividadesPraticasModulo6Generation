import readlineSync from 'readline-sync';
let codigo = readlineSync.questionInt("Digite o código do produto (1-6): ");
let quantidade = readlineSync.questionInt("Digite a quantidade comprada: ");
let produto = "";
let precoUnitario ;
let valorTotal ;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        produto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        produto = "Suco de Laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log("Código de produto inválido.");
        break;
}

valorTotal = quantidade * precoUnitario;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
