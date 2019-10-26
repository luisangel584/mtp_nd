
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
                .command('crear', 'Genera un archivo de tabla con una base y un límite', opt)
                .help()
                .argv;


module.exports = {
    argv
}