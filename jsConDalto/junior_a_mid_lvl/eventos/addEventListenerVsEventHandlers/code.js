const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

button.onclick = ()=>{//event handlers fuera de uso, dan problemas
    alert("hola XD");
}

button2.addEventListener("click", saludar);//añadimos escucha de evento

// const saludar = ()=>{   NO FUNCIONA funciones flecha ni parametros---SOLO SINTAXIS DE FUnCTION COMUNES
//     alert("Hola manola");
// }

function saludar(){//sin parametros
    alert("holis");
}

//////////_____MEJOR______//////////////////////////////////////////////////////////
const saludoCorrecto = "Hola de forma correcta!";
button3.addEventListener("click", ()=>{//correcto y con parametros
    alert(saludoCorrecto);
});




////////////////////////////////////////////////////////////////////////////////////
button4.addEventListener("click",saludarUnaVez);

function saludarUnaVez(){
    alert("Buenos Días");
    button4.removeEventListener("click",saludarUnaVez)///borra el escuchador
}