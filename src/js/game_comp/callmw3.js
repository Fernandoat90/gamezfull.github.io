//Imagen Principal
let imagen=document.querySelector(".game-port");
imagen.src="./src/image/portadas/port_callofduty.jpg";
imagen.alt="Call of Duty MW3";

//Titulo
let titulo=document.querySelector(".titulo");
titulo.innerHTML="Call Of Duty M.W 3";

//Video gameplay
let video=document.querySelector(".game-play");
video.src="https://www.youtube.com/embed/CNYLlClEq0E";
video.title="Call of Duty Modern Warfare 3";

//Lista desc
let tama=document.getElementById("tam");
tama.innerHTML="17.5 GB";

let gen=document.getElementById("gen");
gen.innerHTML="Primera persona|Acción|Shooter";

let plat=document.getElementById("plat");
plat.innerHTML="PC";

//Descripción
let desc=document.querySelector(".text-desc");
desc.innerHTML=`Call of Duty: Modern Warfare 3 es un shooter en primera persona
desarrollado por Infinity Ward y Sledgehammer Games y publicado por Activision
para PlayStation 3, Xbox 360, Nintendo Wii y PC.
La tercera entrega de la subsaga Modern Warfare, un espectacular juego de acción
con una campaña para un jugador que nos lleva a un mundo al borde de la Tercera Guerra Mundial,
un multijugador competitivo repleto de mapas y modos de juego y
el modo cooperativo Operaciones especiales.`;

//Requisitos
let req_min=[
    "Windows XP/Windows Vista/Windows 7",
    "Intel Core 2 Duo E6600 o AMD Phenom X3 8750 (o superior)",
    "2 GB de RAM",
    "NVIDIA GeForce 8600GT de 256 MB compatible con Shader 3.0 / ATI Radeon X1950 o superior",
    "Versión 9.0c o posterior"
];

const span_min=document.querySelectorAll(".min-list");


span_min.forEach((span,index)=>{
    span.textContent=req_min[index];
})

let req_max=[
    "Windows 10 o Windows 11 de 64 bits",
    "Intel Core i7-6700K o AMD Ryzen 5 1600X",
    "16 GB",
    "NVIDIA GeForce GTX 1080Ti / RTX 3060, AMD Radeon RX 6600XT o Intel Arc A770",
    "DirectX 12"
];

const span_max=document.querySelectorAll(".max-list");


span_max.forEach((span,index)=>{
    span.textContent=req_max[index];
})