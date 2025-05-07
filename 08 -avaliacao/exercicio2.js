//2) Faça um programa que receba N quantidade de números e seus respectivos valores.
//Imprima o maior número par e o menor número impar.
//
//    Exemplo:
//        Entrada:
//            5
//            3
//            4
//            1
//            10
//            8
//
//        Saída:
//            Maior número par: 10
//            Menor número impar: 1
const {gets, print} = require('./funcoes-auxiliares-ex2.js');

const quantidadeNumeros = gets();
let maiorPar = 0;
let menorImpar = 0;
let numeros = [];
let i = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    numeros.push(gets());
}
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        if (numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar === 0 || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

    print(`Maior número par: ${maiorPar}`);
    print(`Menor número impar: ${menorImpar}`);
