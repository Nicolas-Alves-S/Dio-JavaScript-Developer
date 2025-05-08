//3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
//Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
//O salário salário a ser transferido é calculado da seguinte maneira: 
//   
//   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios
//
//Para calcular o percentual de imposto segue as aliquotas:
//
//    De R$ 0.00 a R$ 1100.00 = 5.00%
//    De R$ 1100.01 a	R$ 2500.00 = 10.00%
//    Maior que 2500.00 = 15.00%
//
//    Exemplo:
//        Entrada:
//            2000
//            250
//
//        Saída:
//            2050.00

const {gets, print} = require('./funcoes-auxiliares-ex3.js');

const valorSalario = gets();
const valorBeneficil = gets();

function calculoPorcentagem(valor, percentual){
    return valor * (percentual / 100);
}
function pegarAliquota(salarial){
    if (salarial >= 0 && salarial <= 1100) {
        return 5;
    } else if (salarial >= 1100 && salarial <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotasImposto = pegarAliquota(valorSalario);
const valorImposto = calculoPorcentagem(valorSalario, aliquotasImposto);

const salarioTransferido = valorSalario - valorImposto + valorBeneficil;
print(salarioTransferido.toFixed(2));