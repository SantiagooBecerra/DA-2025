const persona = {
    nombre: "Ana",
    decirNombre: function() {
        console.log("Hola, soy " + this.nombre);
    },

};
persona.decirNombre(); // "Hola, soy Ana"
const alumno  = {
    nombres: "Luis",
    decirNombres: () => {
        console.log("Hola, soy " + this.nombre);
    },
};

alumno.decirNombres(); // "Hola, soy undefined"