import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese el numero de la factura: (VEN-2026-045) ",(respuesta)=>{
    let respuestaNum=respuesta.slice(0, 3);
    console.log(`su factura es: ${respuesta} \n los primeros 3 digitos de su factura son: ${respuestaNum}`)
    rl.close();
});