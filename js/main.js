// constantes globales

const form = document.getElementById('vehiculo-form');
const contenedor = document.getElementById('contenedor-tarjetas');
const addBtn = document.getElementById('agregar-vehiculo');
const btnCarrito = document.getElementById('btn-carrito');
const contenedorCarrito = document.getElementById('cont-carrito');
const carrito = document.querySelector('.cont-productos');
const ValorTotal = document.getElementById('total');
let total = 0;




// aqui es para los campos del formulario
form.addEventListener('submit', (e) => {


    e.preventDefault();



    const valorFoto = document.getElementById('foto-input').value;
    const valorNombre = document.getElementById('nombre-input').value;
    const valorMarca = document.getElementById('marca-input').value;
    const valorModelo = document.getElementById('modelo-input').value;
    const valorKm = document.getElementById('km-input').value;
    const valorPrecio = document.getElementById('precio-input').value;

    if (valorFoto == "" || valorNombre == "" || valorMarca == "" || valorModelo == "" || valorKm == "" || valorPrecio == "") {
        alert('Por favor es obligatorio llenar todos los campos que están en la interfaz');
    }
    else {


        const vehiculos = {
            id: Date.now(),
            foto: valorFoto,
            nombre: valorNombre,
            marca: valorMarca,
            modelo: valorModelo,
            kilometraje: valorKm,
            precio: valorPrecio
        }

        const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculos')) || [];

        vehiculosGuardados.push(vehiculos);

        localStorage.setItem('vehiculos', JSON.stringify(vehiculosGuardados));


        
        const nuevaTarjeta = createVehiculoCard(valorFoto, valorNombre, valorMarca, valorModelo, valorKm, valorPrecio);
        contenedor.appendChild(nuevaTarjeta);
        eventsToVehiculo(nuevaTarjeta, vehiculos.id);
        form.reset();

    }


});







document.addEventListener('DOMContentLoaded',()=>{
    const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculos'))||[];
    vehiculosGuardados.forEach((vehiculo) => {
        
    const col = document.createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');
    col.dataset.id = vehiculo.id;

    const card = document.createElement('div');
    card.classList.add('card', 'h-100', 'tarjeta');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top', 'w-100');
    imagen.setAttribute('src', vehiculo.foto);


    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = vehiculo.nombre;

    const h4 = document.createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');
    h4.textContent = vehiculo.marca;

    const segundoH4 = document.createElement('h4');
    segundoH4.classList.add('card-text');
    segundoH4.textContent = vehiculo.modelo;

    const tercerH4 = document.createElement('h4');
    tercerH4.classList.add('card-text');
    tercerH4.textContent = vehiculo.kilometraje;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = vehiculo.precio;

    const contenedorBtns = document.createElement('div');
    contenedorBtns.classList.add('d-flex', 'justify-content-between', 'mt-4', 'contenedor-botones');

    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-success');
    boton1.innerHTML = '<i class="bi bi-cart4"></i>';

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-danger');
    boton2.innerHTML = '<i class="bi bi-trash3-fill"></i>';



    col.appendChild(card);

    card.appendChild(imagen);
    card.appendChild(cuerpoTarjeta);

    cuerpoTarjeta.appendChild(h3);
    cuerpoTarjeta.appendChild(h4);
    cuerpoTarjeta.appendChild(segundoH4);
    cuerpoTarjeta.appendChild(tercerH4);
    cuerpoTarjeta.appendChild(h2);
    cuerpoTarjeta.appendChild(contenedorBtns);


    contenedorBtns.appendChild(boton1);
    contenedorBtns.appendChild(boton2);

    contenedor.appendChild(col);
    eventsToVehiculo(col, vehiculo.id);

    return col;

    })
})






function createVehiculoCard(valorFoto, valorNombre, valorMarca, valorModelo, valorKm, valorPrecio) {


    const col = document.createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100', 'tarjeta');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top', 'w-100');
    imagen.setAttribute('src', valorFoto);


    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = valorNombre;

    const h4 = document.createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');
    h4.textContent = valorMarca;

    const segundoH4 = document.createElement('h4');
    segundoH4.classList.add('card-text');
    segundoH4.textContent = valorModelo;

    const tercerH4 = document.createElement('h4');
    tercerH4.classList.add('card-text');
    tercerH4.textContent = valorKm;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = valorPrecio;

    const contenedorBtns = document.createElement('div');
    contenedorBtns.classList.add('d-flex', 'justify-content-between', 'mt-4', 'contenedor-botones');

    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-success');
    boton1.innerHTML = '<i class="bi bi-cart4"></i>';

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-danger');
    boton2.innerHTML = '<i class="bi bi-trash3-fill"></i>';



    col.appendChild(card);

    card.appendChild(imagen);
    card.appendChild(cuerpoTarjeta);

    cuerpoTarjeta.appendChild(h3);
    cuerpoTarjeta.appendChild(h4);
    cuerpoTarjeta.appendChild(segundoH4);
    cuerpoTarjeta.appendChild(tercerH4);
    cuerpoTarjeta.appendChild(h2);
    cuerpoTarjeta.appendChild(contenedorBtns);


    contenedorBtns.appendChild(boton1);
    contenedorBtns.appendChild(boton2);

    return col;


};







