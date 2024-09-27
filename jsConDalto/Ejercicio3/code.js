let cantidad = prompt("Cuantos alumnos son?");
// cantidad es una variable que guarda el num de alumnos obtenido de un prompt
let alumnosTotales = [];
// alumnosTotales es un Array declarado sin inicializar


for (i = 0; i < cantidad; i++) {
    // Ciclo for, la variable itinerante inicia en 0, mientras i sea menor a cantidad (variable con num de alumnos) se ejecuta, cada vualta su valor aumenta en +1
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i+1)),0];
    // inicializamos el array alumnosTotales ingresando en cada ciclo un array de 2 elementos, el array se ubica en la posición con valor igual a el valor que tiene la variable itinerante en esta vuelta del recorrido
    // el primer valor es obtenido de un prompt al que se le concatena un numero igual a la variable itinerante + 1, el segundo valor de estos elementos de array anidados es un 0
}

const tomarAsistencia = (nombre,position)=>{
    // cramos una constante con una funcion llamada tomarAsistencia que tiene 2 parametros, uno llamado nombre y otro llamado p
    let presencia = prompt(nombre);
    // la funcion crea una variable con un valor obtenido de un prompt con el parametro nombre impreso
    if (presencia == "p" || presencia == "P") {
        // luego para por una verificación de si la variable presencia es igual a la letra p
        alumnosTotales[position][1]++;
        // de ser correcta a el elemento en posición 1 del array dentro del array alumnosTotales en posición igual al parametro p le agrega +1 a su valor
    }
}

for (i = 0; i < 30; i++) {
    // Un ciclo que itera 30 veces
    for (alumno in alumnosTotales) {
        // en cada iteracion hace una iteración por cada posición del Array alumnosTotales
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
        // ejecuta la function tomarAsistencia con el parametro nombre, en el ingresa el valor de la posicion 0 del elemento actual que se esta iterando dentro de alumnosTotales (el nombre, en el parametro p ingresa el valor alumno que no es más que la posición en el array)
    }
}

for (alumno in alumnosTotales) {
    // aqui iteramos en los elementos dentro del array alumnosTotales (los alumbnos)
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _______Presentes: ${alumnosTotales[alumno][1]} <br>
    _______Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    // cra una variable llamada resultado, es igual a un string que inicia con la posicion 0 del elemento actual de iteración dentro del array alumnosTotales (nombre del alumno)
    // salto de linea, texto y otro string definido por la posición 1 del string en la posición igual al valor de la iteracion actual en el Array alumnosTotales
    // mas texto y un string final definido por la posición 1 del mismos elemento mencionado anteriormente

    if (30 - alumnosTotales[alumno][1] > 18) {
        // continuamos con una validación de si el elemento en posicion 1 de el elemento en posicion coincidente con el valor de la iteración actual en el array alumnos totales es mayor a 18
        resultado+="<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
        // de ser así agrega la leyenda de reprobado
    } else {
        resultado+= "<br><br>";
        // si no solo agrega espaciado
    }
    document.write(resultado);
    // finalmente imprimimos en pantalla la variable resultado que toma el nombre desde el array dentro del array alumnosTotales una cantidad de presentes del segundo valor del array, y un numero resultado de una operacion matematica que incluye el numero anterior
}