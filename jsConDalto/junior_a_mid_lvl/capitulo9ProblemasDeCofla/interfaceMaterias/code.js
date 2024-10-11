const boton = document.querySelector(".btn-confirmar");
boton.addEventListener("click", ()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        console.log(semanaElegida[elemento].value)
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;
    }
});


const alumnos = [{
    nombre: "Lalo Perez",
    email: "soylalo@gmail.com",
    materia: "Programación 1"
},
{
    nombre: "Jose Suarez",
    email: "jsuarez@gmail.com",
    materia: "Programación 2"
},
{
    nombre: "Pedro Gutierrez",
    email: "Peter@gmail.com",
    materia: "Cálculo"
},
{
    nombre: "Sofía Arana",
    email: "ara@gmail.com",
    materia: "Bases de Datos 2"
}];

let htmlCode ="";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += 
    `       <div class="nombre grid-item">${nombre}</div>
            <div class="email grid-item ">${email}</div>
            <div class="materia grid-item">${materia}</div>
            <div class="semana grid-item">
                <select name="" class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>`;
    document.querySelector(".grid-container").innerHTML = htmlCode;
}

