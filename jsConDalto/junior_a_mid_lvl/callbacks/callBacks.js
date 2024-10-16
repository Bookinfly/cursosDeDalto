/**Los CallBacks son funciónes
 *  dentros de funcioines
 * 
 * 
 */

//función para llamar despúes
function decirNobre(nombre){//3 Es invocada desde el callback y se le dio un parámetro
    console.log(nombre);//finalmente imprime el string pasado por parámetro
}

//EJEMPLO

//Incetra una función como parámetro de otra y la invoca dentro del bloque de código.
function prueba(callback){//cuando es invocada el parametro se convierte en la función
    callback("pedro");
    //bajo el nombre del parámetro, invocamos a la función pasada por el mismo, y le damos un string por parametro
}

prueba(decirNobre)//1 llamo a prueba y le doy la funtion decirNombre como parametro


/**
 * EJEMPLO 2
 */

prueba((nombre)=>console.log(nombre));
//En esta versión llamamos a prueba metemos una función fecha como su parametro "callback". Al ejecutarse prueba invoca la función que recibio por parámetro y le ahreha el parámetro "pedro"

//----------------------------

/**
 *  DESVENTAJA DE CALLBACKS
 * 
 * PUEDEN VOLVERSE VERVOSE
 * MUY DIFICILES DE LEER
 */

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}
const personas = [];

//console.log(new Persona("Bookinfly", "@bookinfly"));

const data = [
    ["Lucas Dalto", "@SoyDalto"],
    ["Rober", "@Rot"],
    ["Ramiro Zetas", "@Ramzes"]
];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

console.log(personas)

const obtenerPersona = (id,cb)=>{
    if (personas[id] == undefined){
        cb("Papá no aparece");
} else {
    cb(null,personas[id])
}}

obtenerPersona(1, (err,persona)=>{
    if (err) {
        console.log (err);
    } else {
        console.log(persona);
    }
})