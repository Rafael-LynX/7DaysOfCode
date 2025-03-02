/* Desafio 6 
Desafio é utilizar o código de desafio 5 e criar a função de remover itens da lista de compras
*/

let listaCompras = [];
let doces = []
let frutas = []
let congelados = []
let laticinios = []

function adicionarCompras() {
    let adicionar = prompt(
        'Você deseja Adicionar ou não uma comida, ou até mesmo remover?\n' +
        '[1] Adicionar Comida\n' +
        '[2] Não Adicionar\n' 
        ).toLowerCase();

    // Adicionar comida na lista de compras    
    while (adicionar === '1') {
        let item = prompt('Qual comida você deseja adicionar?');
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

        adicionar = prompt('Você deseja adicionar mais algo na sua lista de compras?\n'
            + '[1] Adicionar Comida\n'
            + '[2] Não Adicionar\n'
            + '[3] Remover Comida\n'
            ).toLowerCase();
    }

    // Não adicionar e Lista de compras por categorias
    if (adicionar === '2') {
        alert('Você escolheu não adicionar nada na sua lista de compras!');
        alert('Lista de Compras por Categorias:\n' +
            'Doces: ' + doces + '\n' +
            'Frutas: ' + frutas + '\n' +
            'Congelados: ' + congelados + '\n' +
            'Laticinios: ' + laticinios + '\n');
        alert('Lista de compras: ' + listaCompras.join(', ')      
         );
    } else if (adicionar === '3') { // Remover item da lista de compras
        let remover = prompt(
            'Qual comida você deseja remover?\n' + 
            'Lista de Compras: ' + listaCompras);

        if (remover === '' || remover === null) {
            alert('Item inválido! Por favor, insira um item válido.');
        }
        let index = listaCompras.indexOf(remover);
        if (index > -1) {
            listaCompras.splice(index, 1);
            alert(`O item ${remover} foi removido da sua lista de compras!`);
        } else {
            alert('Item não encontrado na lista de compras!');
        }
    } else {
        alert('Opção inválida!');
    }

}

adicionarCompras();