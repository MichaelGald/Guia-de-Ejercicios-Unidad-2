// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

let n = parseInt(prompt('Ingrese el numero n: '));
let m = parseInt(prompt('Ingrese el numero m: '));
let numero = 0;
while(n <= m){
    if(n % 2 === 0){
     numero += n;
    }
  n++;
}
console.log(`La suma es ${numero}`);