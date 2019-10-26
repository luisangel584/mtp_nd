// requires
const argv = require('./config/yargs').argv;
const colors = require('colors');

//
const { crearArchivo, listarTabla } = require('./multiply/multiply');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archive => console.log(`El archivo ${colors.green(archive)} ha sido creado`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

