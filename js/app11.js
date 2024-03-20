// Determinar si una palabra empieza con mayúscula o no.

let letra = prompt('Ingrese la palabra:');

if(/^[A-Z]/.test(letra[0])){
    console.log(`La palabra ${letra} empienza con mayuscula`);
}else{
    console.log(`La palabra ${letra} no empienza con mayuscula`);
}