//1) Faça um programa que receba a média de um aluno.
//Caso a média seja < 5 imprima "Reprovado"
//Caso a média seja >= 5 e < 7 imprima "Recuperação"
//Caso a média seja >= 7 imprima "Aprovado"
//
//    Exemplo:
//        Entrada:
//            5.5
//        Saída:
//        Recuperação

const entrada = [5.5];
let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor;
}
function print(texto){
    console.log(texto);
}
module.exports = {gets, print};