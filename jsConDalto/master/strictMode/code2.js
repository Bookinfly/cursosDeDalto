"use strict";

// const obj = {nombre : "lucas"};

// Object.preventExtensions(obj);//prohibimos definir nuevas propiedades

// console.log(obj.nombre);

// obj.apellido = "Dalto";//error pero sin modo estricto no avisa

// const str = "ABC";

// str.minus = "abc";

// console.log(str.minus)

// function hablar (texto, texto){
//     console.log(texto)//si hay 2 parámetros iguales la función toma la última
// }

// hablar("pepo","pipo")

const obj1 = {
    nombre: "Nano"
}

delete obj1;

console.log(obj1.nombre)