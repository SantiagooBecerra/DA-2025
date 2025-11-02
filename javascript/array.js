let numeros = [1,2,3,4,5]

let nombres = ["uno", "dos", "tres", "cuatro", "cinco"]

let objeto =  [
    { id:1, nombre: "uno" },
    { id:2, nombre: "dos" }, 
    { id:3, nombre: "tres" }, 
    { id:4, nombre: "cuatro" }, 
    { id:5, nombre: "cinco" }

]

//numeros.forEach((elemento,index) =>{
//    console.log("El número es: " + elemento);
//    console.log(`El número es: ${index}: ${elemento}`);
//})

objeto.forEach((elemento,index) =>{
    console.log(`El objeto es: ${index}: ${elemento.nombre}`);
})