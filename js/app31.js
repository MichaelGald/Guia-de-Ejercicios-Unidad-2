// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

function cambioDeOrden(array) {
    let copiaArray = array.slice(); 
    let invertir = copiaArray.reverse();
    return invertir;
}

const array = [1,2,3,4,5];
let cambio = cambioDeOrden(array);

console.log(`Cambio de orden ${cambio}`);
console.log(`Original ${array}`);