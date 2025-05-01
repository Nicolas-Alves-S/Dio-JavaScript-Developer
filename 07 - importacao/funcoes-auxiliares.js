function gets(){
    return 10;
}
function print(texto){
    console.log(texto);
}

// module.exports = {gets: gets, print: print};daria para fazer assim
// mas como o nome da função é o mesmo do nome da propriedade, podemos fazer assim
module.exports = {gets,print };