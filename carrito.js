const menus =[{nombre: "INICIO", url:"index.html"},
         {nombre: "CONTACTO", url:"contacto.html"},
         {nombre: "CARRITO", url:"Carrito.html"},
]
let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

function cargarMenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}

cargarMenu();

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarCarrito() {
    let enlaces = document.getElementById("tablacarrito");
    for (const producto of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `${producto.id}`;
        lista.innerHTML = `
            <td><img src="${producto.imagen}" width="50"></td>
            <td>${producto.stock}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock * producto.precio}</td> <!--Total-->
            <td><button id="btneliminar" onclick= "eliminarproducto("${producto.id}")">x</button></td>
        `;
        enlaces.appendChild(lista);
    }
}

cargarCarrito();

function eliminarproducto(id) {
    alert("¿desea eliminar el producto?")
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id);
    productosActualizados = productocarrito.filter(producto => producto.id !== id)
    const enJSON = JSON.stringify(productosActualizados);
    localStorage.setItem("carrito", enJSON)
}

function actualizarCarrito(totalProductos) {
    totalProductos = parseInt(totalProductos, 10);

    
    const cantidadCarritoElement = document.getElementById("cantidad-carrito");
    if (cantidadCarritoElement) {
        cantidadCarritoElement.textContent = totalProductos;
    }
}

                    
       


