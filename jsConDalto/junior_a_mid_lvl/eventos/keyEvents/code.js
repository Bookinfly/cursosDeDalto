const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".x");


input.addEventListener("keydown", () => console.log("presionada"));
input.addEventListener("keyup", () => console.log("soltada"));
// input.addEventListener("keypress", ()=> console.log("presionada y soltada"));
//keypress se dispara cuando una tecla es presionada y se mantiene presionada (aunque este evento está siendo deprecado y no se recomienda su uso).

//hola teclado