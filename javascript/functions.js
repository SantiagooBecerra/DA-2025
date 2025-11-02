//Estructura basica
function sumar (a, b) {
    return a + b;
};
sumar (5,7);

//funcion expresada
let hacerSushi = function (ingredientes) {
    return "Aquí tiene su sushi de " + ingredientes;
}
hacerSushi ("salmón");

//funcion
function nombre (a="Juan", b="Perez") {
    return "Hola" + a + b
}

//funcion flecha
// => el símbolo de flecha indica que es una función flecha
let sumar = (a, b) => a + b;

let doble = n => n * 2; // Si hay un solo parámetro, se pueden omitir los paréntesis

let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0; // Si el resto es 0, entonces a es múltiplo de b
}

