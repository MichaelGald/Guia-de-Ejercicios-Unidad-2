//Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.
let frase =String(prompt('Ingrese la frase:'));
let contador = 0; 
for( let i = 0 ; i < frase.length ; i++){
if(frase[i] === 'a'){
    contador++;
} else if (frase[i] === 'A'){
    contador++;
} else if(frase[i] === 'à' ){
    contador++;
}
}
if(contador > 0){
    console.log(`La frase ${frase} tiene ${contador} a`);
}else{
    console.log('No posee ninguna a la frase');
}
