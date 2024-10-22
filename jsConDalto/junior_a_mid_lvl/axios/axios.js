// fetch("info.txt")
//     .then(res=>res.blob())
//     .then(res=>console.log(res))

axios.post("https://reqres.in/api/users",{
    "name" : "Logan",
    "job" : "XMen"
})
    .then(res=>console.log(res.data))