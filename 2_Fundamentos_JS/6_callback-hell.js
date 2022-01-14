//---------------------------- PROBLEMAS DE LOS CALLBACKS
const empleados = [
    {
        id: 1,
        nombre: 'Bryan',
    },
    {
        id: 2,
        nombre: 'Brenda',
    }, 
    {
        id: 3,
        nombre: 'Orlando',
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
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    
    if (empleado){
        callback (null, empleado);
    } else{
        callback(`Empleado con ID ${id} no existe`)
    }    
} 
const id = 11

const getsalarios = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario

    if (salario){
        callback (null, salario);
    } else{
        callback(`No existe salario para el empleado con ID ${id}`);
    }
}

getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
   
})

getsalarios (id,( err, salario) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    console.log(salario)
})
