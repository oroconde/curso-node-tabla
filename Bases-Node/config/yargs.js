const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Amplía la tabla de multiplicar'
  })
  .check((argv, option) => {
    console.log("Yargs", argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

  module.exports = argv 