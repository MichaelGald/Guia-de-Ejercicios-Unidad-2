// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

let angulo1 = parseFloat(prompt('Ingrese el primer angulo:'));
let angulo2 = parseFloat(prompt('Ingrese el segundo angulo:'));
let angulo3 = parseFloat(prompt('Ingrese el tercer angulo:'));
let sumas = angulo1 + angulo2 + angulo3;
if(sumas === 180){
    console.log('El triangulo es valido');
}else{
    console.log('El trinagulo no es valido');
}