import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese el nombre del evento: ",(respuesta)=>{
    let respuestaMayuscula=respuesta.toUpperCase();
    console.log(`entrada del nombre: ${respuesta} \n entrada en mayusculas: ${respuestaMayuscula}`)
    rl.close();
});

