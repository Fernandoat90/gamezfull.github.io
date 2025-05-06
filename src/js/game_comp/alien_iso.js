//Imagen Principal
let imagen=document.querySelector(".game-port");
imagen.src="./src/image/portadas/ali_inso.jpg";
imagen.alt="Alien Isolation";

//Titulo
let titulo=document.querySelector(".titulo");
titulo.innerHTML="Alien Isolation";

//Video gameplay
let video=document.querySelector(".game-play");
video.src="https://www.youtube.com/embed/Bq368fbdUqQ";
video.title="Alien: Isolation - PC Gameplay";

//Lista desc
let tama=document.getElementById("tam");
tama.innerHTML="11 GB";

let gen=document.getElementById("gen");
gen.innerHTML="Terror|Survival horror|Acción";

let plat=document.getElementById("plat");
plat.innerHTML="PC";

//Descripción
let desc=document.querySelector(".text-desc");
desc.innerHTML=`Alien: Isolation es una aventura de terror desarrollada
por Creative Assembly y publicada por SEGA para PlayStation 3, PlayStation 4,
Xbox 360, Xbox One, Nintendo Switch, PC y dispositivos móviles iOS y Android.
Un survival horror protagonizado por la hija de la teniente Ellen Ripley,
en el que tenemos que sobrevivir utilizando la astucia y
el sigilo para escapar de los peligroso y terrorífico xenomorfo,
que nos persigue sin descanso.`;

//Requisitos
let req_min=[
    "Windows 7 (32bit)",
    "3.16Ghz Intel Core 2 Duo E8500",
    "4 GB de RAM",
    "1GB (AMD Radeon HD 5550 or Nvidia GeForce GT 430)",
    "Versión 11"
];

const span_min=document.querySelectorAll(".min-list");


span_min.forEach((span,index)=>{
    span.textContent=req_min[index];
})

let req_max=[
    "Windows 7 (64bit)",
    "AMD: Phenom II X4 955 - 4 Core, 3.2 GHz or Intel: Core 2 Quad Q9650 - 4 Core, 3.0 GHz",
    "8 GB de RAM",
    "2GB (AMD GPU: AMD Radeon R9 200 Series or Nvidia GPU: Nvidia GeForce GTX660)",
    "Versión 11"
];

const span_max=document.querySelectorAll(".max-list");


span_max.forEach((span,index)=>{
    span.textContent=req_max[index];
})
