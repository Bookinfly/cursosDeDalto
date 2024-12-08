//prototype chain

let objeto = {
    "propiedad": "datos"
};
console.log("console.log(objeto);")
console.log(objeto);

console.log("console.log(objeto.__proto__);")
console.log(objeto.__proto__);

console.log("console.log(objeto.__proto__.__proto__);")
console.log(objeto.__proto__.__proto__);//null porque object no tiene prototipo porque es el prototipo base



// En JavaScript, casi todo es un objeto y todos los objetos descienden del prototipo Object.
// Además, pueden existir otros prototipos intermedios que descienden de Object y agregan o modifican datos y métodos para crear objetos basados en esos prototipos.


let variable = "string";
console.log("console.log(variable);")
console.log(variable);

console.log("console.log(variable.__proto__);")
console.log(variable.__proto__);//prototipo string

console.log("console.log(variable.__proto__.__proto__);")
console.log(variable.__proto__.__proto__);//mas adentro esta el prototipo object

const f = function(){};

console.log("mirando una funcion")
console.log(f.__proto__);//accedcer a prototipos ya creados
console.log(f);
console.log(f.prototype);//acceder a los que nosotros creamos
//no usar ()=>{}
console.log(f.prototype.__proto__);//retrocedemos hasta object


console.log("________________________________________________")

let array = [variable, 321, undefined];
console.log(array)
array = array.reverse()
console.log(array)
console.log(array.__proto__)