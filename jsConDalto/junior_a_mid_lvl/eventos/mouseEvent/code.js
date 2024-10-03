const boton = document.querySelector(".button");
const boton2 = document.querySelector(".up");
const boton3 = document.querySelector(".down");

const div = document.querySelector(".div");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");


boton.addEventListener("dblclick", ()=>alert("hiciste doble click!!!🥵"))//evento doble click

boton2.addEventListener("mouseup", ()=>alert("mouseup"))//evento presione pero no necesita que suelte


boton3.addEventListener("mousedown", ()=>alert("mousedown"))//evento suelta pero no importa si inicio a presionar afuera


div.addEventListener("mouseover", ()=>alert("pasaste por mi div 🥵"))//evento de pasar por encima

boton.addEventListener("mouseout", ()=>alert("te fuiste de mi boton 😒"))//evento dejar de pasar por encima

boton.addEventListener("contextmenu", ()=>alert("tocaste click derecho 😒"))//evento click derecho

div2.addEventListener("mousemove", ()=>alert("moviste el raton por aqui🥵🥵🥵🥵"))//

div3.addEventListener("mouseleave", ()=>alert("te vas..."))//se mueve hacia afuera



