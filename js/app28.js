// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function palabrasQueEmpiezanConVocal(array) {
    return array.filter(palabra => /^[aeiou]/i.test(palabra));
}
let entradaUsuario = prompt('Ingrese las palabras separadas por comas:');
let array = entradaUsuario.split(',').map(palabra => palabra.trim()).filter(palabra => /^[aeiou]/i.test(palabra));
console.log(array);