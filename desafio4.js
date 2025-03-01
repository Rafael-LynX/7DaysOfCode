/* Desafio 4 
Jogo de advinhação, o programa deve sortear um número entre 0 e 10 e o usuário deve tentar adivinhar
*/

let minimo = 0;
let maximo = 10;
let tentativas = 3;


function gerarNumeroSecreto() {
    let numero = parseInt(Math.floor(Math.random() * (maximo - minimo + 1) + minimo));
    console.log(numero);
    return numero; 
}

let numeroSecreto = gerarNumeroSecreto();


function verificarChute() {
    while (tentativas > 0) {
        let chute = parseInt(prompt('Digite um número entre 1 e 10: '));
        

        if (chute < minimo || chute > maximo || isNaN(chute)) {
            alert('Número inválido, tente novamente!');
            continue;
        } 

        if (chute === numeroSecreto) {
            alert('🎉 Parabéns, você acertou!');
            return; // Sai da função
        } else { 
            if (chute > numeroSecreto) { 
                alert('🔽 O número secreto é menor');
            } else { 
                alert('🔼 O número secreto é maior');
            } 

            tentativas--; 
            if (tentativas > 0) {
                alert(`Você errou, ainda tem ${tentativas} tentativas!`);
            } else {
                alert('Suas tentativas acabaram, o número secreto era: ' + numeroSecreto);           
            } 
        }
    }

    reiniciarJogo(); // Reiniica o jogo se quiser

}
        
// função para reiniciar o jogo
function reiniciarJogo(){
    let jogarNovamente = confirm('Deseja jogar novamente?');
    if (jogarNovamente) {
        numeroSecreto = gerarNumeroSecreto(); // gerar um novo número
        tentativas = 3; // Reseta as tentativas
        verificarChute(); // Inicia novamente o jogo
    } else {
        alert('Obrigado por jogar!');
    }
}

// inicia o jogo    
verificarChute();


