// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

let num1 = parseFloat(prompt('Ingrese el primer numero:'));
let num2 = parseFloat(prompt('Ingrese el segundo numero:'));
let num3 = parseFloat(prompt('Ingrese el tercero numero:'));

if (num1 > num2 && num1 > num3){
    console.log(`El numero ${num1} es mayor que ${num2} y ${num3}`);
} else if (num2 > num1 && num2 > num3){
    console.log(`El numero ${num2} es mayor que ${num1} y ${num3}`);
}else if (num3 > num1 && num3 > num2){
    console.log(`El numero ${num3} es mayor que ${num2} y ${num1}`);
}