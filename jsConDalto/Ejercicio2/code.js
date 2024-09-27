let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");

    if (edad > 18 )  {
        if (time >= 2 && time < 7 && free == false) {
            alert("Pasas gratarola por ser el primer cliente del horario feliz");
            free = true;
        } else {
            alert(`son las ${time}, la entrada cuesta 20.000`)
        }
    } else {
        alert("la matine ya termino")
    }
    }

    validarCliente(22);
    validarCliente(22.3);
    validarCliente(22.4);
    validarCliente(23);
    validarCliente(24);
    validarCliente(0.2);
    validarCliente(0.5);
    validarCliente(1);
    validarCliente(2.2);
    validarCliente(3);
    validarCliente(4);
    validarCliente(4.5);
