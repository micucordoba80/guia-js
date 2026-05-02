//ejercicio 18: Array de objetos

const personajes = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].nombre + " es " + personajes[i].tipo + " y está en nivel " + personajes[i].nivel);
}

// ejercicio 19: Filtrar personajes por nivel

const personajesFuertes = personajes.filter((personaje) => {
    return personaje.nivel >= 3;
});

console.log("Personajes con nivel 3 o superior:");
personajesFuertes.forEach((personaje) => {
    console.log(personaje.nombre + " - Nivel: " + personaje.nivel);
});


// ejercicio 20: Obtener solo los nombres

const nombres = personajes.map((personaje) => {
    return personaje.nombre;
});

console.log(nombres);