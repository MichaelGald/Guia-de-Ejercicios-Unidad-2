// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.
let array = [];
let n = parseInt(prompt('Ingrese el numero n:'))

for (let i = 0; i < n; i++) {
    let numeros = Math.floor(Math.random() *100 + 1);
    array.push(numeros);
}
console.log(array);