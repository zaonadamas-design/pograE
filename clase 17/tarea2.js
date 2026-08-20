import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("ingrese su numero de carnet (U20260082) ",(carnet)=>{
    let carnetNum=carnet.slice(0, 3);
    console.log(`las primeras 3 letras de su carnet son: ${carnetNum}`);
    rl.close();
})