const maquinaria = [
    { tipo: "Sembradora", modelo: "Gringa", precioBase: 10000000 },
    { tipo: "Sembradora", modelo: "Pionera", precioBase: 8500000 },
    { tipo: "Sembradora", modelo: "Drilor", precioBase: 12000000 }
];

const adicionales = [
    { nombre: "GPS", precio: 350000 },
    { nombre: "Tolva extra", precio: 500000 },
    { nombre: "Kit de siembra variable", precio: 700000 }
];

function elegirMaquina(){
    let eleccion = parseInt(prompt(`Ingrese el numero de la maquina que desee:\n
        1. Gringa
        2. Pionera
        3. Drilor`))
    return maquinaria[eleccion - 1];
}

function agregarAdicionales() {
    let totalAdicionales = 0;
    adicionales.forEach(adicional => {
        let agregar = confirm(`¿Deseás agregar ${adicional.nombre} por $${adicional.precio}?`);
        if (agregar) {
            totalAdicionales += adicional.precio;
        }
    });
    return totalAdicionales;
}  

function cotizar(){
    let maquinaSeleccionada = elegirMaquina()
    let adicionalSeleccionado = agregarAdicionales()
    let precioFinal = maquinaSeleccionada.precioBase + adicionalSeleccionado 
    alert(`El precio de la Maquina ${maquinaSeleccionada.tipo} final es de $${precioFinal}`)
}
cotizar()