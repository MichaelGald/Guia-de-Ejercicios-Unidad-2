// 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])

let palabra = prompt('Ingrese el string: ');
let array = palabra.split(',');
for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    array[i] = parseInt(array[i].trim());
  }
}
console.log(array);
