let section = document.getElementById("section");//un espacio en el HTML
let checkRam =  document.getElementById("ram");//un checkbox
let checkRes =  document.getElementById("resolution");//un checkbox
let botones = [];//inicia vacio y le vamos agregando
let lenovoA1 = {//las pc como objetos
    marca : "Marca:Lenovo",
    modelo: "A1",//vamos a usar el modelo como ID en botones de HTML
    procesador : "procesador: AMD",
    ram: 8,
    resolucion: "HD",
    pVideo: "Placa de Video: integrada"
}
let lenovoG2 = {
    marca : "Marca:Lenovo",
    modelo: "G2",
    procesador : "procesador: AMD",
    ram: 32,
    resolucion: "FullHD",
    pVideo: "Placa de Video: GEFORCE"
}
let HP2220 = {
    marca : "Marca:HP",
    modelo: "2220",
    procesador : "procesador: AMD",
    ram: 4,
    resolucion: "4:3",
    pVideo: "Placa de Video: integrada"
}
let macbookAir = {
    marca : "Marca:Apple",
    modelo: "Air",
    procesador : "procesador: AMD",
    ram: 8,
    resolucion: "FullHD",
    pVideo: "Placa de Video: GEFORCE"
}
let asus = {
    marca : "Marca:Asus",
    modelo: "X1",
    procesador : "procesador: Intel",
    ram: 16,
    resolucion: "4K",
    pVideo: "Placa de Video: NVidia"
}
const catalogo = [lenovoA1, lenovoG2, HP2220, macbookAir, asus];//todas las pc en un array
let catFil = catalogo;//inicia igual a catalogo pero se va a actualizar


///funcion que controla que button tiene o no la clase que guarda el display= inline-box; button por defecto lo guarde en none;
const visible = ()=>{
    const botonOculto = document.querySelectorAll("button");//selecciona todos los botones y los guarda en uun array
    botonOculto.forEach(boton => {//recorre los botones y se asegura de que no tengan la clase visible
        boton.classList.remove("visible");
    });
    botones.forEach(boton => {//ahora recorre el array de botones que guarda strings coincidentes con los ID
        let botonVisible = document.getElementById(boton);//asigna la varible a quien tenga la coincidencia en el ID con ese string(el de esta vuelta de la iteracion)
        if (botonVisible) { // Verifica que el botón existe
            botonVisible.classList.add("visible");//a estos les va agregando la clase visible
        }
    });
}

//funcion que arma los div con el contenido de los objetos
const armarDiv = ()=>{
    botones = [];//limpia botones
    for (pc of catFil){//recorre las pc (objetos) en el catalogo filtrado actualizable
        let div = "";
        for (let key in pc){// por cada key del objeto
            div += `<p>${pc[key]}</p>`;//agrega un string al div un p con el contenido de la key
        };
        section.innerHTML += `<div>${div}</div>`//lo inserta al section dentro de un div de verdad
        botones.push(pc.modelo);//ingresa el string conicidente con el id al array botones
    }
    visible();//llama a visible para que actualice cual se ve en base a quien esta en el array botones actualmente
}

//funcion que filtra segun checkbox ram
const sinBajaRam = ()=>{
    catFil = catalogo;//reinicio var
    section.innerHTML = "";//limpia el div
    if (checkRam.checked){//si esta chequeado
        catFil= catFil.filter(item=> item.ram >= 16);// filtra los de resolucion
        if (checkRes.checked){//si el de ram esta chequeado 
            catFil= catFil.filter(item => item.resolucion != "4:3" && item.resolucion != "HD");//limpia los de menos ram
        }
    } else if (checkRes.checked){//si el de ram esta chequeado 
        catFil= catFil.filter(item=> item.resolucion != "4:3" && item.resolucion != "HD");//limpia los de menos ram
    }
    armarDiv()//llamo a armar div
}

//funcion que filtra segun checkbox res
const sinBajaRes = ()=>{
    catFil = catalogo;//reinicio var
    section.innerHTML = "";//limpia el div
    if (checkRes.checked){//si esta chequeado
        catFil= catFil.filter(item=> item.resolucion != "4:3" && item.resolucion != "HD");// filtra los de resolucion
        if (checkRam.checked){//si el de ram esta chequeado 
            catFil= catFil.filter(item=> item.ram >= 16);//limpia los de menos ram
        }
    } else if (checkRam.checked){//si el de ram esta chequeado 
        catFil= catFil.filter(item=> item.ram >= 16);//limpia los de menos ram
    }
    armarDiv()//llamo a armar div
}

armarDiv();//armamos el contenido la primera vez

//eventos de checkbox
checkRam.addEventListener('change', ()=> sinBajaRam());
checkRes.addEventListener('change', ()=> sinBajaRes());

//eventos de botones
botones.forEach(boton => {//recicle esto, por cada id coindente en botones
    let botonVisible = document.getElementById(boton);//asigna a el que tiene el id coincidente con es string guardado
    botonVisible.addEventListener("click", ()=>{//agrega evento click
        let seguro = confirm("¿Estás seguro?");//confirma
        if (seguro) {//mensajes finales
            alert(`Compraste ${boton}`);
        } else {
            alert("Compra Cancelada");
        }
    })
});