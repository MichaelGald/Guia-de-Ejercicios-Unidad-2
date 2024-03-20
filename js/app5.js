// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
// las vocales.
let frase = String(prompt('Ingrese la frase:'));
let contador = 0; 
for( let i = 0 ; i < frase.length ; i++){
if(frase[i] === 'a'){
    contador++;
} else if (frase[i] === 'A'){
    contador++;
} else if(frase[i] === 'à' ){
    contador++;
}else if (frase[i] === 'e'){
    contador++;
} else if(frase[i] === 'E' ){
    contador++;
}else if (frase[i] === 'è'){
    contador++;
} else if(frase[i] === 'i' ){
    contador++;
}else if (frase[i] === 'I'){
    contador++;
} else if(frase[i] === 'ì' ){
    contador++;
}else if (frase[i] === 'o'){
    contador++;
} else if(frase[i] === 'O' ){
    contador++;
}else if (frase[i] === 'ò'){
    contador++;
} else if(frase[i] === 'u' ){
    contador++;
}else if (frase[i] === 'U'){
    contador++;
} else if(frase[i] === 'ù' ){
    contador++;
}
}
if(contador > 0){
    console.log(`La frase ${frase} tiene ${contador} vocales`);
}else{
    console.log('No posee ninguna vocal la frase');
}