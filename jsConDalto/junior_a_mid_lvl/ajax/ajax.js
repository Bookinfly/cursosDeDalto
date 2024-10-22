//MODELO XMLHttpRequest

//forma antigua

const peticion = new XMLHttpRequest();

peticion.addEventListener("readystatechange", ()=>{
    if (peticion.readyState == 4 && peticion.status == 200)
    console.log(peticion.response)
})


peticion.open("GET","info.txt");//método para crear una petición

peticion.send();//método para enviarla 

// console.log(peticion);