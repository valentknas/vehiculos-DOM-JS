const { createElement } = require("react");

const form = document.getElementById('form-vehiculo');
const contenedor = document.getElementById('contenedor-tarjetas');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

const valorFoto = document.getElementById('foto-input').value;
const valorNombre = document.getElementById('nombre-input').value;
const valorMarca = document.getElementById('marca-input').value;
const valorModelo = document.getElementById('modelo-input').value;
const valorKm = document.getElementById('km-input').value;
const valorPrecio = document.getElementById('precio-input').value;



});

function createVehiculoCard () {
    const col = createElement('div');
    col.classList.add('col-md-6');
    col.classList.add('item-vehiculo');

    const card = createElement('div');
    card.classList.add('card');
    card.classList.add('h-10');


    const imagen = createElement('img');
    imagen.classList.add('card-img-top');
    imagen.classList.add('w-100');
    imagen.setAttribute('alt','foto-vehiculo');

    const cuerpoTarjetas = createElement('div');
    cuerpoTarjetas.classList.add('card-body');

    const h3 = createElement('h3');
    h3.classList.add('card-title');
    
    const h4 = createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');

    const segundoh4 = createElement('h4');
    segundoh4.classList.add('card-text');

    const tercerh4 = createElement('h4');
    tercerh4.classList.add('card-text');

    const h2 = createElement('h2');
    h2.classList.add('text-success');

    const contenedorBtns = createElement('div');
    contenedorBtns.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const boton1 = createElement('button');
    boton1.classList.add('btn', 'btn-success');

    const boton2 = createElement('button');
    boton2.classList.add('btn', 'btn-danger');

    contenedor.appendChild(col);
    col.appendChild(card);

    card.appendChild(imagen);
    cuerpoTarjetas.appendChild(h3);
    cuerpoTarjetas.appendChild(h4);
    cuerpoTarjetas.appendChild(segundoh4);
    cuerpoTarjetas.appendChild(tercerh4);


    contenedorBtns.appendChild(boton1);
    contenedorBtns.appendChild(boton2);




    


    


};