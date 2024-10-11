/*Sentencia de bloque
 * {
        let nombre = "Pedro";
        alert(nombre);
    }
 * tiene su propio scoupe
 * 
 * 
 */

let nombre = "Pedro";//global



{
    let nombre = "José";//tiene un scoupe distinto y puede declararse dentro aunque ya exista fuera
    alert(nombre);
}
/**
 * If, else if, else, swich, for, 
 * while, do while, for in, for of, * forEach
 * son algunas de las sentencias
 * de control del flujo
 */
if (3 > 3) {
    alert("Nombre");
}

/**
 * Sentencias de manejo de ecxepciones
 * como try y catch
 */