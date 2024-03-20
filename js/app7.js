// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en la consola.
let numero = parseInt(prompt('Ingrese el numero: '));

if(numero % 2){
    console.log(`El numero ${numero} es impar`);
}else{
    console.log(`El numero ${numero} es par`);
}