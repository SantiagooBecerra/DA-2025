let objeto={
    propiedad1: "valor1",
    propiedad2: "valor2",
    metodo1: function() {
       return "Este es un método del objeto" + this.propiedad1;  // Utilizamoss this para acceder a la propiedad del objeto sin tener que poner el nombre del objeto
    }
};
console.log(objeto)
console.log("la propiedad tiene: "+objeto.propiedad1)
console.log(objeto.metodo1())
