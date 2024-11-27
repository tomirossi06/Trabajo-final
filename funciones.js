const menus = [{ nombre: "Inicio", url: "index.html" },
    { nombre: "Contacto", url: "contacto.html" },
    { nombre: "Carrito", url: "carrito.html" },
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`; // Se añadió comillas alrededor de la URL
        enlaces.appendChild(lista);
    }
}
cargarmenu();

const productos = [
    { 
        nombre: "SUPERSTAR",
        precio: 100, 
        stock: 10, 
        imagen: "superstar.avif", 
        id: 1 ,
        descripcion: "zapatillas epicas",
    },
    {
        nombre: "CAMPUS",
        precio: 200,
        stock: 10,
        imagen: "campus.avif", 
        id: 2,
        descripcion: "zapatillas con estilo",
    },
    { 
        nombre: "FORUM LOW",
        precio: 100,
        stock: 10,
        imagen: "forumlow.avif",
        id: 3 ,
        descripcion: "zapatillas con sentido",
    },
];


function cargarproductos() {
    let enlaces = document.getElementById("boxproductos");
    for (const producto of productos) {
        let lista = document.createElement("div");
        lista.innerHTML = `<div class="boxcomprar">
                              <h3>${producto.nombre}</h3>
                              <img src="${producto.imagen}" alt="" width="300px"> 
                              <p>${producto.precio}</p>
                              <button onclick="verdetalle('${producto.id}')">Detalles</button>
                          </div>`;
        enlaces.appendChild(lista);
    }
}
cargarproductos();

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
    const enJSON = JSON.stringify(buscarProducto)
    localStorage.setItem("detalleproducto", enJSON);
    window.location.href = "detalle.html";
}
