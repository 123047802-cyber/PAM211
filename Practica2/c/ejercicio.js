const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 }
];

const personaLuis = personas.find(p => p.nombre === "Luis");
console.log(personaLuis);

personas.forEach(p => {
  console.log(`${p.nombre} tiene ${p.edad} años`);
});

const totalEdades = personas.reduce((acum, p) => acum + p.edad, 0);
console.log(`Total de edades: ${totalEdades}`);
