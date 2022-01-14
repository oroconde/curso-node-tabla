const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log( process.argv);
//console.log(argv);
//console.log( 'base: yargs', argv.base);

//const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreAchivo => console.log(nombreAchivo, 'creado'))
    .catch(err => console.log(err));    

