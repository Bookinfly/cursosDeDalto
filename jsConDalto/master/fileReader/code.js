"use strict";

const archivo = document.getElementById('archivo');
const imagen = document.getElementById('imagen');
archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files)
})
imagen.addEventListener("change", (e)=>{
    leerURL(imagen.files)
})

const leerArchivo = ar => {
    for(var i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", (e)=>{
            console.log(e.currentTarget.result)
        })
    }
}

// const reader = new FileReader();

// console.log(reader);

const leerURL = ar => {
    for(var i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", (e)=>{
            let newImg = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += newImg;
        })
    }
}
