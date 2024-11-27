let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"))

function cargarproducto(){
    let enlaces = document.getElementById("boxproductos")
    let lista = document.createElement("div")
    lista.innerHTML =` <h3>${productodetalle.nombre}</h3>
                        <img src=${productodetalle.urlImagen} alt="">
                        <p>${productodetalle.precio}</p> 
                <div class="boxdetalle">
                    <div>
                            <h3>${productodetalle.nombre}</h3>
                            <img src=${productodetalle.urlimg} alt="" width="">
                    </div>
                    <div class="boxdescripcion">
                            <p class="precio">${productodetalle.precio}</p>
                            <p>${productodetalle.descripcion}</p>
                    <div class="boxcontador">
                            <button onclick="sumar()">+</button>
                            <p id="contarproducto">0</p>
                            <button onclick="restar()">-</button>
                        </div>
                        <button onclick="cargarCarrito()">Cargar al carrito</button>
                    </div>
                </div>   
                        `;
                    
        enlaces.appendChild(lista);
}

cargarproducto()
let contador = 0;


function sumar(){
        let nstock = productodetalle.stock
        if (contador<nstock){
    contador = contador + 1;
    document.getElementById("contarproducto").innerHTML = contador;
} else {
        alert("Stock agotado!")
  }
}

function restar() {    
        if  (contador>0){
             contador = contador - 1;
             document.getElementById("contarproducto").innerHTML = contador;
        }
}

function cargarCarrito() {
        if  (contador==0) {   
        alert ("Por favor, ingrese la cantidad de productos deseados.")
} else {

         let carrito = JSON.parse(localStorage.getItem("carrito"))

         if (carrito === null) {

        carrito = [];
         }
        cantidadproducto = document.getElementById("contarproducto").innerHTML

        productonuevo = {id: productodetalle.id,
              nombre: productodetalle.nombre,
              stock: cantidadproducto,
              precio: productodetalle.precio,
              imagen: productodetalle.imagen,
        }
         carrito.push(productonuevo);
         const enJSON = JSON.stringify(carrito);
         localStorage.setItem("carrito", enJSON)
         window.location.href="carrito.html"
}}