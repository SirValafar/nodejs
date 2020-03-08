const {crearArchivo, listarTabla} = require('./multiplicar/mulpliplicar');
const argv= require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch (command) {

        case    'listar':
                listarTabla(argv.base, argv.limite);
                break;

        case    'crear':
                base = argv.base;
                crearArchivo(base, argv.limite)
                //condicion aceptada
                        .then(archivo => console.log(`Archivo creado: ${ archivo}`.green))
                //condicion de error
                        .catch(err => console.log(err));
                break;

        default:
                console.log('comando no reconocido');

}