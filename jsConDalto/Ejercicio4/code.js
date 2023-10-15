const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operación deseas realizar?");
let operacion = prompt("1: suma, 2:  resta, 3: división, 4:multiplicación");

if (operacion == 1) {
    let num1 = prompt("primer número para sumar");
    let num2 = prompt("segundo número para sumar");
    resultado = sumar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let num1 = prompt("primer número para restar");
    let num2 = prompt("segundo número para"); restar
    resultado = restar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let num1 = prompt("primer número para dividir");
    let num2 = prompt("segundo número para dividir");
    resultado = dividir(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let num1 = prompt("primer número para multiplicar");
    let num2 = prompt("segundo número para multiplicar");
    resultado = multiplicar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("Operación invalida");
} 