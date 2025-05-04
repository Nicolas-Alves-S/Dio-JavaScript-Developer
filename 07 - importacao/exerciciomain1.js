const { gets, print } = require('./exerciciofuncoes1.js');

const numerotaboada = [];

numero = gets(); // Número de entradas
numerotaboada.push(Number(numero)); // Adiciona ao array convertendo para número
print(`Tabuada do ${numero}`); // Imprime a tabuada do número


for (let i = 1; i <= 10; i++) {
    const resultado = numerotaboada[0] * i; // Multiplica o número da tabuada pelo índice
    print(`${numerotaboada[0]} x ${i} = ${resultado}`); // Imprime o resultado da multiplicação
}   
