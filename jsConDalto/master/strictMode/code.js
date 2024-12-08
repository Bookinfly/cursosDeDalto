"use strict";

let name1 = "Nahuel"

console.log(name1)

nombre = "Nahuel"//error

console.log(nombre)

const obj = {}

//forma alternativa de definir propiedades
Object.defineProperty(obj, 'nombre', {value: 'pedro', writable : false})// writable : false no deja sobrescribir

console.log(obj.nombre)

obj.nombre = "Pepe"

console.log(obj.nombre)


