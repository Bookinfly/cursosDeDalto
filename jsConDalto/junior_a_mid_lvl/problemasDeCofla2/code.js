const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje, prevRes;
    try {
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)){
            throw "gracioso..."
        }
        resultado = verificarAprovacion(8,6,prevRes);
        mensaje = definirMensaje(prevRes);
    } catch(e) {
        resultado = "¿SOS COMICO?"
        mensaje = "¿Comó va a hacer eso?";
    }
    abrirModal(resultado[0], mensaje);
})

const definirMensaje = (pR)=>{
    let resultado;
    switch(pR) {
        case 1: resultado = "No casaste una";
        break;
        case 2: resultado = "Un desastre";
        break;
        case 3: resultado = "Resursas";
        break;
        case 4: resultado = "Flojo";
        break;
        case 5: resultado = "insuficiente";
        break;
        case 6: resultado = "casi... pero no";
        break;
        case 7: resultado = "safable";
        break;
        case 8: resultado = "decente";
        break;
        case 9: resultado = "buenardo";
        break;
        case 10: resultado = "uno que presta atención";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprovacion = (nota1, nota2, prevRes)=>{
    let promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return ["<span class='green'>Materia Aprobada!!!</span>"];
    }  
    return ["<span class='red'>Materia Desaprovada</span>"];

}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    console.log(res);
    console.log(msg);
}