import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
rl.question('ingrese nombre del empleado: ', (nombre) => {
    rl.question('ingrese el salario del empleado: ', (salario) => {
        rl.question('ingrese el porcentaje de descuento por seguro medico: ', (descuento) => {
            rl.question('ingrese horas extras trabajadas: ', (horasExtras) => {
                rl.question('ingrese el valor por hora extra: ', (valorHoraExtra) => {
                    salario = parseFloat(salario);
                    descuento = parseFloat(descuento);
                    horasExtras = parseFloat(horasExtras);
                    valorHoraExtra = parseFloat(valorHoraExtra);
                    const salarioNeto = salario - (salario * (descuento / 100)) + (horasExtras * valorHoraExtra);
                    console.log(`\n--- Resumen del Empleado ---`);
                    console.log(`Nombre del empleado: ${nombre}`);
                    console.log(`Salario neto del empleado: $${salarioNeto.toFixed(2)}`);
                    rl.close();
        })});
            });
        });
    });
 
