// Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.
let num1 = parseFloat(prompt('Ingrese el primer numero:'));
let num2 = parseFloat(prompt('Ingrese el segundo numero:'));

if (num1 > num2) {
    console.log(`El numero mayor es ${num1}`);
} else{
    console.log(`El numero mayor es ${num2}`);
}