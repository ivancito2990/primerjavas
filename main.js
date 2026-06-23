// solicitamos datos //
//uso const porque la variable no va cambiar//
const nombreUsuario = prompt("¿Cuál es tu nombre?");
const precioTexto = prompt("Introduce el precio de tu producto favorito:");
const cantidadTexto = prompt("¿Cuántas unidades vas a llevar?");

// convercion de prompt a number //

const precioSugerido = Number(precioTexto);
const cantidadProductos = Number(cantidadTexto);

// calcular total de compra //

let totalCompra = precioSugerido * cantidadProductos;

// string texto y variable //

const mensajeAlerta = `¡Gracias por tu compra, ${nombreUsuario}! El total a pagar es de: $${totalCompra}.`;
const mensajeConsola = `El cliente ${nombreUsuario} ha comprado ${cantidadProductos} unidades por un total de $${totalCompra}`;

// mostrar resultado //

alert(mensajeAlerta);
console.log(mensajeConsola);