// Trabajo Práctico 7 - Funciones

function saludarAUser (nombre) {
    console.log("Hola, " + nombre+ "! Bienvenido." );
}
saludarAUser("Santi");

function  calcularArea(base, altura) {
    console.log("El área del rectángulo es: " + (base * altura));
}
calcularArea(5, 10);

function esPar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}
esPar(7);
esPar(12);

function presentarEdad(edad=0,nombre="Anónimo") {
    console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
}
presentarEdad();
presentarEdad(25, "Lucía");

function hacerTacos(cantidad){
    return '🌮'.repeat(cantidad);
}
console.log("Tacos hechos: " + hacerTacos(5)); 

function obtenerIVA(precio) {
    return precio * 0.21;
}
let iva = obtenerIVA(100);
console.log("El IVA es " + iva);

const saludar = () => console.log("¡Hola Coders!");
saludar();

const tripleDe = (num) => console.log("el trple de " + num + " es " + num * 3);
tripleDe(4);

const restar = (a, b) => "La resta entre " + a + " y " + b + " es " + (a - b);
console.log(restar(10, 4));

const estaAprobado = (nota) => nota >= 7 ? true : false;
console.log(estaAprobado(7));
console.log(estaAprobado(5));

const aMayusculas = (mensaje) => mensaje.toUpperCase();
console.log(aMayusculas("hola mundo"));

const horaActual = () => {
    const fecha = new Date();
    return "La hora actual es: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
}
console.log(horaActual());