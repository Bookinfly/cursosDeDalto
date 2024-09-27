for (let i = 0; i < 6; ++i){
    console.log(i)
} //Puedo poner el incrementador antes de la variable si quiero que el num se incremente
//antes del chequeo para la iteración, o despúes si quiero que se sume al funalizar la misma

//label

let array1 = ["maria","josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio://label
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            console.log(array );
            break forRancio;//al usar un label, podemos usar break o continuo, sobre el bucle completo con el label
            //de lo contrario solo va a cortar el bucle anidado, pero el de scoupe superior seguira corriendo
        }
    
    } else {
        console.log(array2[array]);
    }
}