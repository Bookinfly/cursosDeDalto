function hacerAlgo(callback) {
    console.log("Haciendo algo...");
    callback();
}

hacerAlgo(() => {
    console.log("El callback se ejecuta ahora.");
});

// Aquí, el callback se ejecuta inmediatamente después de que hacerAlgo haya mostrado "Haciendo algo...". La ejecución exacta del callback depende de dónde y cómo se invoque dentro de la función externa.

function procesarDatos(datos, callback) {
    console.log("Procesando datos...");
    // Supongamos que estamos procesando los datos aquí
    let resultado = datos * 2;
    callback(resultado); // Llamamos al callback con el resultado del procesamiento
}

procesarDatos(5, (resultado) => {
    console.log("Resultado del procesamiento: " + resultado);
});
// En este ejemplo, callback es invocado después de que resultado ha sido calculado, pero podría ser en cualquier momento, dependiendo de la lógica de la función procesarDatos.

function aplicarOperacion(arr, operacion) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(operacion(arr[i]));
    }
    return resultado;
}

let duplicar = (num) => num * 2;
let numeros = [1, 2, 3, 4];
let resultado = aplicarOperacion(numeros, duplicar);
console.log(resultado); // [2, 4, 6, 8]

// Aquí, aplicarOperacion es una función de orden superior porque recibe otra función (operacion) como argumento. Esto es una poderosa herramienta en PF.


// una función puede recibir como argumento otra función autoinvocada (también conocida como IIFE, Immediately Invoked Function Expression). Sin embargo, en la mayoría de los casos no es una práctica común ni útil, porque las IIFE se ejecutan inmediatamente y no suelen proporcionar ningún valor a la función externa que las recibe. Pero técnicamente es posible.

// Aquí tienes un ejemplo:




function ejecutarFuncion(func) {
    console.log(func); // Esto imprimirá el resultado de la IIFE
}

ejecutarFuncion((() => {
    console.log("Esta es una IIFE.");
    return "Resultado de la IIFE";
})());
// En este ejemplo, la IIFE se ejecuta inmediatamente y su resultado se pasa a la función ejecutarFuncion.

// antes de la introducción de Promises y async/await, los callbacks eran la principal forma de manejar operaciones asíncronas en JavaScript. Funcionaban pasando una función como argumento que se ejecutaba después de que la operación asíncrona se completara. Este enfoque, aunque efectivo, podía conducir a lo que se conocía como "Callback Hell" si había muchas operaciones asíncronas anidadas.

// Aquí tienes un ejemplo sencillo de uso de callbacks para manejar una operación asíncrona como la lectura de un archivo (en Node.js):


const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
// En este ejemplo, fs.readFile es una operación asíncrona que lee un archivo y luego ejecuta el callback pasando err (en caso de error) y data (el contenido del archivo).

// Con muchas operaciones anidadas, el código podía verse algo así:


fs.readFile('archivo1.txt', 'utf8', (err1, data1) => {
    if (err1) {
        return console.log(err1);
    }
    fs.readFile('archivo2.txt', 'utf8', (err2, data2) => {
        if (err2) {
            return console.log(err2);
        }
        fs.readFile('archivo3.txt', 'utf8', (err3, data3) => {
            if (err3) {
                return console.log(err3);
            }
            // Procesar datos
            console.log(data1, data2, data3);
        });
    });
});
// Este tipo de estructura hacía el código difícil de leer y mantener. Por eso, se introdujeron Promises y más tarde async/await para manejar la asincronía de una manera más limpia y manejable.