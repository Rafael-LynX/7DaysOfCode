/* Desafio 2 */

let nome = prompt('Qual é seu nome: ');
let idade = prompt('Qual é sua idade: ');
let linguagem = prompt('Qual linguagem de programação você está estudando: ');


if ((nome === '') || (idade === '') || (linguagem === '')) {
    alert(`Falto digitar algum campo`);
} else {
    alert(`Olá [${nome}], você tem [${idade}] anos e já está aprendendo [${linguagem}]!`);
}

let pergunta = prompt(`Você gosta de estudar [${linguagem}]? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (pergunta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} 
if (pergunta == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}

