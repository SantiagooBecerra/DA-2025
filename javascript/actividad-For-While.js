// PARTE I - CICLO FOR
for (let i = 1; i <= 10; i++){
    console.log("Número: " + i);
};

for (let ii=5; ii>=0; ii--){
    console.log("Número: " + ii);
};

for (j=2; j<=12; j+=2){
    console.log("Número par: " + j);
};

for (m=1; m<=3; m++){
    console.log("voy por mi cafe n°" + m);
};

let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
}
console.log("Suma total del 1 al 5: " + suma);

// PARTE II - CICLO WHILE
const readline = require('readline-sync');

let numeroSecreto = 7;
let numeroIngresado;
while (numeroIngresado !== numeroSecreto) {
    numeroIngresado = parseInt(readline.question("Adivina el numero secreto (entre 1 y 10): "));
};
console.log("¡Felicidades! Has adivinado el número secreto.");

let condicion = 20;
while (condicion<=50){
    console.log("multiplo de 5: " + condicion);
    condicion +=5;
}
progreso = 0;
while (progreso <= 100){
    console.log("Progreso: " + progreso + "%");
    progreso += 10;
};

// PARTE III - CICLO DO WHILE

// 4. Validación de edad mínima
let edad;
do {
    edad = parseInt(readline.question("Ingrese su edad (debe ser >= 18): "));
    if (isNaN(edad) || edad < 18) {
        console.log("Edad inválida o menor a 18. Intente nuevamente.");
    }
} while (edad < 18 || isNaN(edad));
console.log("Edad validada. Acceso permitido.");

// 5. Suma hasta el cero (bucle centinela)
let numero;
let sumaTotal = 0;
do {
    numero = parseFloat(readline.question("Ingrese un número (0 para terminar): "));
    if (!isNaN(numero) && numero !== 0) {
        sumaTotal += numero;
    }
} while (numero !== 0);
console.log("Suma de los números ingresados: " + sumaTotal);

// 6. Menú simple
let opcion;
do {
    console.log("\n--- Menú ---");
    console.log("1. Ver estado");
    console.log("2. Configuración");
    console.log("3. Salir");
    opcion = parseInt(readline.question("Elija una opción (1-3): "));
    switch (opcion) {
        case 1:
            console.log("Estado: Todo funciona correctamente.");
            break;
        case 2:
            console.log("Configuración: No hay opciones disponibles por ahora.");
            break;
        case 3:
            console.log("Saliendo del menú...");
            break;
        default:
            console.log("Opción inválida. Intente nuevamente.");
    }
} while (opcion !== 3);
