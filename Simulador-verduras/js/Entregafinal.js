// Event listener para asegurarse de que el DOM esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Obtener el carrito de la sessionStorage o crear un nuevo arreglo vacío
        carrito = sessionStorage.getItem('carrito') ? JSON.parse(sessionStorage.getItem('carrito')) : [];
        // Obtener los productos del servidor
        productos = await getProducts();
        // Verificar si se obtuvieron productos válidos
        if (!productos || productos.length === 0) {
            throw new Error('Error al cargar los productos');
        }
        // Renderizar los productos en la página
        renderProducts();
        // Mostrar el contenido del carrito
        verCarrito();
    } catch (error) {
        console.log(error);
        alert("Error al cargar los productos");
    }
});

// Obtener los productos del servidor
async function getProducts() {
    let url = './js/products.json';
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Renderizar los productos en la página
async function renderProducts() {
    let productos = await getProducts();
    const productDetails = document.querySelector("#listaProductos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="producto_imagen" src="${producto.imagen}" alt="${producto.nombre}">
        <h4 class="productoTitulo">${producto.nombre}</h4>
        <p class="productoDescripcion">${producto.descripcion}</p>
        <p class="producto_precio">Precio: $${producto.precio.toLocaleString("es-CL")}</p>
        <button id="agregar${producto.id}" class="boton_agregar">Agregar</button>
      `;
        productDetails.appendChild(div);

        const boton = div.querySelector(`#agregar${producto.id}`);
        boton.addEventListener('click', () => {
            agregarCarrito(producto.id);
        });
    }
}

// Función para agregar un producto al carrito
const agregarCarrito = (productoId) => {
    const existeProducto = carrito.some(producto => producto.id === productoId);

    if (existeProducto) {
        carrito = carrito.map(producto => {
            if (producto.id === productoId) {
                producto.cantidad++;
            }
            return producto;
        });
    } else {
        const producto = productos.find(producto => producto.id === productoId);
        producto.cantidad = 1;
        carrito.push(producto);
    }
    swal({
        text: "Producto Añadido al Carrito",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    verCarrito();
};

// Función para eliminar un producto del carrito
const eliminarCarrito = (productoId) => {
    carrito = carrito.filter(producto => producto.id !== productoId);
    verCarrito();
};

// Función para vaciar el carrito
const vaciarCarrito = () => {
    carrito = [];
    verCarrito();
    sessionStorage.removeItem('carrito');
};

// Función para mostrar el contenido del carrito en la página
const verCarrito = () => {
    listaCarrito.innerHTML = "";

    carrito.forEach((producto) => {
        const div = document.createElement('div');
        div.className = "carrito";
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio.toLocaleString('es-CL')}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick="eliminarCarrito(${producto.id})" class="boton_eliminar">Eliminar</button>
      `;
        listaCarrito.appendChild(div);
    });

    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toLocaleString('es-CL');
};

// Obtener referencia al botón "Vaciar carrito" y agregar el event listener correspondiente
const botonVaciar = document.getElementById('vaciarCarrito');
botonVaciar.addEventListener('click', () => {
    vaciarCarrito();
});
