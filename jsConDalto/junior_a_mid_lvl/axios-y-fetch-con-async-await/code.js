const getName = async ()=>{

    let peticion = await fetch("info.txt");
    let resultado = await peticion.json();
    console.log(resultado)
}

getName()