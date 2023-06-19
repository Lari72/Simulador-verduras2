
const listaProductos = document.getElementById("listaProductos");
const listaCarrito = document.getElementById("listaCarrito");
const botonVaciar = document.getElementById('vaciarCarrito');
const precioTotal = document.getElementById('precioTotal');
let carrito = [];

class Producto {
    constructor(id, nombre, precio, Images, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.Images = Images;
        this.descripcion = descripcion;
    };
};

const productos = [
    {id:1, nombre: "Cebolla", precio: 1500, imagen: "./Images/Cebolla.jpg", cantidad:2, descripcion: " Cebolla Verde, fresca de origen local"},
    {id:2, nombre: "Lechuga", precio: 1000, imagen: "./Images/Lechuga.jpg", cantidad:2, descripcion: "Lechuga del dia, origen zona central"},
    {id:3, nombre: "Tomates", precio: 2500, imagen: "./Images/Tomates.jpg", cantidad:1, descripcion: "Tomates de alta calidad, origen norte"},
    {id:4, nombre: "Zanahoria", precio: 1300, imagen: "./Images/Zanahoria.jpg", cantidad:1, descripcion: "Zanahoria calidad premium, origen zona central"},
    {id:5, nombre: "Espinaca", precio: 900, imagen: "./Images/Espinaca.jpg", cantidad:1, descripcion: "Espinaca calidad premium, origen zona central"},
];

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.getItem('carrito') ? carrito = JSON.parse(sessionStorage.getItem('carrito')) : alert("Error al cargar los productos")
    
    verCarrito();
});


productos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <img class="producto_imagen" src = ${producto.imagen} alt="${producto.nombre}">
    <h4 class="productoTitulo">${producto.nombre}</h4>
    <p class="productoDescripcion">${producto.descripcion}</p>
    <p class="producto_precio">Precio: $${producto.precio.toLocaleString('es-CL')}</p>
    <button id="agregar${producto.id}" class="boton_agregar">Agregar</button>
    `
    listaProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener('click', () => {
        agregarCarrito(producto.id)
    });
});

const agregarCarrito = (productoId) => {
    const existeProducto = carrito.some(producto => producto.id === productoId);
    
    if(existeProducto){
        const producto = carrito.map (producto => {
            if(producto.id === productoId){
                 producto.cantidad++
            }
        });
    } else {
    const itemProducto = productos.find((producto) => producto.id === productoId);
    carrito.push(itemProducto);
    };

    
    verCarrito();
};

const eliminarCarrito = (productoId) => {
    const itemProducto = carrito.find((producto) => producto.id === productoId);
    const indice = carrito.indexOf(itemProducto);
    carrito.splice(indice, 1);
    verCarrito();
};

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    verCarrito();
});

const verCarrito = () => {
    listaCarrito.innerHTML = "";

    carrito.forEach((producto) => {
        const div = document.createElement('div');
        div.className = ("carrito");
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$ ${producto.precio.toLocaleString('es-CL')}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick = "eliminarCarrito(${producto.id})" class = "boton_eliminar">Eliminar</button>
        `
        listaCarrito.appendChild(div);
        sessionStorage.setItem('carrito', JSON.stringify(carrito));

    });

    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toLocaleString('es-CL')

};

const inputNumber = $("input[type='number']");
inputNumber.wrap("<div class=\"quantity-number\"></div>");

// Add minus and plus button before and after number inputs
$('<button type="button" class="minus-button">-</button>').insertBefore("input[type='number']");
$('<button type="button" class="plus-button">+</button></div>').insertAfter("input[type='number']");

// Functions on each button
const minusButton = $(".minus-button");
const plusButton = $(".plus-button");

minusButton.each(function (index) {
  $(this).on("click", function (evt) {
    let inputNumber = $(evt.target).next("input[type='number']");
    inputNumber[0].stepDown();
    inputNumber.change();
  })
});

plusButton.each(function (index) {
  $(this).on("click", function (evt) {
    let inputNumber = $(evt.target).prev("input[type='number']");
    inputNumber[0].stepUp();
    inputNumber.change();
  })
});