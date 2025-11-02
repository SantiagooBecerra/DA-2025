// numericos
let edad = 30;
let precio = 199.99;

// cadenas de texto string
let nombre = "Juan";
let ocupacion = 'Desarrollador';

// booleanos
let laCharlaEstaRecopada = true;
let hayAsadoAlFinal = false;

// Nan (Not a Number)
let malaDivision = "35"/ 2; // NaN no es un número

// null (ausencia de valor)
let temperatura = null; // ausencia de valor

let saludo; // undefined, no tiene valor
saludo = "Hola, ¿cómo estás?"; // ahora tiene valor

//Array (arreglo, lista, vector)
let comidasFavoritas = ["Asado", "Milanesa", "Pizza", "Hamburguesa"];
let numerosSorteados = [4, 8, 15, 16, 23, 42];

// Objeto (objeto literal)
let auto = {
    marca: "Toyota", //string
    km: 150000, // numérico
    disponible: true, // booleano
    bocina: () => console.log("Beep Beep!"), //Función o método
};
console.log(auto);
console.log("Mi auto es un " + auto.marca + " y tiene " + auto.km + " km.");
auto.bocina(); // Llamamos al método del objeto

// Datos mutables e inmutables
let noombre = "Carlos"; 
noombre [0] = "R"; // No se puede cambiar el primer carácter de la cadena
console.log(noombre); // Sigue siendo "Carlos"

let numeros = [1, 2, 3];
numeros[0] = 10; // Podemos cambiar el primer elemento del array
numeros.push(4); // Podemos agregar un nuevo elemento al final del array
console.log(numeros); // Ahora es [10, 2, 3, 4]

// Conversion de datos
//casting
let edadTexto = "30";
let edadNumero = Number(edadTexto); // de "30" a 30

// coercion
console.log("5" + 3); // "53" (coerción a string)
console.log("5" * 3); // 15 (coerción a número)

