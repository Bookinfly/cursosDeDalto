const contenedor = document.querySelector(".flex-container");//selecciona el contenedor
let contador = 0;

let boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();


//Introduces 3 variables para crear una "llave" se retorna una lista de variables
function crearLlave(nombre,modelo,precio){
    contador++;//aumenta contador del scoupe global
    img = "<img src='llave.png' class=llave.img>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;//incluye el modelo como ID atributo del elemento html
    precio = `<p>Precio: <b>$${precio}</b></p>`
    return [img,nombre,modelo,precio];
}

// const llave = crearLlave("Llave1","Modelo x", "33");
// contenedor.innerHTML = llave[0] + llave[1] + llave[2];
// document.write(llave[0],llave[1],llave[2])

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();//variable que guarda el metódo para crear fragmentos de html, son mejores que otras opociones que insetan html pero requieren volver a cargar
//mientras que document.createDocumentFragment() va guardando en memoria para despues actualizar todo junto.


for (var i = 1; i <= 20; i++) {
    let modeloRandom = parseInt(Math.random()*1000);//creamos datos aleatorios
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom );//invova función crear llave, inserta datos con template literals, la iteración se vuelve el nombre
    let div = document.createElement("div");//creamos un contenedor en memoria
    div.setAttribute("tabindex", "0"); // Esto permite que el div reciba el foco
    div.addEventListener("click", ()=>changeHidden(modeloRandom));
    div.classList.add(`flex-item`,`item-${i}`);//le sumamos clases como atributos
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];//inserta elementos del array llave en el div antes creado.
    // contenedor.innerHTML += div;
    documentFragment.appendChild(div);//agregamos el div como hijo del documentFragment
}

contenedor.appendChild(documentFragment); //agregamos el documenFragment como hijo de contenedor (ver primera variable)