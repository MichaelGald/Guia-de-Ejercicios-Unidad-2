// Escriba un programa que pida un número y diga si es divisible por 2.

let numero = parseInt(prompt('Ingrese el numero:'));

if (numero % 2){
    console.log(`EL numero ${numero} no es divisible por 2`);
} else {
    console.log(`El numero ${numero} es divisiblre por 2`);
}