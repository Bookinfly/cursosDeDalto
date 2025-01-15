"use strict";

console.log(history);
console.log(history.go(1));//va al alemento 1 del historial
// console.log(history.go());//recarga la página
console.log(history.length);//tamaño del historial

// history.back();//vuelve para atrás

//history.foreward();//es comó volver adelante

history.pushState({nombvre:"pepe"}, "Pepe Online", "pepeonline");//mantiene el contenido pero cambia el url
history.replaceState({nombvre:"pepe2"}, "Pepe2 Online", "pepeonline2");//modifica pero no conserva

addEventListener("popstate", (e)=>{//detecta even to de cambio de URL
    console.log(e.state);
})