// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.
function ValorAbsoluto(array){
    let menor = Math.min(...array);
    if (menor < 0) {
        return Math.abs(menor);
    } else {
        return menor;
    }
}

const array  = [2,-4,5,-9,-1,-100];

let numeroEnResumen = ValorAbsoluto(array);
console.log(numeroEnResumen);