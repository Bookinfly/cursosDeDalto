"use strict"

const geolocation = navigator.geolocation;

const position = (pos)=>{
    console.log(pos)
}

const err = ()=> console.log(e);

const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAccuracy: true,
}

console.log(geolocation.getCurrentPosition(position, err, options));