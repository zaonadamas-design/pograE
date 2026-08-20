import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("ingrese ocho digitos", (digitos) => {
    let digitos1=digitos.toString();
    let digitos2=digitos1.slice(0, 4);
    console.log(`los primeros 4 digitos son: ${digitos2}`);
    rl.close();         
});