<<<<<<< HEAD
|const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

const { nombre, edad, direccion: { ciudad } } = persona;

const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje);
document.getElementById('mensaje').textContent = mensaje;
=======
const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

const { nombre, edad, direccion: { ciudad } } = persona;

const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje);
document.getElementById('mensaje').textContent = mensaje;
>>>>>>> b3d4a3f9e3b1b6672218dc41041e95fc54c8f025
