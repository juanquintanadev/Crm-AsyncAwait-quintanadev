import {obtenerUnCliente, editarCliente} from './API.js';
import {validar, mostrarAlerta} from './funciones.js';

(function() {

    // selectores de los inputs
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id'); // este input de id esta hidden

    document.addEventListener('DOMContentLoaded', async () => {
        // vamos a asignar en una variable el contenido de la url que cargamos al editar un cliente
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        const cliente = await obtenerUnCliente(idCliente);
        // console.log(cliente);

        mostrarCliente(cliente);

        // vamos a agregar un evento de submit al formulario de edicion
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id:  parseInt(idInput.value),
        };

        if(validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        };

        // una vez pasada la validacion del formulario vamos a reescribir el registro
        editarCliente(cliente);

    };

    function mostrarCliente(cliente) {
        // console.log(cliente);
        const {nombre, email, telefono, empresa, id} = cliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id; // este va al hidden input del id para guardar su value
    };

})();
