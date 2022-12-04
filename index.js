let boton = document.getElementById("id-button");
let opacity = document.getElementById("opacity");

boton.addEventListener("mouseenter", ()=> {opacity.style.opacity ="0.2";opacity.style.width= "100%";opacity.style.height="100%"; 
opacity.style.backgroundColor="black"; opacity.style.position="absolute"; 
});

boton.addEventListener("mouseleave", ()=> {opacity.style.opacity ="0"; 
});


const pito = {
    type:"panda",
    estado:"pito"
}

let {type} = pito

console.log(type)