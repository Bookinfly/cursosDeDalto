
let peticion;

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP")
    //Objeto a usar en internet explorer
}



peticion.addEventListener("load",()=>{
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "No se encontro recurso";
    console.log(JSON.parse(respuesta));
})

//HAY QUE DESERIALIZAR JSON.parse(respuesta).Nombre);

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "aplication/json;charset=UTF8");

peticion.send(JSON.stringify(
    {
        "name": "morpheus",
        "job": "leader"
    }));
