// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

let n = parseInt(prompt('Ingrese el numero n:'));
let i = 1;
while(i <= 12){
    console.log(`La multiplicacion es de ${n} X ${i} = ${ n * i}`);
    i++;
}