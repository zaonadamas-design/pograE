import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese su correo: ",(respuesta)=>{
    let respuestaNum=respuesta.toLowerCase();
    console.log(`entrada del nombre: ${respuesta} \n entrada en mayusculas: ${respuestaNum}`)
    rl.close();
});