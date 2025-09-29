const tablaBody = document.getElementById('#tabla-productos tbody');
 
document.addEventListener('DOMContentLoaded', ()=>{
const vehiculosGuardadosEnCarrito = JSON.parse(localStorage.getItem('vehiculosCarrito'))||[];
vehiculosGuardadosEnCarrito.forEach(vehiculo=>{
    const fila = document.createElement('tr');

    const tdImagen = document.createElement('td');
    tdImagen.textContent = vehiculo.foto;

     const tdNombre = document.createElement('td');
     tdNombre.textContent = vehiculo.nombre;

      const tdMarca = document.createElement('td');
     tdMarca.textContent = vehiculo.marca;

      const tdModelo = document.createElement('td');
    tdModelo.textContent = vehiculo.modelo;

     const tdKilometraje = document.createElement('td');
    tdKilometraje.textContent = vehiculo.kilometraje;

     const tdPrecio = document.createElement('td');
    tdPrecio.textContent = vehiculo.precio;

    fila.appendChild(tdImagen);
    fila.appendChild(tdNombre);
    fila.appendChild(tdMarca);
    fila.appendChild(tdModelo);
    fila.appendChild(tdKilometraje);
    fila.appendChild(tdPrecio);

    tablaBody.appendChild(fila);  


})

});