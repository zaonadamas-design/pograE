import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

rl.question('Ingrese el destino del viaje: ', (destino) => {
    rl.question('costo total del hospedaje: ', (hospedaje) => {
        rl.question('costo del alquiler del auto: ', (auto) => {    
            rl.question('presupuesto para el alimento: ', (alimento) => {
                rl.question('numero de personas que viajan: ', (personas) => {
                    
                    // Usamos nombres distintos para las constantes convertidas
                    const hospedajeNum = parseFloat(hospedaje);
                    const autoNum = parseFloat(auto);
                    const alimentoNum = parseFloat(alimento);
                    const personasNum = parseInt(personas);
                    
                    const total = hospedajeNum + autoNum + alimentoNum;
                    const promedio = total / personasNum;
                    
                    console.log(`\n--- Resumen del Viaje ---`);
                    console.log(`Destino: ${destino}`);
                    console.log(`El costo total del viaje es: $${total.toFixed(2)}`);
                    console.log(`El costo promedio por persona es: $${promedio.toFixed(2)}`);
                    
                    rl.close();
                });
            });
        });
    });
});