const materias = {
    fisica: [95,7,3,"Fisica"],
    matematica: [90,7,4, "Matematica"],
    logica: [100,8,4, "Lógica"],
    quimica: [96,9,4, "Quimica"],
    calculo: [68,6,2,"Calculo"],
    programacion: [100,9,4,"Programación"],
    biologia: [90,7,4,"Biologia"],
    bbdd: [95,10,3,"Bases de Datos"],
    algebra: [88,5,4,"Algebra"]
}

const aprobo = ()=> {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        if (asistencias >= 90) {
            console.log("%c Mantiene Regularidad", "color:green");
        } else {
            console.log("%c Perdio Regularidad"), "color:red";
        }
        
        if (promedio >= 7) {
            console.log("%c Promedio Aprobado", "color:green");
        } else {
            console.log("%c Promedio Insuficiente" , "color:red");
        }
        
        if (trabajos >= 3) {
            console.log("%c Cumplio con los Trabajos Prácticos", "color:green");
        } else {
            console.log("%c Trabajos Practicos Adeudados", "color:red" );
        }
    }
}

aprobo()

