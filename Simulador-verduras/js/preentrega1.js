
// Definición de la variable para almacenar el total de la compra
let totalCompra = 0;

// Función para agregar productos al carrito y sumar el total de la compra
function agregarProducto(producto, precio) {
  let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
  if (isNaN(cantidad) || cantidad < 1) {
    alert("La cantidad ingresada es inválida. Por favor, ingrese un número entero positivo.");
  } else {
    let subtotal = precio * cantidad;
    totalCompra += subtotal;
    alert(`Se han agregado ${cantidad} unidades de ${producto} a su carrito. El subtotal de su compra por este producto es de $${subtotal}.`);
  }
}

// Un ciclo condicional para agregar productos al carrito
let continuarComprando = true;
while (continuarComprando) {
  let producto = prompt("Ingrese el nombre del producto que desea comprar (tomate, cebolla, zanahoria, papa, lechuga, espinaca):");
  switch (producto) {
    case "tomate":
      agregarProducto("tomate", 2.5);
      break;
    case "cebolla":
      agregarProducto("cebolla", 1.8);
      break;
    case "zanahoria":
      agregarProducto("zanahoria", 3);
      break;
    case "papa":
      agregarProducto("papa", 2);
      break;
      case "lechuga":
      agregarProducto("lechuga", 5);
      break;
      case "espinaca":
      agregarProducto("espinaca", 5);
      break;
    default:
      alert("El producto ingresado es inválido. Por favor, ingrese uno de los productos disponibles.");
      break;
  }
  continuarComprando = confirm("¿Desea continuar comprando?");
}

// Mostrar el total de la compra al finalizar la simulación
alert(`El total de su compra es de $${totalCompra}. ¡Gracias por su compra!`);

//  Función para elegir el medio de pago del usuario
function realizarPago() {

    if (medioPago === "tarjeta") {
      console.log("Pago con tarjeta");
    } else if (medioPago === "dinero almacenado") {
      console.log("Pago con dinero almacenado");
    }
  }


// Creamos una variable para almacenar el dinero disponible del usuario
let dineroDisponible = 100;

// Definimos una función para comprar verduras
function comprarVerduras(verdura, cantidad, precioUnitario) {
  // Calculamos el costo total de la compra
  let costoTotal = cantidad * precioUnitario;
  
  // Verificamos si el usuario tiene suficiente dinero para realizar la compra
  if (costoTotal > dineroDisponible) {
    console.log("No tienes suficiente dinero para comprar " + cantidad + " unidades de " + verdura + ".");
  } else {
    // Restamos el costo total de la compra al dinero disponible del usuario
    dineroDisponible -= costoTotal;
    
    console.log("Compraste " + cantidad + " unidades de " + verdura + " por un total de $" + costoTotal + ".");
    console.log("Dinero disponible: $" + dineroDisponible);
  }
}

// Simulamos algunas compras de verduras
comprarVerduras("tomate", 0, 10);
comprarVerduras("lechuga", 0, 7);
comprarVerduras("cebolla", 9, 5);
comprarVerduras("pimiento", 0, 8);
comprarVerduras("papa", 4, 5);
comprarVerduras("espinaca", 4, 5);


// //PREENTREGA 2

//  // Variables Vegetables que es un array y que contiene obejtos 
// let vegetables = [
//   { name: "Zanahoria", price: 1.5, stock: 10 },
//   { name: "Tomate", price: 2, stock: 15 },
//   { name: "Lechuga", price: 1, stock: 5 },
//   { name: "Papa", price: 1.2, stock: 8 },
//   { name: "Cebolla", price: 0.8, stock: 12 },

// ];

// // Funcion buscar verduras y tambien de entrada y salida
// function searchVegetable(event) {
//   event.preventDefault();
//   const searchInput = document.getElementById("search-input");
//   const query = searchInput.value.toLowerCase();
//   const result = document.getElementById("result");
//   result.innerHTML = "";

//   const filteredVegetables = vegetables.filter(vegetable =>
//     vegetable.name.toLowerCase().includes(query)
//   );

//   if (filteredVegetables.length === 0) {
//     result.textContent = "No se encontraron resultados. Intenta de nuevo";
//   } else {
//     filteredVegetables.forEach(vegetable => {
//       const vegetableInfo = document.createElement("p");
//       vegetableInfo.textContent = `${vegetable.name} - Precio: $${vegetable.price} - Stock: ${vegetable.stock}`;
//       result.appendChild(vegetableInfo);
//     });
//   }
//   searchInput.value = "";
// }
// // Event listener para buscar verduras
// const searchForm = document.getElementById("search-form");
// searchForm.addEventListener("submit", searchVegetable);


// // Variables
// let total = 0;

// // Objeto verdura
// function Verdura(nombre, precio, color) {
//   this.nombre = papa;
//   this.precio = 3;
//   this.color = blanca;
// }

// // Array para almacenar las verduras seleccionadas
// let carrito = [];

// function agregarAlCarrito(nombre, precio,color) {
//   const verdura = new Verdura(nombre, precio,color);
//   carrito.push(verdura);
//   total += precio;
// }

// function mostrarCarrito() {
//   console.log("Carrito de compras:");
//   for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre + " - $" + carrito[i].precio);
//   }
//   console.log("Total: $" + total);
// }

// // Ejemplo de entrada y salida en la consola del navegador
// const nombre = prompt("Ingrese el nombre de la verdura:");
// const color = prompt("Ingrese el color");
// const precio = parseFloat(prompt("Ingrese el precio de la verdura:"));

// agregarAlCarrito(nombre, precio,color);
// mostrarCarrito();