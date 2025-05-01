//3) Faça um programa que receba a quantidade de números e seus respectivos valores.
//Imprima todos os números pares.
const { gets, print } = require('./exercicio3.js');

const numero = []; // Array para armazenar os números
const numeros = Number(gets()); // Número fixo para a tabuada
numeros = gets(); // Número de entradas
numero.push(Number(numeros)); // Adiciona ao array convertendo para número

print(numero); // Imprime o array de números