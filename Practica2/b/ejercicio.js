<<<<<<< HEAD
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const productosCaros = productos.filter(p => p.precio > 1000);
const nombres = productosCaros.map(p => p.nombre);
console.log(nombres);
=======
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const productosCaros = productos.filter(p => p.precio > 1000);
const nombres = productosCaros.map(p => p.nombre);
console.log(nombres);
>>>>>>> b3d4a3f9e3b1b6672218dc41041e95fc54c8f025
