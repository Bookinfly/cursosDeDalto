"use strict"

var IDBRequestF = indexedDB;

console.log(IDBRequestF);

IDBRequestF = indexedDB.open("NanoBase", 1);

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
    const db = IDBRequestF.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto agregado correctamente")
    })
}

const leerObjetos = ()=>{
    const db = IDBRequestF.result;
    const IDBtransaction = db.transaction("nombres", "readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success", ()=>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todos los datos fueron leidos");//siempre se ejecuta la ultima vez en null
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

const getIDBData = (mode, msg) => {
    const db = IDBRequestF.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(msj)
    })
    return [objectStore, IDBtransaction];
}