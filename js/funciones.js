// aqui van todas las funciones que vamos ausar en el proyecto

export function mostrarAlerta(mensaje) {
    const alertaExiste = document.querySelector('.bg-red-100');

    if(!alertaExiste) {
        const alerta = document.createElement('P');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!!!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    };
};

export function validar(obj) {

    // otro ejemplo para validar un formulario que no contenga campos vacios, al negar toda esta condicion, obtenemos un true cuando alguno de los campos esta vacio
    return !Object.values(obj).every(campo => campo !== '');
};