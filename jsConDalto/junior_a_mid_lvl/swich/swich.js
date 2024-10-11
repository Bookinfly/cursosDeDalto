
let luz = "Red";

switch(expr) {
    case "Red":
        console.log("Debe detenerse");
        break;
    case "Green":
        console.log("Debe avanzar");
        break;
    case "Yellow":
        console.log("Avance con precaución");
        break;
    case "Blue":
        console.log("Quejeso?!");
        break;
    default:
        console.log("No hay conincidencia");
}

//Es igual a:

if (color === "Red")         console.log("Debe detenerse");
else if (color === "Green")         console.log("Debe avanzar");
else if (color === "Yellow")         console.log("Avance con precaución");
else if (color === "Blue")         console.log("Quejeso?!");
else console.log("No hay conincidencia");

//El if tiene mejor rendimiento

//Dependiendo del caso por legibilidad o por algo especifico elegimos swich