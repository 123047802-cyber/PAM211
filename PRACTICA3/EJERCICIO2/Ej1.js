<<<<<<< HEAD
function verificarUsuario(usuario) {
  return new Promise((resolve) => {
    const acceso = usuario === "admin";
    resolve(acceso);
  });
}

verificarUsuario("admin")
  .then(acceso => {
    console.log(acceso ? "Acceso concedido" : "Acceso denegado");
  });

verificarUsuario("Ivan")
  .then(acceso => {
    console.log(acceso ? "Acceso concedido" : "Acceso denegado");
  });
=======
function verificarUsuario(usuario) {
  return new Promise((resolve) => {
    const acceso = usuario === "admin";
    resolve(acceso);
  });
}

verificarUsuario("admin")
  .then(acceso => {
    console.log(acceso ? "Acceso concedido" : "Acceso denegado");
  });

verificarUsuario("Ivan")
  .then(acceso => {
    console.log(acceso ? "Acceso concedido" : "Acceso denegado");
  });
>>>>>>> b3d4a3f9e3b1b6672218dc41041e95fc54c8f025
