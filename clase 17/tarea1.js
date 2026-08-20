import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 
rl.question("ingrese su nombre: ",(nombre)=>{
    let nombreMayus=nombre.toUpperCase();
    let nombreMinus=nombre.toLowerCase();
    console.log(`su nombre es: ${nombre} \n su nombre en mayusculas es: ${nombreMayus} \n su nombre en minusculas es: ${nombreMinus}`)
    rl.close();

});