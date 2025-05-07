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

const entrada = [5, 3, 4, 1, 10, 8];
let i = 0;
function gets(){
    const numero = entrada[i];
    i++;
    return numero;
}
function print(texto){
    console.log(texto);
}
module.exports = {gets, print};