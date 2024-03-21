// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

function obtenerNumerosPares(numeros) {
    return numeros.reduce((acumulador, numero) => {
      if (numero % 2 === 0) {
        acumulador.push(numero);
      }
      return acumulador;
    }, []);
}

let ingresarNumeros = prompt('Ingrese los valores para el arreglo separados por comas: ');
let numeros = ingresarNumeros.split(',').map(Number);

let numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares);
