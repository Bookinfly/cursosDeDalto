const img = document.querySelector(".img-prueba");
const input = document.querySelector(".prueba");
const selec = document.querySelector(".seleccionado");
img.addEventListener("error", ()=>{console.log("Ha sucedido un error")})//evento error

addEventListener("beforeunload", ()=>{console.log("te estas por ir del sitio")})

addEventListener("resize", ()=>{alert("cambiando el tamaño")})

addEventListener("scroll", ()=>{alert("se ha scrolleado")})

input.addEventListener("select", (e)=>{
    alert("se ha seleccionado");
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    selec.innerHTML = textoCompleto.substring(start,end);
});

input.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nuevoCont = `Tocaste la tecla ${tecla}`
    selec.innerHTML = nuevoCont;
})