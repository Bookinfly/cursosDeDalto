class Calculadora {
    constructor() {
}
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
} 
potenciar(num,exp){
    let numero = num;
    for (var i = 1; i < exp; i++){
        numero = numero * num;
    }
    return numero;
}
    
}

const calculadora = new Calculadora();

alert("Que operación deseas realizar?");
let operacion = prompt("1: suma, 2:  resta, 3: división, 4:multiplicación, 5 Potenciación ");

if (operacion == 1) {
    let num1 = prompt("primer número para sumar");
    let num2 = prompt("segundo número para sumar");
    resultado = calculadora.sumar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let num1 = prompt("primer número para restar");
    let num2 = prompt("segundo número para");
    resultado = calculadora.restar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let num1 = prompt("primer número para dividir");
    let num2 = prompt("segundo número para dividir");
    resultado = calculadora.dividir(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let num1 = prompt("primer número para multiplicar");
    let num2 = prompt("segundo número para multiplicar");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let num1 = prompt("primer número para potenciar");
    let num2  = prompt("exponente");
    resultado = calculadora.potenciar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("Operación invalida");
} 