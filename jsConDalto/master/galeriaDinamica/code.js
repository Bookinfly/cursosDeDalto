"use strict";

const imagen = document.getElementById('imagen');

imagen.addEventListener("change", (e)=>{
    leerURL(imagen.files)
})

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
