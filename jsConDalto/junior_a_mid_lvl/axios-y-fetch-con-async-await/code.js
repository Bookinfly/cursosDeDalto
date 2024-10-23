// const getName = async ()=>{

//     let peticion = await fetch("info.txt");
//     let resultado = await peticion.json();
//     let HTMLCode = `Nombre: ${resultado.name}`;
//     document.querySelector(".resultado").innerHTML = HTMLCode;
// }

// document.getElementById('nombre').addEventListener("click",getName);


/**
 * Función asíncrona para conseguir el nombre
 * Usa await para esperar que Axios le responda la petición, entregandola deserializada y desencapsulada
 * añadir .data ya que axios devuelve la petición entera
 * Crea un div, le añade una clase, le inserta la info tomada de petición y lo agrega como hijo del body
 */
const getName = async ()=>{

    let resultado = await axios("info.txt");
    console.log(resultado.data.name)
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.data.name;
    document.body.appendChild(div);

}

//similar a la anterior
const getJob = async ()=>{

    let resultado = await axios("info.txt");
    let div = document.createElement("DIV");
    div.classList.add("job");
    div.innerHTML = resultado.data.job;
    document.body.appendChild(div);

}

//añade escuchas de evento click a botones e invoca con ellos las funciones
document.getElementById('getName').addEventListener('click',getName);
document.getElementById('getJob').addEventListener('click',getJob);
