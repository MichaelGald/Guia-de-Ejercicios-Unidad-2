// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let array = [];

for (let i = 0; i < 20; i++) {
    let numeros = Math.floor(Math.random() *100 + 1);
    array.push(numeros);
}
console.log(array);