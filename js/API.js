// aca vamos a conectar con la API en este caso nuestro json server

const url = 'http://localhost:4000/clientes';

// esta funcion es para crear un nuevo cliente
export const nuevoCliente = async cliente => {
    
    try { // por default FETCH envia un GET por lo tanto tenemos que mandar un objeto con las opciones para cambiarlo
        await fetch(url, { // LE PASAMOS UN OBJETO DE CONFIGURACION DONDE EN UN NUEVO CLIENTE SIEMPRE EL METODO ES POST PARA CREARLO
            method: 'POST',
            body: JSON.stringify(cliente), // tambien le mandamos al contenido de esta peticion POST un body, hacia el contenido de la url, donde este se envia como string o como objeto
            headers: { // esta es la informacion de que tipo de datos estamos enviando
                'Content-Type': 'application/json' // donde este headers varia segun lo que enviamos al servidor
            }
        });
        
        // una vez completado el await la consulta al servidor mandamos al usuario al index
        window.location.href = 'index.html'
        
    } catch (error) {
        console.log(error);
    };
};

// para obtener todos los clientes

export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes; // retornamos el json de clientes para consumirlo en otro archivo
    } catch (error) {
        console.log(error);
    }
};

// vamos a eliminar un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, { // nuevamente por default el fetch envia un get pero especificamos que sea un DELETE para eliminar un registro
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
};

// aca vamos a obtener un cliente por el ID para luego editarlo
export const obtenerUnCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
};

// reescribimos un registro
export const editarCliente = async cliente => {
    // console.log(cliente);
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', // metodo para reescribir un registro, tambien esta PATCH pero PUT es mas completo
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // una vez realizado el await sin problemas reedireccionamos al usuario al index.html
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
};