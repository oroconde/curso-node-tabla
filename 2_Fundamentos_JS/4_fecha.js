function suma (a, b){
    return a + b 
}
console.log(  'resultado', suma(1, 0)    );

const sumar = (a, b) => a + b;

console.log( 'resultado', sumar(1, 1) );


//flecha para cadenas:  
const imprimirConCadena = () => 'imprimir en cadena con función flecha'

//flecha para objetos:
const regresaObjeto = () => ({nombre: 'Bryan', Apellido: 'Orozco'})

//flecha con 1 parámetro:
const funcionConParametro = mensaje => console.log(mensaje);

//flecha con varios parámetros:
const funcionConVariosParametros = (valor1, valor2) => {
    const resultado = valor1 + valor2;
    return resultado;
}