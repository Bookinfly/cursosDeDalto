"use strict"

// console.log(localStorage);

// let nombre = localStorage.setItem("nombre", "pepe");//pares clave valor

// console.log(localStorage);

// let llamada = localStorage.getItem("nombre")

// let apellido = sessionStorage.setItem("apellido", "Spopovich");

// console.log(sessionStorage);

// let llamada2 = sessionStorage.getItem("apellido");

// console.log(llamada + " " + llamada2);

// setTimeout(()=>{
//     let nombre2 = localStorage.removeItem("nombre");

//     let limpiar = sessionStorage.clear();
// }, 2000)


////////////////////////////////////////////

const modal = document.querySelector(".modal-overlay");

const idioma = localStorage.getItem("idioma");


const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click", ()=>{
        localStorage.setItem("idioma", "en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click", ()=>{
        localStorage.setItem("idioma", "es");
        cerrarModal();
    });
}

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forewards";
    setTimeout(()=>modal.style.display = "none", 1000);
}


if (idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}