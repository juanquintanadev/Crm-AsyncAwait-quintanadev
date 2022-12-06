
import {obtenerClientes, eliminarCliente} from './API.js';

(function() {
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes);

    listado.addEventListener('click', confirmarEliminar);

    // al utilizar delegation pasamos un evento que contiene la informacion de donde estamos haciendo click dentro del cuadro de listado de clientes
    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            const id = parseInt(e.target.dataset.cliente);
            // console.log(id);

            const confirmar = confirm('¿Desea eliminar este registro?');
            
            if(confirmar) {
                eliminarCliente(id);
            };

        };
    };

    async function mostrarClientes() { // como figuarba el promise pending entonces
        const clientes = await obtenerClientes(); // utilizamos async await para esperar al fecth y su consulta
        // console.log(clientes);

        clientes.forEach(cliente => {
            const {nombre, email, telefono, empresa, id} = cliente;

            // al ser con tailwind esto utiliza tablas entonces tenemos que crear dentro del tbody un tr
            const row = document.createElement('TR');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
            listado.appendChild(row);
        });
    };
})();