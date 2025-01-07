"use strict"

const addZeros = (n) => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let horas = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    console.log(horas)
    console.log(minutos)
    console.log(segundos)
    document.querySelector(".hora").textContent = horas;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}

actualizarHora()

setInterval(actualizarHora, 1000);//consume muchos recursos, hay librerías mejores