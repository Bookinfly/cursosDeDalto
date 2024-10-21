/**
 * ESTRUCTURA DE PROMESA
 * Es un callback que llama a otros 2 callcbacks como parametro
 * seguido de los parámetros (resolve y reject) sigue una función flecha con su bloque de código
 */

let nombre = "Peeeedro";

const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "Pedro") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
})

//promesa.then()
//metódo de promesa que permite acceder a lo que esté guardado en resolve y reject

//La promesa es un objeto promise encapsulado
//No podemos acceder a sus valores directamente con conotación de punto

console.log(nombre);

promesa.then((resultado)=>{//si se resuelve por parametro nos da el resolve 
    console.log(resultado);
}).catch((e)=>{//por si falla, manejamos el error con catch y el por parametro podemos ingresar el error
    console.log(e);
})

