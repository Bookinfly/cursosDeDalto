const imagen = document.querySelector(".imagen");

fetch("./image.png")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img))

