// peticion = fetch("https://reqres.in/api/unknown/2");

// peticion
//     .then(res=>res.json())
//     .then(res=>console.log(res))

// console.log(peticion)

fetch("https://reqres.in/api/users", {
    method : "POST",
    body : JSON.stringify({
        "name" : "Nahuel",
        "last_name" : "Amado"
    }),
    headers: {"Content-Type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(error => console.error('Error:', error))