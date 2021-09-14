let salida = ' ';
const fs = require('fs');
const crearArchivo = async (base=5, listar = false, hasta=10) => {

    try {

        
        for(i=0;i<hasta;i++) {
            salida += `${base} x ${i+1} = ${base * (i+1)}\n`;
            };
        if (listar) {
            console.clear();
            console.log('================')
            console.log(` Tabla del ${base}`);
            console.log('================');
            console.log(salida);
            }
            fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    crearArchivo
}