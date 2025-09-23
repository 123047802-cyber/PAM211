const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const productosCaros = productos.filter(p => p.precio > 1000);
const nombres = productosCaros.map(p => p.nombre);
console.log(nombres);
