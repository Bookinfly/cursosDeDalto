"use strict";

const fecha = new Date();//constructor

// const fecha = new Date(1000000);//constructor, sín datos es la fecha actual, si pongo números son milisegundos desde 1900

console.log(fecha);

console.log(fecha.getDate())//nos devuelve el día del mes

console.log(fecha.getDay())//nos devuelve en día de la semana (0 a 6)

console.log(fecha.getMonth())//NOS DEVUELVE el dia del mes (0 a 11)

console.log(fecha.getYear()+1900)//devuelve año 

console.log(fecha.getHours())//devuelve hs

console.log(fecha.getMinutes())//devuelve minutos

console.log(fecha.getSeconds())//devuelve segundos 

console.log(Date.now())//milisegundos desde 1900 hasta ahora