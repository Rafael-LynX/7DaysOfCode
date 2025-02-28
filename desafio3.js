/* Desafio 3 */

listaTecnologias = ['Node.js', 'Python', 'Ruby'];

// função para perguntar o nome e a área de programação
function descrobrindoArea() {
    let nome = prompt('Qual é seu nome: ');
    let areaEscolhida = prompt(`Olá ${nome}, você quer seguir qual área de programação Frontend ou Backend? `);
    return {nome, areaEscolhida}; 
}

// função para escolher a área de programação	
function escolhendoArea(nome, areaEscolhida) {
    areaEscolhida = areaEscolhida.toLowerCase();
    if (areaEscolhida === 'frontend') {
        let aprender = prompt(`${nome} você quer aprender React ou Vue?`).toLowerCase();
            if (aprender === 'react') {
                alert(`Muito bem ${nome}, você escolheu React!`);
            } else if (aprender === 'vue') {
                alert(`Muito bem ${nome}, você escolheu Vue!`);
            } else {
                alert(`Opção inválida!`);
                return;
            }
    } else if (areaEscolhida === 'backend') {
        let aprender = prompt(`${nome} você quer aprender C# ou Java?`).toLowerCase();
            if (aprender === 'c#') {
                alert(`Muito bem ${nome}, você escolheu C#!`);
            } else if (aprender === 'java') {
                alert(`Muito bem ${nome}, você escolheu Java!`);
            } else {
                alert(`Opção inválida!`);
                return;
            }
    } else {
        alert(`Opção inválida!`);
        return;
    }

}
function continuarSeDesenvolvendo(nome, areaEscolhida) {
    let pergunta = prompt(`Você ${nome} quer continuar se especializando na área [${areaEscolhida}]?
ou se desenvolver como Fullstack? Responda com sim ou não.`).toLowerCase();

        if (pergunta === 'sim') {
            alert(`Muito bem ${nome}, continue se especializando na área de [${areaEscolhida}]!`);
        } else if (pergunta === 'não') {
            alert(`Muito bem ${nome}, você escolheu se desenvolver como Fullstack!`);
        } else {
            alert(`Opção inválida!`);
        }
}

while (true) {

    let dados = descrobrindoArea(); // Obtém os dados do usuário
    escolhendoArea(dados.nome, dados.areaEscolhida); // Passa os valores para a segunda função
    continuarSeDesenvolvendo(dados.nome, dados.areaEscolhida); // Passa os valores para a terceira função
    

    let tecnologias = prompt(`Você quer aprender ou conhecer mais alguma tecnologia? Responda com sim ou não.`).toLowerCase();
        if (tecnologias === 'sim') {
            alert(`Tecnologias disponíveis:\n\n${listaTecnologias.join('\n')}`);
            let tecnologia = prompt('Qual tecnologia você quer aprender?').toLowerCase();
            if (tecnologia === 'node.js' || tecnologia === 'python' || tecnologia === 'ruby') {
                alert(`Muito bem, você escolheu aprender ${tecnologia}!`);
                if (tecnologia === 'node.js') {
                    alert(`Node.js é uma tecnologia muito utilizada no desenvolvimento de aplicações web!`);
                }
                else if (tecnologia === 'python') {
                    alert(`Python é uma linguagem de programação muito utilizada para backend!`);
                }
                else if (tecnologia === 'ruby') {
                    alert(`Ruby é uma linguagem de programação muito utilizada no desenvolvimento de aplicações web!`);
                }
            } else {
                alert(`Tecnologia não disponível!`);
            }
            let continuar = prompt(`Você quer aprender mais alguma tecnologia? Responda com sim ou não.`).toLowerCase();
                if (continuar === 'sim') {
                continue;
                } else if (continuar === 'não') {
                alert(`Muito bem, você escolheu não aprender mais tecnologias!`);
                break;
                } else {
                alert(`Opção inválida!`);
                }

        } else if (tecnologias === 'não') {
            alert(`Muito bem ${nome}, você escolheu não aprender mais tecnologias!`);
            break;
        } else {
            alert(`Opção inválida!`);
            break;
        }

        }

