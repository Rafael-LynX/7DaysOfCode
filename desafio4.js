/* Desafio 4 
Jogo de advinhação, o programa deve sortear um número entre 0 e 10 e o usuário deve tentar adivinhar
*/

let numeroLimites = 10;
let tentativas = 3;


function advinhemNumeroSecreto() {
    let palpite = parseInt(prompt('Digite um número entre 0 e 10: '), 10);

    if (palpite > 10 || palpite < 0 || isNaN(palpite)) {
        alert('Número inválido!');
    } else {
        console.log(palpite);
        return palpite;
    }   
}

function gerarNumeroSecreto() {
    numero = parseInt(Math.floor(Math.random() * numeroLimites));
    console.log(numero);
    return numero;  
}

function mensagemInicial() {
    alert('Bem vindo ao jogo de adivinhação!');
    alert('Você tem 3 tentativas para adivinhar o número secreto!');
    alert('O número secreto está entre 0 e 10!');
}


let numeroSorteado = gerarNumeroSecreto();
let numeroDigitado = advinhemNumeroSecreto();

function verificarPalpite() {
    console.log(`Número sorteado: ${numeroSorteado}, Palpite: ${numeroDigitado}`); 
    
    if (numeroDigitado === numeroSorteado) {
        alert('Parabéns! Você acertou o número secreto!');
    } else if (tentativas > 0) {
        tentativas--;
        alert(`Você errou! Você ainda tem ${tentativas} tentativas!`); 
        return advinhemNumeroSecreto();
    } else {
        alert('Suas tentativas acabaram! O número secreto era: ' + numeroSorteado);
    } 
}

function reiniciarJogo() {
    let reiniciar = prompt('Deseja reiniciar o jogo? Responda com sim ou não: ').toLowerCase();
    if (reiniciar === 'sim') {
        alert('Jogo reiniciado!');
    } else if (reiniciar === 'não') {
        alert('Jogo encerrado!');
    } else {
        alert('Opção inválida!');
    }
}



/* while (tentativas > 0) {
    verificarPalpite();
} */

while (true) {
    mensagemInicial();

    gerarNumeroSecreto(numeroSorteado);
    advinhemNumeroSecreto(numeroDigitado);
    verificarPalpite();

    reiniciarJogo();

}


