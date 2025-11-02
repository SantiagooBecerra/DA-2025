// Ejercicio 1
var nombre = "Santiago";
let edad = 18;
console.log("Hola, mi nombre es ", nombre, ", y tengo " + edad, " años.");

// Ejercicio 2
let numero = 30;
let string = "Palabra";
let booleano = false;
let malaDivision = "raro"/ 2; // NaN no es un número
let temperatura = null; // ausencia de valor
let saludo; // undefined, no tiene valor

console.log(typeof numero, typeof string, typeof booleano, malaDivision, temperatura, typeof saludo);

// Ejercicio 3
malaOperacion = "treinticinco" * 2; // NaN no es un número
console.log(malaOperacion);

// Ejercicio 4
numeros = [1,2,3,4,5];
console.log(numeros);
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.length = 6; 
console.log(numeros);

numeros.forEach((num) =>{
   console.log("El número es:  " + num);
})

let metodoFind = numeros.find(num => num === 4); 

strings = ["Hola", "mi", "nombre", "es", "Santiago"];
strings.push("!");
console.log(strings);
strings.pop();
console.log(strings);
let join = strings.join(" ");
console.log(join);

strings.forEach((str) =>{ 
   console.log("La palabra es:  " + str);
})
let metodoFindStr = strings.find(str => str === "Santiago"); 
console.log(metodoFindStr);

// Ejercicio 5
let perfil = {
   nombre: "Santiago",
   edad: 18,
   curso: "Sexto año"
};

console.log("Nombre:", perfil.nombre);
console.log("Edad:", perfil.edad);
console.log("Curso:", perfil.curso);

perfil.correo = "santi.charly.becerra@gmail.com";
console.log(perfil);

perfil.edad = 19;
console.log(perfil);

producto = {
   nombre: "Iphone 13",
   precio: 999.99,
   mostrarInfo: function() {
      console.log(this.nombre, this.precio);
   }
};
producto.mostrarInfo();