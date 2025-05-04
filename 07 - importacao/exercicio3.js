// exercicio3.js
const entrada = [5, 1, 3, 9, 10, 12]; // Primeiro número é a quantidade de entradas
let i = 0;

function gets() {
    return entrada[i++]; // Retorna um item da entrada por vez
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
