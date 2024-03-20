// Escribir un programa que escriba en pantalla los divisores de un número dado.
let numero = parseInt(prompt('Ingrese el numero que quiere ver divisible: '));
console.log(`Los divisores ${numero} son:`);
for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
        console.log(`El numero divisible es ${i}`);
    }
}