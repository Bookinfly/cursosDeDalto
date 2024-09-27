let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

// opción similar
// let alto = window.screen.height;
// let ancho = window.screen.width;

comprar = confirm(`El alto es ${alto}, el ancho es ${ancho}`);

if (comprar) {
    alert("Compra Realizada");
} else {
    alert("Compra cancelada")
}