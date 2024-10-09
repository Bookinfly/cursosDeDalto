const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.classList.remove("red");
        resultado.classList.add("green");
        resultado.innerHTML = "Solicitud enviada correctamente";
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5) {
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres"
        console.log(error)
        return error;
    } if (materia.value.length < 4) {
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres"
        console.log(error)
        return error;
    } else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre no puede tener mas de 40 caracteres"
        return error;
    } else if (
        email.value.length < 5 ||
        email.value.length > 40 ||
        email.value.indexOf(".") == -1 ||
        email.value.indexOf("@") == -1) {
            error[0] = true;
            error[1] = "El mail es invalido";
            return error;
    }
    error[0] == false;
    return error
}