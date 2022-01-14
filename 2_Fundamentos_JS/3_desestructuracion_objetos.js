const deadpool = {
    nombre: 'Wade',
    apellido: 'winston',
    poder: 'regeneración',
    edad: 50,
    getNombre(){
    return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
//console.log(deadpool.getNombre());

//--------------------------------------------------Desestructuracion de Objetos
let {nombre, apellido, poder, edad = 0 } = deadpool;
//console.log(nombre, apellido, poder, edad);

function imprimeHeroe ({nombre, apellido, poder, edad}){

    nombre = 'Loki';
    console.log(nombre, apellido, poder, edad);

}
imprimeHeroe(deadpool);

//--------------------------------------------------Desestructuracion de Arreglos
const Heroes = ['Superman', 'Batman', 'Flash']
const [ , , h3] = Heroes

console.log(h3);