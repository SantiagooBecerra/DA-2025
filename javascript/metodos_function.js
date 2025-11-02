// Método call
const persona = {nombre: "Mateo"};
function mostrarEdad(edad){
    console.log("Hola, soy " + this.nombre + " y tengo " + edad + " años.");
}
mostrarEdad.call(persona, 22);

// Método apply
function presentar(curso,escuela){
    console.log("Hola, soy " + this.nombre + ", estudio " + curso + " en " + escuela + ".");
}
presentar.apply(persona, ["Programación", "Mahatma Gandhi"]);

// Método bind
function saludar(){
    console.log( "Hola, " + this.nombre + "!");
}
const saludoLucia = saludar.bind({nombre: "Lucía"});
saludoLucia();

const user = {name: "Carlos"};
const dog = {name: "Firulais"};
function showInfo(likes, friends){
    return `${this.name} tiene ${likes} likes y ${friends} amigos.`;
}
console.log(showInfo.call(user, 150, 200));
console.log(showInfo.apply(dog, [15, 20]));
const newFunction = showInfo.bind(user, 300, 400);
console.log(newFunction());

// This: hace referencia a un contexto o a algo en particular dentro de una función o método.
// casos principales
const persona2 = {
    nombre: "Ana",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
persona2.saludar(); // "Hola, mi nombre es Ana"

function mostrar () {
    console.log(this);
}
mostrar(); // En un entorno global, 'this' se refiere al objeto global (window en navegadores)

const ejemplo = {
    valor: 42,
    mostrarValor:()=> console.log(this.valor)
};
ejemplo.mostrarValor(); // 'this' no se refiere a 'ejemplo' en funciones flecha