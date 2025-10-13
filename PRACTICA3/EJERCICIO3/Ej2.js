<<<<<<< HEAD
function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const respuesta = await simularPeticionAPI();
        console.log("Procesando...");
        console.log("Resultado de la petición:", respuesta);
    } catch (error) {
        console.log("Error", error.message);
    }
}

=======
function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const respuesta = await simularPeticionAPI();
        console.log("Procesando...");
        console.log("Resultado de la petición:", respuesta);
    } catch (error) {
        console.log("Error", error.message);
    }
}

>>>>>>> b3d4a3f9e3b1b6672218dc41041e95fc54c8f025
obtenerDatos();