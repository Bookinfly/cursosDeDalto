let urlYT = "https://youtube.com";

let ventana = window.open(urlYT);
//metódo .open() sirve para abrir una ventana emergente

///////////SOLO DESDE SERVIDOR
ventana.resizeTo(100,200)//similares pero este es relatico
window.resizeBy(100,200)
ventana.moveBy(220, 100)

/////////////////////

// ventana.close();//metódo para cerrar ventana

window.stop()// detiene la carga

window.alert("mensaje")// una alerta emergente

window.print()//imprime lo que se renderiza dentro de la ventana

window.prompt("Pregunta")////similar a un alert, pero pegunta algo y deja que el usuario ingrese una respuesta como string

window.confirm("Seguro que queres saber?")///En caso de aceptar devuelve true y si no false

////////////
const screen = window.screen;

console.log(screen.availWidth);

const screenLeft = window.screenLeft;//devuelve la distancia entre el borde izquierdo de la ventana y el borde izquierdo de la pantalla
const screenTop = window.screenTop;//igual pero con el borde de arriba
console.log("Left " + screenLeft + " top " +screenTop)

const scrolly = window.scrollY;///dice cuantos pixeles desplaze la pantalla en eje horizontal

const scrollx = window.scrollX;///dice cuanto la desplaze en eje vertical

alert(scrollx + scrolly)

window.scroll(0,100)///mueve la vista al punto marcado siendo el primer parametro "x" y el segundo "y"

window.scrollTo()//simil anterior

//window.minimize()//DEPRECADA

