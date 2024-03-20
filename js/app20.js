// La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:

let a = parseFloat(prompt('Ingrese el valor a:'));
let b = parseFloat(prompt('Ingrese el valor b:'));

function multiply(a, b){
let multiplicacion = a * b;
return multiplicacion;
}
console.log(multiply(a,b));