import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número de referencia de seis dígitos: ', (referencia) => {
  let numero = Number(referencia);
  let texto = numero.toString();
  let tresPrimeros = texto.slice(0, 3);
  
  console.log(`Número de referencia: ${texto}`);
  console.log(`Primeros tres dígitos: ${tresPrimeros}`);
  
  rl.close();
});
