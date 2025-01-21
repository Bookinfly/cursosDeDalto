const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e=>{
    e.preventDefault();
    changeStyle(e.target, "#444");
})

zona.addEventListener("dragleave", e=>{
    e.preventDefault();
    changeStyle(e.target, "#888");
})

zona.addEventListener("drop", e=>{
    e.preventDefault();
    changeStyle(e.target, "#888");
    cargarArchivo(e.dataTransfer.files[0])
    cargarVideo(e.dataTransfer.files[0])
})

const changeStyle = (obj, color)=>{
    obj.style.color = color;
    obj.style.border = `4px solid ${color}`;
}

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("load", e=>{
        let url = URL.createObjectURL(ar);
        let img = document.createElement("IMG");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
    })
}

const cargarVideo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress", e=>{
        // console.log(ar.size);
        // console.log(e.loaded);
        let carga = Math.round(e.loaded / ar.size * 100);
        console.log(carga);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = `75px 20px`;
        document.querySelector(".barra-de-carga").style.width = `${carga}%`;
    });
    reader.addEventListener("loadend", e=>{
        changeStyle(zona, "#4f8");
        document.querySelector(".barra-de-carga").style.background = "#4f8";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "Carga completa!"
        })
    })
    reader.addEventListener("load", e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result),{type: 'video/mp4'}]);
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
        // zona.style.border = "4px, solid, #888"
        // img.play();
    })
}