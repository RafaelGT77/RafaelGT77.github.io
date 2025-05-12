// Función para cargar el carrito
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("carrito-items");
    const totalElement = document.getElementById("total");
    let html = "";
    let total = 0;

    if (carrito.length === 0) {
        html = `<div class="alert alert-info">Tu carrito está vacío.</div>`;
    } else {
        carrito.forEach((producto, index) => {
            total += producto.precio;
            html += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">S/ ${producto.precio.toFixed(2)}</p>
                            </div>
                        </div>
                        <div class="col-md-2 d-flex align-items-center">
                            <button onclick="eliminarDelCarrito(${index})" class="btn btn-danger">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    contenedor.innerHTML = html;
    totalElement.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito(); // Recargar la vista
}

// Cargar carrito al abrir la página
document.addEventListener("DOMContentLoaded", cargarCarrito);