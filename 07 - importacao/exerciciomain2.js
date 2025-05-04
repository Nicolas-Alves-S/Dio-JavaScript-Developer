// 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
// Imprima o maior e o menor número deste conjunto.

const { gets, print } = require('./exerciciofuncoes2.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numero = gets(); // Obtém o número
    numerosSorteados.push(Number(numero)); // Adiciona ao array convertendo para número
}

let maior = numerosSorteados[0];
let menor = numerosSorteados[0];

for (let i = 1; i < numerosSorteados.length; i++) {
    const numero = numerosSorteados[i];
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

print(`O maior número é: ${maior}`);
print(`O menor número é: ${menor}`);