// Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.
let n = parseInt(prompt('Ingrese el numero n: '));
let i = 1;
while(i <= n){
    console.log(`Numero ${i}`);
    i+= 2;
}