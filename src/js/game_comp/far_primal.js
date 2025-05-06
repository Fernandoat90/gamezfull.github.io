//Imagen Principal
let imagen=document.querySelector(".game-port");
imagen.src="./src/image/portadas/port_far_cry_pri.jpg";
imagen.alt="far cry";

//Titulo
let titulo=document.querySelector(".titulo");
titulo.innerHTML="Far Cry: Primal";

//Video gameplay
let video=document.querySelector(".game-play");
video.src="https://www.youtube.com/embed/kxF58ocLMQ8";
video.title="Far Cry Primal Gameplay";

//Lista desc
let tama=document.getElementById("tam");
tama.innerHTML="12.2 GB";

let gen=document.getElementById("gen");
gen.innerHTML=" Aventura|Mundo Abierto|Acción";

let plat=document.getElementById("plat");
plat.innerHTML="PC";

//Descripción
let desc=document.querySelector(".text-desc");
desc.innerHTML=`Far Cry Primal nos traslada, siguiendo el género de primera persona
en mundo abierto adoptado por la saga Far Cry de Ubisoft,
a un convulso mundo prehistórico de hace más de 12.000 años
lleno de tribus y clanes enfrentados los unos con otros.
Así, encarnando a Takkar, deambularemos en nuestra particular cruzada
por el mundo de Oros, domeñando bestias como Mamuts y Dientes de Sable,
luchando contra hombres salvajes y enfrentándonos a la naturaleza.`;

//Requisitos
let req_min=[
    "Windows 7, Windows 8.1, Windows 10 (64-bit)",
    "Intel Core i3-550; AMD Phenom II X4 955 o equivalente",
    "4 GB de RAM",
    "NVIDIA GeForce GTX 460 (1GB VRAM); AMD Radeon HD 5770 (1GB VRAM) o equivalente",
    "Versión 11"
];

const span_min=document.querySelectorAll(".min-list");


span_min.forEach((span,index)=>{
    span.textContent=req_min[index];
})

let req_max=[
    "Windows 7, Windows 8.1, Windows 10 (64-bit)",
    "Intel Core i7-2600K; AMD FX-8350 o equivalente",
    "8 GB de RAM",
    "NVIDIA GeForce GTX 780; AMD Radeon R9 280X o equivalente",
    "Versión 11"
];

const span_max=document.querySelectorAll(".max-list");


span_max.forEach((span,index)=>{
    span.textContent=req_max[index];
})