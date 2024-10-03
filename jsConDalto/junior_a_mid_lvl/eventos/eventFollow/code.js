const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");
const rojo = document.querySelector(".rojo");

button.addEventListener("click", (e)=>{
    console.log("Click en un boton")
});

contenedor.addEventListener("click", (e)=>{
    console.log("Click en un contenedor azul");
},true);

rojo.addEventListener("click", (e)=>{
    console.log("Click en un contenedor rojo");
},true);//cambiamos el flujo de eventos agregando el parametro true al contenedor que contiene a al otro, si hay varios niveles, debemos poner true en todos menos el mas especifico

const button2 = document.querySelector(".button2");
const green = document.querySelector(".green");
const black = document.querySelector(".black");

button2.addEventListener("click", (e)=>{
    console.log("Click en un boton");
    e.stopPropagation();//detiene propagacion sobre el evento guardado en el parametro e
});

green.addEventListener("click", (e)=>{
    console.log("Click en un contenedor verde");
});

black.addEventListener("click", (e)=>{
    console.log("Click en un contenedor negro");
});