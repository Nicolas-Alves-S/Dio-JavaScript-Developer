// 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
// Imprima o maior e o menor número deste conjunto.

const entradas = [4, 100, 150, 90, 200];
let i = 0;
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
