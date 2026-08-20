import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('ponga su peso en kg: ', (peso) => {
    rl.question('ponga su altura en metros: ', (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        const imc = peso / (altura * altura);
        if (imc < 18.5) {
            console.log('Usted tiene bajo peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            console.log('Usted tiene un peso normal');
        } else if (imc >= 25 && imc < 29.9) {
            console.log('Usted tiene sobrepeso');
        } else {
            console.log('Usted tiene obesidad');
        }
        console.log(`Su IMC es: ${imc.toFixed(2)}`);
        rl.close();
    });
});