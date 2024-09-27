class Celular {
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("ecelular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    gabarVideo(){
        alert(`filmando en una resolución de: ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color:<b>${this.color}</b><br></br></>
        Peso:<b>${this.peso}</b><br></br></>
        Tamaño:<b>${this.tanaño}</b><br></br></>
        Resolución de Cámara:<b>${this.resolucionDeCamara}</b><br></br></>
        Resolución de Video:<b>${this.resolucionDeCamara}</b><br></br></>
        Memoria Ram:<b> ${this.memoriaRam}</b><br></br></>
        ` //El return entre comillas tiene texto, etiquetas html e incerciones de texto por las propiedades del objeto
    }

}

class CelularesAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce) {
        super(color,peso,tamaño,rdc,ram);
        this.resolicionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a hacer un reconocimiento facial");
    }
    InfoAltaGama(){
        return this.mobileInfo() + `Resolución de camara extra: ${this.resolicionDeCamaraExtra} <br>`;
    }
}

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false & this.instalada == true){
            this.iniciada = true;
            alert("app iniciada")
        }
    }
    cerrar(){
        if (this.iniciada == true & this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = true;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>

        `
    }
}

mobil1 = new Celular("rojo", "150g", "5", "HD", "2GB");
mobil2 = new Celular("negro", "180g", "5.4", "full HD", "2GB");
mobil3 = new Celular("blanco", "153g", "5.9", "Full-HD", "2GB"); 
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celu1 = new CelularesAltaGama("rojo","160g","5.2","4k","3gb","full hd");
celu2 = new  CelularesAltaGama("negro","120g","6","8k","4gb","full hd");


document.write(` 
    ${celu1.InfoAltaGama()} <br>
    ${celu2.InfoAltaGama()} <br>
`);

document.write(` 
    ${mobil1.mobileInfo()}  <br>
    ${mobil2.mobileInfo()}  <br>
    ${mobil3.mobileInfo()}  <br>
`);

app = new App("16.000", "5 Estrellas", "500mb");
app.instalar();
app.cerrar();

app.abrir();
app.cerrar();
app.desinstalar();

app2 = new App("800", "3.5 Estrellas", "900mb");
app3 = new App("160", "2 Estrellas", "100mb");

document.write(`
    ${app.appInfo()} </br>
    ${app2.appInfo()} </br>
    ${app3.appInfo()} </br>
`)

