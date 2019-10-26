//
const fs = require('fs');
const colors = require('colors');

//
let data = '';

//

let listarTabla = (base, limite = 10) => {
        console.log('=================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('=================='.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * 1}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    //
    return new Promise((res, rej) => {
        
        if(!Number(base)) {
            rej(`El valor ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tables/table-${base}-al-${limite}.txt`, data, (err) => {

            if(err) rej(err);
            else
                res(`table-${base}-al-${limite}.txt`);
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}