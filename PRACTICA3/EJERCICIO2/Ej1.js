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
