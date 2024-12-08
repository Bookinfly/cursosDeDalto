"use strict";

// function Persona2(nombre){
//     this.nombre = nombre;
//     this.saludar = function(){
//         console.log(`Hola ${this.nombre}`)
//     }
// }

// const obj1 = new Persona2("Pucho");

// obj1.saludar()


// //asi funciona
// function persona(nombre) { 
//     this.nombre = nombre;
//     this.saludar = function() {
//         console.log(`Hola ${this.nombre}`);
//     }
// }
// const obj = new persona("Pocho");
// obj.saludar();

"use strict";

function Persona(nombre) {
    this.nombre = nombre; // Error: Cannot set property 'nombre' of undefined
}

const obj = Persona("Pocho"); // Falta 'new'
