//Sintaxis basica una condion, una respuesta verdadera
if (condicion){
    // Código a ejecutar si la condición es verdadera
}

//Sintaxis con else: una condición, una respuesta para verdadero y otra para falso
if (condicion) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}

//Sintaxis con else if: múltiples condiciones y respuestas
if (condicion1) {
    // Código a ejecutar si la condición1 es verdadera
} else if (condicion2) {
    // Código a ejecutar si la condición2 es verdadera
} else {
    // Código a ejecutar si ninguna condición anterior es verdadera
}

//Ejemplo
let edad = 19;
let acceso= '';

if (edad < 18) {
    acceso = 'prohbido';
} else if (edad >= 16 && edad < 18) {  
    acceso = 'permitido con mayor de edad';
}   else {
    acceso = 'permitido';
}

// If ternario
condicion ? valorSiVerdadero : valorSiFalso;

//Ejemplo
4>10? ' es mayor' : 'es menor';
let acceso2 = (edad < 18) ? 'prohibido' : (edad >= 16 && edad < 18) ? 'permitido con mayor de edad' : 'permitido';

// Switch case
switch (expresión) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    default:
        // Código a ejecutar si la expresión no coincide con ningún caso
}

//Ejemplo
let edaad = 5;

switch (edaad) {
    case 10:
        console.log('tienes 10 años');
        break;
    case 15:
        console.log('tienes 15 años');
        break;
    case 5:
        console.log('tienes 5 años');
        break;
}

let fruta= "wefwef";
switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "banana":
        console.log("Es una banana");
        break; 
    default:
        console.log("Fruta desconocida");
}