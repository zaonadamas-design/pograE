import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese el numero de la factura: (FAC-15678) ",(respuesta)=>{
    let respuestaNum=respuesta.slice(4);
    console.log(`su factura es: ${respuesta} \n su factura sin los primeros 4 digitos es: ${respuestaNum}`)
    rl.close();
});