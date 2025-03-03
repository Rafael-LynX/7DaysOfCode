/* Desafio 7 
Desafio de fazer uma calculadora e uma operação em cada função
*/

function calculadora() {
    while (true) {
    let operacao = prompt('Qual operação você deseja fazer?\n' +
        '[1] Soma\n' +
        '[2] Subtração\n' +
        '[3] Multiplicação\n' +
        '[4] Divisão\n' +
        '[5] Sair\n');

    switch (operacao) {
        case '1':
            soma();
            break;
        case '2':
            subtracao();
            break;
        case '3':
            multiplicacao();
            break;
        case '4':
            divisao();
            break;
        case '5':
            alert('Você escolheu sair da calculadora!');
            break;
        default:
            alert('Operação inválida!');
            break;
        }
    if (operacao === '5') {
        break;
        }
    }
}

function soma() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = num1 + num2;
    alert('O resultado da soma é: ' + resultado);
}

function subtracao() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = num1 - num2;
    alert('O resultado da subtração é: ' + resultado);
}

function multiplicacao() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = num1 * num2;
    alert('O resultado da multiplicação é: ' + resultado);
}

function divisao() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = num1 / num2;
    alert('O resultado da divisão é: ' + resultado);
}

function main() {
    calculadora();
}

main();