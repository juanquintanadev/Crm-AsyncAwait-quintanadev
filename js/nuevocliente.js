// importaciones de funciones
import {mostrarAlerta, validar} from './funciones.js';

import {nuevoCliente} from './API.js';

// creamos un IIFE para aislar variables y funciones

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        // creamos las variables de los inputs del form
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {nombre, email, telefono, empresa}; // object literal enhancement. es nombrar las key y values de una sola palabra porque son el mismo nombre

        if(validar(cliente)) { // esta funcion retorna true o false dependiendo de que los campos esten vacios o todos completos
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        };

        // console.log('campos llenos');

        nuevoCliente(cliente);
    };
})();