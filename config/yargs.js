const argv = require('yargs')
                .option({
                    'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                    },
                    'l': {
                        alias: 'listar',
                        demandOption: true,
                        default: 'false',
                        type: 'boolean'                       
                       },
                    'h': {
                        alias: 'hasta',
                        demandOption: true,
                        type: 'number'                       
                       }
                    })
                .check ( (argv, options) => {
                    if (isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;

