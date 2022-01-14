//Los CALLBACKS son funciones que se mandan como argumento a otra función

const getUsuarioByID = (id, callback) =>{

    const user = {
        id, 
        nombre: 'Bryan',
        apellido: 'orozco'
    }
    setTimeout (() => {
        callback (user)} ), 3000;
}

getUsuarioByID ( 10, (usuario)=>{
    console.log(usuario);

})


