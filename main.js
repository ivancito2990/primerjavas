// === DEFINICIÓN DEL PROBLEMA Y DATOS (STOCK DISPONIBLE) ===
// Usamos const para valores que no deberían cambiar durante la ejecución
const PRECIO_PROCESADOR = 200;
const PRECIO_RAM = 80;
const PRECIO_DISCO = 60;

let stockProcesador = 3;
let stockRam = 5;
let stockDisco = 4;

let totalCarrito = 0;
let continuarComprando = true;

alert("¡Bienvenido al Simulador de Tienda de Hardware!");

// === BUCLE MÍNIMO PARA INTERACTUAR CON EL USUARIO ===
while (continuarComprando) {
    
    let seleccion = prompt(
        "Seleccione el componente que desea agregar al carrito:\n" +
        "1 - Procesador ($" + PRECIO_PROCESADOR + ")\n" +
        "2 - Memoria RAM ($" + PRECIO_RAM + ")\n" +
        "3 - Disco SSD ($" + PRECIO_DISCO + ")\n" +
        "4 - Salir y ver total"
    );

    // === ESTRUCTURA SWITCH PARA EVALUAR DATOS EXTENSOS ===
    switch (seleccion) {
        case "1":
            // Validación de stock (if/else)
            if (stockProcesador > 0) {
                totalCarrito += PRECIO_PROCESADOR;
                stockProcesador--; // Decrementamos el stock
                alert("Procesador agregado. Total actual: $" + totalCarrito);
            } else {
                alert("Lo sentimos, no queda stock de Procesadores.");
            }
            break;

        case "2":
            if (stockRam > 0) {
                totalCarrito += PRECIO_RAM;
                stockRam--;
                alert("Memoria RAM agregada. Total actual: $" + totalCarrito);
            } else {
                alert("Lo sentimos, no queda stock de Memorias RAM.");
            }
            break;

        case "3":
            if (stockDisco > 0) {
                totalCarrito += PRECIO_DISCO;
                stockDisco--;
                alert("Disco SSD agregado. Total actual: $" + totalCarrito);
            } else {
                alert("Lo sentimos, no queda stock de Discos SSD.");
            }
            break;

        case "4":
        case null: // Por si el usuario presiona "Cancelar"
            continuarComprando = false;
            break;

        default:
            alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
            break;
    }
}

// === SALIDA DE RESULTADOS ===
alert("Gracias por usar el simulador.\nEl total de tu compra es: $" + totalCarrito);
console.log("Resumen de la operación:");
console.log("Total facturado: $" + totalCarrito);
console.log("Stock remanente - Procesadores: " + stockProcesador);
console.log("Stock remanente - RAM: " + stockRam);
console.log("Stock remanente - SSD: " + stockDisco);