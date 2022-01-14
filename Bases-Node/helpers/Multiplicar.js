const fs = require('fs');
const crearArchivo = async (base, listar = false, hasta = 10) => {
 
    try {        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            
        }
        
        if(listar){ 
            console.log(`============= Tabla del: ${base} ==============`)
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
        return `Tabla-${base}.txt`;
        
    } catch (err) {
        throw err
    }
}
module.exports = {
    crearArchivo
}
