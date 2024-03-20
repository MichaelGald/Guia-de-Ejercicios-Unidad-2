// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.
let numero = prompt('Ingrese el valor:');

function numeroSiEntero(numero) {
   if(Number.isInteger(parseFloat(numero))){
        console.log(`El valor ingresado ${numero} es numero entero`);
   }else{
        console.log(`EL valor ingresado ${numero} no es numero entero`);
   }
}

console.log(numeroSiEntero(numero));