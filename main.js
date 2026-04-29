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

console.log(nombre, edad, vida, puntaje, estaActivo, puntajeTotal);