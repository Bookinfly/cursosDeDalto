
// Es un metodo que recibe 2 parametros, el primero una función y el segundo un tiempo en milisegundos, en ese tiempo se ejecuta
setTimeout(()=>{
    console.log("Hola Rancio")
}, 2000)


const saludar = ()=>{
    console.log("seguis aca?");
}

setTimeout(saludar, 5000);//otra forma

const despachar = setTimeout(()=>{
    console.log("andate");
},6000);

clearTimeout(despachar);//anula el temporizador

const intervalo = setInterval(()=>{
    console.log("Ya llegamos?");
}, 500); //lo ejecuta infinitas veces en un intervalo regular

setTimeout(()=>{
    clearInterval(intervalo);//anula el temporizador de intervalos
}, 10000)//si lo hacemos dentro de un setTimeout podemos cortar el intervalo en un tiempo determinado

console.log("Los temporizadores consumen muchos recursos, usalos cuando corresponda")
