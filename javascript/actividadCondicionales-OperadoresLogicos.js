// Ejercicios de if ternario
let numero = 10;
let mensaje = (numero % 2 === 0) ? "El número es par" : "El número es impar";
console.log(mensaje); // "El número es par"

let usuarioActivo = true;
let estado = (usuarioActivo == true) ? "Conectado" : "Desconectado";
console.log(estado); // "Conectado"

let nota = 7;
let resultado = (nota >= 6) ? "Aprobado" : "Reprobado";
console.log(resultado); // "Aprobado"

let diaDescanso = "domingo";
descanso = (diaDescanso === "sábado" || diaDescanso === "domingo") ? "Es día de descanso" : "Es día laboral";
console.log(descanso); // "Es día de descanso"

let edad = 12;
let acceso = (edad>=13) ? "Permitido" : "Restringido";
console.log(acceso); // "Acceso denegado"

// Ejercicios de switch case
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "miércoles":
        console.log("Mitad de semana");
        break; 
    case "sabado"|| "domingo":
        console.log("Fin de semana");
        break;
    case "martes"|| "jueves"|| "viernes":
        console.log("Día común");
        break;
    default:
        console.log("Día de la semana no reconocido");
}


let color = "verde";
switch (color) {
    case "verde":
        console.log("sigue");
        break;
    case "amarillo":
        console.log("precaución");
        break;
    case "rojo":
        console.log("detente");
        break;
    default:
        console.log("color desconocido");
}


let mes = "enero" ;
switch (mes) {
    case "enero":
        console.log("31 días");
        break;
    case "febrero":
        console.log("28 o 29 días");
        break;
    case "marzo":
        console.log("31 días");
        break;
    case "abril":
        console.log("30 días");
        break;
    case "mayo":
        console.log("31 días");
        break;
    case "junio":
        console.log("30 días");
        break;
    case "julio":
        console.log("31 días");
        break;
    case "agosto":
        console.log("31 días");
        break;
    case "septiembre":
        console.log("30 días");
        break;
    case "octubre":
        console.log("31 días");
        break;
    case "noviembre":
        console.log("30 días");
        break;
    case "diciembre":
        console.log("31 días");
        break;
    default:
        console.log("Mes no reconocido");
}

nota = "B";
switch (nota) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bueno");
        break;
    case "C":
        console.log("Regular");
        break;
    case nota != "A" && nota !="B" && nota !="C":
        console.log("Desaprobado");
        break;
    default:
        console.log("Calificación no reconocida");
}

opcion = 3;
switch (opcion) {
    case 1:
        console.log("inicio");
        break;
    case 2:
        console.log("configuración");
        break;
    case 3:
        console.log("salir");
        break;
    default:
        console.log("opción no válida");
}