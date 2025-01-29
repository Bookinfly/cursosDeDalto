"use strict"

const IDBRequestF = indexedDB.open("nanobase", 1);

IDBRequestF.addEventListener("upgradeneeded", ()=>{//creando almacen de objetos
    const db = IDBRequestF.result;
    db.createObjectStore("nombres", {
        autoIncrement: true,//(en lugar de autoincrement se puede usar keypath)
    }
    )
})

// console.log(IDBRequestF);

IDBRequestF.addEventListener("success", ()=>{
    console.log("Todo salió correctamente");
})

IDBRequestF.addEventListener("error", ()=>{
    console.log("Error al abrir la base de datos")
})

const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData[0].add(objeto);
}

const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();
    const fragment = document.createDocumentFragment();
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

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    return container;

}