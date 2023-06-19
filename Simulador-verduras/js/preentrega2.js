// Clase Verdura
class Verdura {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

// Creación de Catalogo con las verduras disponibles en la tienda
const verdurasDisponibles = [
  new Verdura("Zanahoria", 1.5, 10),
  new Verdura("Tomate", 2.0, 15),
  new Verdura("Lechuga", 1.0, 5),
  new Verdura("Cebolla", 1.2, 8),
  new Verdura("Espinaca", 4, 19),
  new Verdura("Manzana", 8, 100),
  new Verdura("Papa", 9, 10),
];

// Función para mostrar el catálogo de verduras disponibles
function mostrarCatalogo(verduras) {
  console.log("Catálogo de Verduras Disponibles:");
  verduras.forEach((verdura, index) => {
    console.log(
      `${index + 1}. ${verdura.nombre} - Precio: $${verdura.precio.toFixed(2)} - Stock: ${verdura.stock}`
    );
  });
}

// Función para buscar una verdura por nombre en el catálogo
function buscarVerdura(nombre, verduras) {
  return verduras.find((verdura) => verdura.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para filtrar las verduras por precio  en el catálogo
function filtrarPorPrecioMaximo(precioMaximo, verduras) {
  return verduras.filter((verdura) => verdura.precio <= precioMaximo);
}

// Función principal que simula la tienda de compra de verduras en línea
function tiendaDeVerduras() {
  mostrarCatalogo(verdurasDisponibles);

  const opcion = prompt("Ingresa el número de la verdura que deseas comprar (Pulse 0 para salir):");
  
  if (opcion === "0") {
    console.log("Gracias por visitar nuestra tienda. ¡Hasta luego!");
    return;
  }

  const verduraSeleccionada = verdurasDisponibles[parseInt(opcion) - 1];
  if (verduraSeleccionada) {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${verduraSeleccionada.nombre} que desea:`));

    if (cantidad > verduraSeleccionada.stock) {
      console.log("Lo sentimos, no hay suficiente stock disponible.");
    } else {
      const total = verduraSeleccionada.precio * cantidad;
      console.log(`El total a pagar es: $${total.toFixed(2)}`);
      console.log("¡Gracias por tu compra!");
      verduraSeleccionada.stock -= cantidad;
    }
  } else {
    console.log("Opción inválida. Por favor, selecciona una verdura válida.");
  }
// Volver a mostrar el catálogo y solicitar la siguiente compra
  tiendaDeVerduras(); 
}

// Ejecutar la función principal
tiendaDeVerduras();

//Agregamos el carrito de compra
let carrito = [];

function agregarAlCarrito(nombre, precio,color) {
const verdura = new Verdura(nombre, precio,color);
carrito.push(verdura);
total += precio;
}

function mostrarCarrito() {
console.log("Carrito de compras:");
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre + " - $" + carrito[i].precio);
}
console.log("Total: $" + total);
}