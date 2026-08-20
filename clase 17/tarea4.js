import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("ingrese su nombre: ",(nombre)=>{
    rl.question("ingrese su apellido: ",(apellido)=>{
        rl.question("ingrese su cuota mensual: ",(cuota)=>{
            rl.question("ingrese su anio de ingreso: ",(anio)=>{
                let nombre1=nombre.toUpperCase();
                let apellido1=apellido.toUpperCase();
                let apellido2=apellido1.slice(0, 3);
                let cuota1=Number(cuota);
                let anio1=anio.toString();
                let anio2=anio1.slice(2);
                console.log(`su nombre es: ${nombre1} \n su apellido es: ${apellido1} \n las primeras 3 letras de su apellido son: ${apellido2} \n su cuota mensual es: $${cuota1.toFixed(2)} \n su anio de ingreso es: ${anio1} \n los ultimos 2 digitos de su anio de ingreso son: ${anio2}`)
                rl.close();
            })
        })
    })
})