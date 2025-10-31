console.log("Bem vindo à atividade 3"); // Início
// Declaração das variáveis
let SalárioBruto = 2000.00;
let AdicionalNoturno = 500.00;
let HorasExtras = 100.00;
let Descontos = 200.00;
// Exibição dos valores iniciais
console.log(`Salário Bruto: R$ ${SalárioBruto}`);
console.log(`Adicional Noturno: R$ ${AdicionalNoturno}`);
console.log(`Horas Extras: R$ ${HorasExtras}`);
console.log(`Descontos: R$ ${Descontos}`);
// Cálculo do Salário Líquido
let SalárioLiquido = SalárioBruto + AdicionalNoturno + (HorasExtras * 5) - Descontos;
// Exibição do Salário Líquido
console.log(`O Salário Líquido é: R$ ${SalárioLiquido.toFixed(2)}`); // calcular e ler o salário líquido
console.log("Atividade concluída, obrigado!"); // Fim   
