// Estructura básica de un ciclo while
while (condicion){
    // Bloque de código a repetir
    // Hace algo para que la condicion eventualmente se deje de cumplir
};

let vuelta = 1;
while (vuelta <= 5){ // condición
    console.log("Vuelta número: " + vuelta); // Hacer algo
    vuelta++; // loop infinito si no se incrementa vuelta
};

// Ciclo do while
// Estructura básica de un ciclo do while
do {
    // Bloque de código a repetir
    // Hace algo para que la condicion eventualmente se deje de cumplir
} while (condicion);

// Ejemplo básico
let numero =  1;
do {
    console.log("Número: " + numero); // Hacer algo
    numero++; // loop infinito si no se incrementa numero
} while (numero <= 5); // condición

