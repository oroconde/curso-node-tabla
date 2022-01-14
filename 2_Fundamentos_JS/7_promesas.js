const empleados = [
    {
        id: 1,
        nombre: 'Bryan Orozco',
    },
    {
        id: 2,
        nombre: 'Brenda Lorena',
    }, 
    {
        id: 3,
        nombre: 'Orlando Enrique',
    }
]
const salarios = [
    {
        id: 1,
        salario: 3000,
    },
    {
        id: 3,
        salario: 500,
    }
]

const getEmpleado = (id) => {
    return new Promise(( resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
    
        ( empleado ) 
            ? resolve ( empleado )
            : reject ( `No existe empleado con ID ${id}`);
    });
} 

const getSalario = ( ) => {
    return new Promise((resolve, reject) =>{
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
         ? resolve (salario)
         : reject ( `No existe salario con ID ${id}` );
    });
}

const id = 10;
let nombre;

getEmpleado(id)
    .then (empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch(err => console.log(err));
