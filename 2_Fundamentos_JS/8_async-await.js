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

const getinfoUsuario = async() => {
    
    try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado ${empleado} es de $${salario}`

    }catch(error){
        throw error
    }
}

const id = 10 ;
getinfoUsuario(id) 
    .then( msg => {
    console.log('TODO BIEN');   
    console.log(msg)
    })
    .catch( err => {
        console.log('TODO MAl')
        console.log(err)
    })
