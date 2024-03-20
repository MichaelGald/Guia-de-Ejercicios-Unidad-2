// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.
let color = prompt('Introduce un color')
const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let siHay = false
array.forEach((tonos) => {
    if (tonos === color) {
        siHay = true;
    }
});
if (siHay) {
    console.log(`El color ${color} si existe en el array`);
}else{
    console.log(`El color ${color} no existe en el array`);
}