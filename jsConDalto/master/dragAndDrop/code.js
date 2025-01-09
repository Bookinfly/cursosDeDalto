

"use strict";

const circulo = document.querySelector(".circulo");

const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart", (e)=>{
    // console.log(e.dataTransfer);
    e.dataTransfer.setData("clase", e.target.className);//crea un par clave valor
    // console.log(e.dataTransfer.getData("clase"));
});
// circulo.addEventListener("drag", ()=>console.log(2));
// circulo.addEventListener("dragend", ()=>console.log(3));

rectangulo.addEventListener("dragenter", ()=>console.log(1));
rectangulo.addEventListener("dragover", (e)=>{
    e.preventDefault();
    console.log(2);
});//debemos prevenir el comportamiento por defecto de dragover que NO permite soltar (drop) para poder usar el evento drop sobre ese bloque
rectangulo.addEventListener("drop", (e)=>{
    console.log(e.dataTransfer.getData("clase"));
});
// rectangulo.addEventListener("drop", ()=>console.log(3));
rectangulo.addEventListener("dragleave", ()=>console.log(4));
