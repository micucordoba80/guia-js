// ejercicio 27: 

¿Cuándo usarías let?
lo usaria cuando el valor se puede modificar

¿Cuándo usarías const?
lo usaria cuando el valor no se pueda cambiar

¿Por qué actualmente se recomienda evitar var?
La palabra clave var se utilizaba en versiones antiguas de JavaScript, pero hoy en día se recomienda evitarla debido a varios problemas, uno por ejemplo, las variables se declaraban antes, al principio de la ejecucion del codigo.


// ejercicio 28:

function mostrarNombre() {
 let nombre = "Local";
 console.log(nombre);
}

mostrarNombre();
console.log(nombre);

¿Qué se muestra primero?
Lo primero que se va a motrar va ser el "Local" que está dentro de la variable de nombre

¿Qué se muestra después?
después se va a mostrar es un error porque la variable ya fue declarada

¿Por qué?
El scope es el lugar donde se guarda la variable, significa que solo puede usarse dentro de la funcion en donde fue creada. Por lo tanto se si escribe por fuera, java no lo reconocera y tirará un error.


// ejercicio 29:

¿Cuándo conviene usar un array y cuándo conviene usar un objeto?
Un array conviene usarlo cuando se tenga que hacer una lista de cosas, items, etc, por otro lado un objeto es para la descripción del personaje

ejemplos:
Un Array: const inventario = ["espada", "poción", "llave"];
Un Objeto: const jugador = {
            nombre: "Luna",
            vida: 100,
            nivel: 3
            };


// ejercicio 30:

boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});

¿Qué es un evento en JavaScript?
Un evento en JavaScript es una acción o suceso que ocurre en una página web y que el programa puede detectar para ejecutar código en respuesta, es decir, permite que la página sea interactiva, ya que hace posible que el programa responda a las acciones del usuario o a cambios en el entorno.

¿Qué elemento escucha el evento?
El elemento que escucha el evento es boton. Es decir, ese objeto está “esperando” a que ocurra algo.

¿Qué evento se está escuchando?
El evento que se está escuchando es "click". Esto significa que el programa detecta cuando el usuario hace clic sobre ese botón.

¿Qué acción se ejecuta?
Cuando ocurre, se ejecuta la función que está dentro.
la acción es: console.log("El usuario hizo clic");

¿Dónde podríamos aplicar esto en una página web o videojuego?
En ambas. 

En una página web: para un botón de “Enviar”, “Comprar”, “Iniciar sesión”, etc.
En un videojuego: para acciones como atacar, saltar, abrir un cofre o iniciar el juego cuando el jugador hace clic.