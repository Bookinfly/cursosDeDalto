class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["José", "@SoyJos"],
    ["Carlos", "@Carl123"],
    ["Pochito", "@ElPocho33"]
]

const personas = [];

for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("No se ha encontrado al fulano");
        else{resolve(personas[id])}
    })
}

const obtenerInstagram = (id) =>{
    return new Promise((resolve, reject)=>{
        if (personas[id].instagram == undefined) reject("Mo se ha encontrado esa cuenta")
        else {resolve(personas[id].instagram)}
    }) 
}

let id = 3;

obtenerPersona(2).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(2);
    }).then((instagram)=>{
        console.log(instagram)
    }).catch((e)=>{
        console.log(e)
    })