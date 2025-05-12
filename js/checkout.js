// Función para cargar el resumen del pedido
function cargarResumenPedido() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const resumen = document.getElementById("resumen-pedido");
    const totalElement = document.getElementById("total-pedido");
    let html = "";
    let total = 0;

    if (carrito.length === 0) {
        html = `<p class="text-muted">No hay productos en el carrito.</p>`;
    } else {
        carrito.forEach(producto => {
            total += producto.precio;
            html += `
                <div class="d-flex justify-content-between mb-2">
                    <span>${producto.nombre}</span>
                    <span>S/ ${producto.precio.toFixed(2)}</span>
                </div>
            `;
        });
    }

    resumen.innerHTML = html;
    totalElement.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Función para enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;

    if (carrito.length === 0) {
        alert("¡Tu carrito está vacío!");
        return;
    }

    if (!nombre || !direccion || !telefono) {
        alert("Por favor completa todos los datos.");
        return;
    }

    // Crear mensaje estructurado
    let mensaje = `*Nuevo Pedido - Panadería Delicia*%0A%0A`;
    mensaje += `*Cliente:* ${nombre}%0A`;
    mensaje += `*Teléfono:* ${telefono}%0A`;
    mensaje += `*Dirección:* ${direccion}%0A%0A`;
    mensaje += `*Pedido:*%0A`;

    let total = 0;
    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre}: S/ ${producto.precio.toFixed(2)}%0A`;
        total += producto.precio;
    });

    mensaje += `%0A*Total a pagar:* S/ ${total.toFixed(2)}`;

    // Redirigir a WhatsApp
    window.location.href = `https://wa.me/51987654321?text=${mensaje}`;
}

// Eventos
document.addEventListener("DOMContentLoaded", cargarResumenPedido);
document.getElementById("btn-whatsapp").addEventListener("click", enviarPedidoWhatsApp);