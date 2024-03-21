// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.
function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
        return suma / array.length;
    }
}

let ingresarNumeros = prompt('Ingrese los numeros separados por comas: ');
let numeros = ingresarNumeros.split(',').map(numero => Number(numero.trim()));
const promedio = calcularPromedio(numeros);
console.log(promedio); 