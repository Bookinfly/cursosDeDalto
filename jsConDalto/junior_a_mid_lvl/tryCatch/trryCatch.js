//Cuando usas un manejo de error, los eventos por error pertinentes por defecto, quedan desactivados

//catch incondicional
// try {
//     cfvedf
// } catch(error) {
//     console.log("error");
//     console.log(typeof error);
// }

// NO controlamos errores de sintaxis

// let pepe = 2;

//catch condicional
// try {

//     mkmkm
//     let pepe;
// } catch(error) {
//     console.log("error");
//     if (pepe) {
//         console.log("error");
//     }
// }


//sentencia finally se muestra igual
// try {
//     pepe = 2;
// } catch(error) {
//     console.log("error");
// } finally {
//     console.log("error o no acá estoy")
// }

//El finally es capaz de sobrescribir el return evitando que este termine la ejecución del bloque, NO puede ignoraR al finally
// const pruebaTry = ()=>{
//     try{
//         return 1;
//     } catch(e){
//         return 2;
//     } finally {
//         return 3;
//     }
// }

// console.log(pruebaTry());


//throw nos tira un error
const pruebaTry2 = ()=>{
    try{
        throw {
            error: "Agarraste un pato en un dungeon😍😍😍",
            info: "La cagaste😭😭😭"
        }
    } catch(e){
        console.log(e);
    } finally {
        return 3;
    }
}

console.log(pruebaTry2());