// Datos de productos (simulando "base de datos")
const productos = [
    {
        id: 1,
        nombre: "Pan Integral",
        precio: 4.50,
        imagen: "images/pan-integral.jpg",
        categoria: "panes"
    },
    {
        id: 2,
        nombre: "Torta de Chocolate",
        precio: 25.00,
        imagen: "images/torta-chocolate.jpg",
        categoria: "reposteria"
    },
    // Añade más productos aquí...
];

// Función para cargar productos en la página
function cargarProductos() {
    const container = document.getElementById("productos-container");
    let html = "";

    productos.forEach(producto => {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">S/ ${producto.precio.toFixed(2)}</p>
                        <button onclick="añadirAlCarrito(${producto.id})" class="btn btn-warning">
                            <i class="fas fa-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Función para añadir al carrito (simplificada)
function añadirAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`¡${producto.nombre} añadido al carrito!`);
}

// Cargar productos al abrir la página
document.addEventListener("DOMContentLoaded", cargarProductos);