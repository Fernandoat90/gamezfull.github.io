//Imagen Principal
        let imagen=document.querySelector(".game-port");
        imagen.src="./src/image/portadas/port_dark_souls.jpg";
        imagen.alt="Dark souls";

//Titulo
        let titulo=document.querySelector(".titulo");
        titulo.innerHTML="Dark Souls 2";

//Video gameplay
        let video=document.querySelector(".game-play");
        video.src="https://www.youtube.com/embed/can9S3Jg_7Y";
        video.title="Dark Souls 2 Gameplay - Undead Knight (DS2)";

//Lista desc
        let tama=document.getElementById("tam");
        tama.innerHTML="8.5 GB";

        let gen=document.getElementById("gen");
        gen.innerHTML="Dark Fantasy|Rol|Acción RPG";

        let plat=document.getElementById("plat");
        plat.innerHTML="PC";

//Descripción
        let desc=document.querySelector(".text-desc");
        desc.innerHTML=`Dark Souls II es un juego de acción y rol desarrollado por FromSoftware
                y publicado por Bandai Namco para PlayStation 3, Xbox 360 y PC.
                La segunda entrega de la aclamada saga de acción que cambió el género para siempre,
                una desafiante y absorbente aventura con exploración y combates estratégicos
                que no fue tan aplaudida como la primera entrega, pero sí igual de jugada y disfrutada.`;

//Requisitos
let req_min=[
        "Windows Vista SP2,Windows 7 SP1,Windows 8",
        "AMD Phenom II X2 555 3.2Ghz ó Intel Pentium Core 2 Duo E8500 3.17Ghz",
        "2 GB RAM",
        "NVIDIA GeForce 9600GT, ATI Radeon HD 5870",
        "Versión 9.0c"
];

const span_min=document.querySelectorAll(".min-list");


span_min.forEach((span,index)=>{
        span.textContent=req_min[index];
})

let req_max=[
        "Windows 7 SP1, Windows 8",
        "Intel CoreTM i3 2100 3.10GHz ó AMD A8 3870K 3.0GHz",
        "4 GB RAM",
        "NVIDIA GeForce GTX 750 ó ATI Radeon HD 6870 ó superior",
        "Versión 9.0c"
];

const span_max=document.querySelectorAll(".max-list");


span_max.forEach((span,index)=>{
        span.textContent=req_max[index];
})