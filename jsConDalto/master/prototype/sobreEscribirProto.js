class Objeto {
    constructor(){}
    hablar(){
        console.log("hola")
    }
}

const objeto = new Objeto()

//sobrescribo metodo hablar del prototipo en el objeto (NO EN EL PROTOTIPO)
// objeto.hablar = ()=>{
//     console.log("modificado afuera")
// }

//sobrescribo en el prototipo
// objeto.__proto__.hablar = ()=>{
//     console.log("modificado adentro")
// }
// console.log(objeto)
// objeto.hablar()

let arr = []

arr.__proto__ = objeto; //le heredamos el prototipo a un array
arr.hablar()

