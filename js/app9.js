// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.
let letra = prompt('Ingrese la palabra: ');
if(!isNaN(letra[0])){
    console.log(`La palabra ${letra} tiene un numero inicial`);
}else{
    console.log(`La palabra ${letra} tiene una letra inicial`);
}