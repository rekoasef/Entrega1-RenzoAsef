
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

let carrito = [];

function mostrarCatalogo(array) {
    let catalogo = "Catálogo de Maquinaria:\n";
    for (let i = 0; i < array.length; i++) {
        catalogo += `${i + 1}. Modelo: ${array[i].modelo} - Precio Base: $${array[i].precioBase}\n`;
    }
    alert(catalogo);
}

function elegirMaquina(array) {
    let eleccion = parseInt(prompt(`¿Qué máquina querés agregar al carrito? (Ingresá el número)`));
    if (eleccion >= 1 && eleccion <= array.length) {
        return array[eleccion - 1];
    } else {
        alert("Opción inválida");
        return null;
    }
}

function agregarAdicionales(array) {
    let totalAdicionales = 0;
    let adicionalesElegidos = [];

    for (let i = 0; i < array.length; i++) {
        let agregar = confirm(`¿Deseás agregar ${array[i].nombre} por $${array[i].precio}?`);
        if (agregar) {
            totalAdicionales += array[i].precio;
            adicionalesElegidos.push(array[i].nombre);
        }
    }

    return { totalAdicionales, adicionalesElegidos };
}

function verCarrito(carrito) {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        let resumen = "Carrito actual:\n";
        for (let i = 0; i < carrito.length; i++) {
            resumen += `${i + 1}. Modelo: ${carrito[i].modelo}, Precio Final: $${carrito[i].precioFinal}\n`;
            if (carrito[i].adicionales.length > 0) {
                resumen += `   Adicionales: ${carrito[i].adicionales.join(", ")}\n`;
            }
        }
        alert(resumen);
    }
}

function simulador() {
    let salir = false;

    while (!salir) {
        let opcion = prompt(
            "Bienvenido al cotizador de maquinaria\n\nElegí una opción:\n1. Ver catálogo\n2. Agregar una máquina\n3. Ver carrito\n4. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarCatalogo(maquinaria);
                break;
            case "2":
                mostrarCatalogo(maquinaria);
                let maquina = elegirMaquina(maquinaria);
                if (maquina) {
                    let adicionalesData = agregarAdicionales(adicionales);
                    let precioFinal = maquina.precioBase + adicionalesData.totalAdicionales;

                    carrito.push({
                        tipo: maquina.tipo,
                        modelo: maquina.modelo,
                        precioBase: maquina.precioBase,
                        precioFinal: precioFinal,
                        adicionales: adicionalesData.adicionalesElegidos
                    });
                    

                    alert(`Máquina ${maquina.modelo} agregada al carrito con precio final de $${precioFinal}`);
                }
                break;
            case "3":
                verCarrito(carrito);
                break;
            case "4":
                salir = true;
                alert("Gracias por usar el simulador. ¡Hasta luego!");
                break;
            default:
                alert("Opción inválida. Intentá de nuevo.");
        }
    }
}

simulador();
