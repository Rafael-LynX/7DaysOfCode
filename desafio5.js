/* Desafio 3 
Desafio para criar uma lista de compras, onde o usuário pode adicionar ou remover itens da lista
*/

let listaCompras = [];
let doces = []
let frutas = []
let congelados = []
let laticinios = []

function adicionarCompras() {
    let adicionar = prompt('Adicione algo na sua lista de compras? responda com sim ou não').toLowerCase();

    while (adicionar === 'sim') {
        let item = prompt('Qual item você deseja adicionar?');
        if (item === '' || item === null) {
            alert('Item inválido! Por favor, insira um item válido.');
            continue;
        }
        listaCompras.push(item);
        alert(`O item ${item} foi adicionado na sua lista de compras!`);
        let categoria = prompt(
            'Qual a categoria do item? Lista de Categorias:\n' +
            '1 - Doces\n' +
            '2 - Frutas\n' +
            '3 - Congelados\n' +
            '4 - Laticinios\n');

        if (categoria === '1') {
            doces.push(item);
        } else if (categoria === '2') {
            frutas.push(item);
        } else if (categoria === '3') {
            congelados.push(item);
        } else if (categoria === '4') {
            laticinios.push(item);
        } else {
            alert('Categoria inválida!');
        }

        adicionar = prompt('Você deseja adicionar mais algo na sua lista de compras? responda com sim ou não').toLowerCase();

    }

    if (adicionar === 'não') {
        alert('Você escolheu não adicionar nada na sua lista de compras!');
        alert('Lista de Compras por Categorias:\n' +
            'Doces: ' + doces + '\n' +
            'Frutas: ' + frutas + '\n' +
            'Congelados: ' + congelados + '\n' +
            'Laticinios: ' + laticinios + '\n');
        alert('Lista de compras: ' + listaCompras      
         );
    } else {
        alert('Opção inválida!');
    }

}

adicionarCompras();