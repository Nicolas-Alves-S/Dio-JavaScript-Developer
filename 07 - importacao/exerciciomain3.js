const { gets, print } = require('./exercicio3.js');

const numeroentrada = Number(gets());

for (let i = 0; i < numeroentrada; i++) {
    const numero = Number(gets());
    if (numero % 2 === 0) {
        print(numero);
    }
}