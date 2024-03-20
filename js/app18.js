// Todos los ejercicios de while anteriores los debe replicar con el ciclo for.
alert(' 1. Aumentando de 1 en 1\n 2. Aumentando de 2 en 2\n 3. Disminuyendo de 1 en 1\n 4. Tabla de ultiplicacion\n 5. N hasta M');

let elegir = prompt('Selecionar unas de las siguentes opciones:');

switch (elegir) {
    case '1':
        let n = parseInt(prompt('Ingrese el numero n: '));
        for(let i = 1 ;i <= n; i++ ){
            console.log(`Numero ${i}`);
}
        break;
    case '2':
        let ne = parseInt(prompt('Ingrese el numero n: '));
        for(let i = 1 ;i <= ne; i+=2 ){
            console.log(`Numero ${i}`);
        }
        break;
    case '3':
        let nee = parseInt(prompt('Ingrese el numero n: '));
        for(let i = 1;i <= nee; i-- ){
            console.log(`Numero ${i}`);
            break;
        }
     case '4':
            let neee = parseInt(prompt('Ingrese el numero n:'));
            for(let i = 1; i <= 12; i++)
            console.log(`La multiplicacion es de ${neee} X ${i} = ${ neee * i}`);
        break;
     case '5':
         let neeee = parseInt(prompt('Ingrese el numero n: '));
         let m = parseInt(prompt('Ingrese el nume;ro m: '));
         let numero = 0;
           if (neeee > m) {
                  console.log('Error: n debe ser menor o igual a m');
                } else {
             for (neeee; neeee <= m; neeee++) {
                 numero += neeee;
                    }
                 console.log(`La suma de los números desde ${neeee} hasta ${m} es ${numero}`);
                }
                  break;
    default:
        console.log('ERROR');
        break;

}