// Esto es para comprar los vehiculos
function eventsToVehiculo(nuevaTarjeta, idVehiculo) {
    const deleteBtn = nuevaTarjeta.querySelector('.btn-danger');

    deleteBtn.addEventListener('click', () => {
        nuevaTarjeta.remove();

        let vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculos')) || [];

        vehiculosGuardados = vehiculosGuardados.filter(v => v.id !== idVehiculo)

        localStorage.setItem('vehiculos', JSON.stringify(vehiculosGuardados));
    });

    const shopBtn = nuevaTarjeta.querySelector('.btn-success');

    shopBtn.addEventListener('click', () => {
        const imagen = nuevaTarjeta.querySelector('img').src;
        const nombre = nuevaTarjeta.querySelector('h3').textContent;
        const marca = nuevaTarjeta.querySelector('h4').textContent;
        const precio = nuevaTarjeta.querySelector('h2').textContent;
        const nuevaTarjetaCarrito = createProducts(imagen, nombre, marca, precio);
        carrito.appendChild(nuevaTarjetaCarrito);

        const carritoDeProductos = {
            foto : imagen,
            nombre : nombre,
            marca : marca,
            precio : precio
        }

        let vehiculosGuardadosEnCarrito = JSON.parse(localStorage.getItem('carrito'))||[];
        vehiculosGuardadosEnCarrito.push(carritoDeProductos);

        localStorage.setItem('carrito', JSON.stringify(vehiculosGuardadosEnCarrito));


    })

}




document.addEventListener('DOMContentLoaded', () => {
    const vehiculosGuardadosEnCarrito = JSON.parse(localStorage.getItem('carrito'))||[];


    
    vehiculosGuardadosEnCarrito.forEach((vehiculo) => {
        const tarjeta = document.createElement('div');
    tarjeta.classList.add('product-card');

    const fila = document.createElement('div');
    fila.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col-md-4');

    const img = document.createElement('img');
    img.classList.add('car-img');
    img.setAttribute('src', vehiculo.foto);

    const col2 = document.createElement('div');
    col2.classList.add('col-md-8', 'cont-info');

    const h2 = document.createElement('h2');
    h2.textContent = vehiculo.nombre;


    const h3 = document.createElement('h3');
    h3.textContent = vehiculo.marca;

    const contPrecioBoton = document.createElement('div');
    contPrecioBoton.classList.add('button');

    const h4 = document.createElement('h4');
    h4.textContent = vehiculo.precio;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn-danger', 'btn');
    btnEliminar.textContent = 'X';

    tarjeta.appendChild(fila);

    fila.appendChild(col1);

    fila.appendChild(col2);

    col1.appendChild(img);

    col2.appendChild(h2);

    col2.appendChild(h3);

    col2.appendChild(contPrecioBoton);

    contPrecioBoton.appendChild(h4);

    contPrecioBoton.appendChild(btnEliminar);

    carrito.appendChild(tarjeta);

    btnEliminar.addEventListener('click', () => {
        tarjeta.remove();
        const precio = tarjeta.querySelector('h4').textContent;
        total = total - parseInt(precio);
        ValorTotal.textContent = total;
    })

    return tarjeta;

    });


     

})





btnCarrito.addEventListener('click', () => {
    contenedorCarrito.classList.toggle('active');
})

function createProducts(imagen, nombre, marca, precio) {


    const tarjeta = document.createElement('div');
    tarjeta.classList.add('product-card');

    const fila = document.createElement('div');
    fila.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col-md-4');

    const img = document.createElement('img');
    img.classList.add('car-img');
    img.setAttribute('src', imagen);

    const col2 = document.createElement('div');
    col2.classList.add('col-md-8', 'cont-info');

    const h2 = document.createElement('h2');
    h2.textContent = nombre;


    const h3 = document.createElement('h3');
    h3.textContent = marca;

    const contPrecioBoton = document.createElement('div');
    contPrecioBoton.classList.add('button');

    const h4 = document.createElement('h4');
    h4.textContent = precio;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn-danger', 'btn');
    btnEliminar.textContent = 'X';

    tarjeta.appendChild(fila);

    fila.appendChild(col1);

    fila.appendChild(col2);

    col1.appendChild(img);

    col2.appendChild(h2);

    col2.appendChild(h3);

    col2.appendChild(contPrecioBoton);

    contPrecioBoton.appendChild(h4);

    contPrecioBoton.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        tarjeta.remove();
        const precio = tarjeta.querySelector('h4').textContent;
        total = total - parseInt(precio);
        ValorTotal.textContent = total;
    })

    return tarjeta;

};