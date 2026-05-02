// ejercicio 1: Crear datos de un jugador
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;


// ejercicio 2: crear sistema de puntaje
puntosBase = 100;
bonus = 50;
penalizacion = 20;
let puntajeTotal = puntosBase + bonus - penalizacion;

console.log(nombre, edad, vida, puntaje, estaActivo, puntajeTotal);


// ejercicio 3: Convertir texto a número
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
    let resultado = valor * 1; // Convertir valor a número
    resultado += 10; // Sumar 10

    mensaje.textContent = "el resultado es: " + resultado; // Mostrar el resultado en pantalla
});



// ejercicio 4: Validar edad mínima

edad = 10;
if (edad >=13) {
    console.log("puede jugar");
} else {
    console.log("no puede jugar todavía");
}
    

// ejercicio 5: Estado del jugador según vida

vida = -65;
if (vida > 70) {
    console.log("jugador en buen estado");
} else if (vida >= 30 && vida <= 70) {
    console.log("jugador herido");
} else if (vida >= 1 && vida <=29) {
    console.log("jugador en peligro");
} else if (vida >= 0) { 
    console.log("Game Over");
} else {
    console.log("el jugador se re murio");
}


// ejercicio 6: Menú de opciones

let opcion = "salir";

switch (opcion) {
    case "iniciar":
        console.log("juego iniciado");
        break;
    case "configuración":
        console.log("configuración abierta");
        break;
    case "creditos":
        console.log("mostrando créditos");
        break;
    default:
            console.log("salir del juego");
}


// ejercicio 7: Cuenta regresiva

let tiempo = 3;
while (tiempo > 0) {
    console.log(tiempo);
    tiempo--;
}
console.log("¡Comienza!");


// ejercicio 8: Sumar puntos por rondas

let puntajeTotal2 = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
        let puntosRonda = ronda * 10;
        console.log("Puntos obtenidos en la ronda " + ronda + ": " + puntosRonda);
        puntajeTotal2 = puntosRonda;
        console.log("Puntaje total acumulado: " + puntajeTotal2);
}

console.log(puntajeTotal2);


let valorporronda = 0;
let puntajeTotal3 = 0;
for (let ronda = 1; ronda <=5; ronda++) {

    if (ronda == 1 ) {
        valorporronda = 10;
    }
    else if (ronda == 2) {
        valorporronda = 20;
    }
    else if (ronda == 3) {
        valorporronda = 30;
    }
    else if (ronda == 4) {
        valorporronda = 40;
    }
    else if (ronda == 5) {
        valorporronda = 50;
    }
       let puntosRonda = ronda * valorporronda;
       console.log("Puntos obtenidos en la ronda " + ronda + ": " + puntosRonda);
        puntajeTotal3 += puntosRonda;
}

console.log(puntajeTotal3);


// ejercicio 9: Recorrer un inventario

const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log("Cantidad de objetos en el inventario:" + inventario.length);
console.log("El primer objeto del inventario es: " + inventario[0]);
console.log("El último objeto del inventario es: " + inventario[inventario.length - 1]);


// ejercicio 10: Mostrar todos los objetos

for (let i = 0; i < inventario.length; i++) {
    console.log("Objeto " + (i + 1) + ": " + inventario[i]);
}


// ejercicio 11: Agregar y quitar elementos

let mochila = ["linterna", "comida", "mapa"];

mochila.push("agua");
console.log("Mochila después de agregar agua: " + mochila);

mochila.pop();
console.log("Mochila después de quitar el último elemento: " + mochila);

// ejercicio 12: Buscar un objeto en el inventario

let inventario2 = ["llave"];

if (inventario2.includes("llave")) {
    console.log("La puerta se abre");
} else {
    console.log("Necesitás una llave");
}

// ejercicio 13: Crear una función de saludo

function saludarUsuario(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al juego.");
}

saludarUsuario("Milo");


// ejercicio 14: Función para calcular daño

function calcularVidaRestante(vida, danio) {
    let vidaRestante = vida - danio;
    return vidaRestante;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// ejercicio 15: Usar arrow functions

const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 5));

// ejercicio 16: Crear un objeto jugador

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log("Nombre del jugador: " + jugador.nombre);
console.log("Vida del jugador: " + jugador.vida);
console.log("Energía del jugador: " + jugador.energia);
console.log("Nivel del jugador: " + jugador.nivel);
console.log("Inventario del jugador: " + jugador.inventario.join(", "));


// ejercicio 17: Modificar propiedades de un objeto

 const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

function subirNivel(jugador2) {
    jugador2.nivel += 1;
    console.log("¡Nivel subido! Ahora estás en el nivel " + jugador2.nivel);
}

function ganarMonedas(jugador2, cantidad) {
    jugador2.monedas += cantidad;
    console.log("¡Has ganado " + cantidad + " monedas! Total de monedas: " + jugador2.monedas);
}

subirNivel(jugador2);
ganarMonedas(jugador2, 50);