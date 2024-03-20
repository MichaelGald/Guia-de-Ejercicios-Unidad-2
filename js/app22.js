/*
Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/

const array = [1,2,3,4,5,6];
i = 0;
console.log('__________a__________');
while(i < array.length){
    console.log(array[i]);
    i++;
}
console.log('__________b__________');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
console.log('__________c__________');
array.forEach((numero) => {
    console.log(numero)});

 console.log('__________d__________');
 array.forEach((numero) => {
     console.log(numero + 1)});
    
 console.log('__________e__________');
 const otroArray = array.map(numero => numero + 1);
 console.log(otroArray);
 console.log('__________f__________');
 let valor = 0;
 for (let i = 0; i < array.length; i++) {
    valor += array[i];
 }
 let promedio = valor / array.length;
 console.log(promedio);