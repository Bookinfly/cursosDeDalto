"use strict"

const IDBRequestF = indexedDB.open("NanoBase", 1);

IDBRequestF.addEventListener("upgradeneeded", ()=>{
    const db = IDBRequestF.result;
    db.createObjectStore("nombres", {
        autoIncrement: true,
    }
    )
})

IDBRequestF.addEventListener("success", ()=>{
    leerObjetos();
})

IDBRequestF.addEventListener("error", ()=>{
    console.log("Error al abrir la base de datos")
})

document.getElementById("add").addEventListener("click", ()=>{
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible") != undefined){
            if (confirm("Hay elementos sin guardar: ¿Deseas continuar?")){
                addObjeto({nombre});
                leerObjetos();
            }
        } else {
            addObjeto({nombre});
            leerObjetos();
        }
    }
})

const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData[0].add(objeto);
}

const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success", ()=>{
        if (cursor.result){
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment);
    })
}

const modificarObjeto = (key, objeto) => {
    const db = IDBRequestF.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto, key);//no existe lo agrega, si existe lo modifica
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto modificado correctamente")
    })
}
const borrarObjeto = (key) => {
    const IDBData = getIDBData("readwrite");
    IDBData.delete(key, "objeto eliminado correctamente");
}

const getIDBData = (mode, msj) => {
    const db = IDBRequestF.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(msj)
    })
    return [objectStore, IDBtransaction];
}

const nombresHTML = (id, name) => {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true")
    h2.setAttribute("spellcheck", "false")

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", ()=>{
        saveButton.classList.replace("imposible", "posible")
    });

    saveButton.addEventListener("click", ()=>{
        if (saveButton.className == "posible") {
            modificarObjeto(id, {nombre: h2.textContent});
            saveButton.classList.replace("posible", "imposible");
        }
    });

    deleteButton.addEventListener("click", ()=>{
        borrarObjetoar(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;

}