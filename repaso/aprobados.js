import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
rl.question('ingrese la primera nota del alumno: ', (nota1) => {
    rl.question('ingrese la segunda nota del alumno: ', (nota2) => {
        rl.question('ingrese la tercera nota del alumno: ', (nota3) => {
            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);
            nota3 = parseFloat(nota3);
            const promedio = (nota1 + nota2 + nota3) /3;
            if (promedio >=7) {
                console.log('el alumno ha aprobado');
            } else {
                console.log('el alumno ha reprobado');
                console.log(`el promedio del alumno es: ${promedio.toFixed(2)}`);
                rl.close();
}})})})
           