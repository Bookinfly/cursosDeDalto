// const getInfo = async ()=>{
//     try {
//         resultado = await axios("info.txt");
//         // console.log(resultado.data.aprobados)
//         document.querySelector(".num-aprobados").innerHTML = resultado.data.aprobados;
//         document.querySelector(".num-desaprobados").innerHTML = resultado.data.desaprobados;
//     } catch(e){
//         console.log(e);
//     }
// }

// document.getElementById("getInfo").addEventListener("click", getInfo);

const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try {
        resultado = await axios("info.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "La Api Fallo";
        desaprobados.innerHTML = "La Api Fallo";
        console.log(e);
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo);