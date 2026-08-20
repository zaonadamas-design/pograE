import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
rl.question('ingrese el nombre del cliente: ', (nombre) => {
    rl.question('ingrese el área a pintar en metros cuadrados: ', (area) => {
        rl.question('ingrese el rendimiento de la pintura por metro cuadrado por galon: ', (rendimiento) => {
            rl.question('ingrese el precio de la pintura por galon: ', (precio) => {
                area = parseFloat(area);
                rendimiento = parseFloat(rendimiento);
                precio = parseFloat(precio);
                const galonesNecesarios = area / rendimiento;
                const costoTotal = galonesNecesarios * precio;

                console.log(`Cliente: ${nombre}`);
                console.log(`Área a pintar: ${area} m²`);
                console.log(`Rendimiento de la pintura: ${rendimiento} m²/galón`);
                console.log(`Galones necesarios: ${galonesNecesarios.toFixed(2)}`);
                console.log(`Costo total: $${costoTotal.toFixed(2)}`);

            })
        })
    })
})