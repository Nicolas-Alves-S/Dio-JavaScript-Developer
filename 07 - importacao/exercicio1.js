

const numero = 5; // Número fixo para a tabuada
let i = 0;

function gets() {
    const ntaboada = numero;
    i++;
    return ntaboada;
}
function print(texto) {
    console.log(texto);
}
module.exports = { gets, print };