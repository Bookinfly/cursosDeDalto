class Objeto {
    constructor(){}
    hablar(){
        console.log("hola")
    }
}
//cuando creamos una clase e instanciamos el objeto, estamos creando un prototipo

//el nuevo prototipo tiene las nuevas propiedades y metodos sumados a que hereda el prototipo object
const objeto = new Objeto()

console.log(objeto)
console.log(objeto.__proto__)//el prototipo se esta heredando, no lo creamos solo le agragamos cosasy lo redifinimos

