//Imagen Principal
    let imagen=document.querySelector(".game-port");
    imagen.src="./src/image/portadas/port_metal_gear_solid.jpg";
    imagen.alt="metal gear";

//Titulo
    let titulo=document.querySelector(".titulo");
    titulo.innerHTML="Metal Gear Solid";

//Video gameplay
    let video=document.querySelector(".game-play");
    video.src="https://www.youtube.com/embed/DKDcA3QbHzU";
    video.title="Metal Gear Solid Delta: Snake Eater - Official Trailer | TGS 2024 (4K)";

//Lista desc
    let tama=document.getElementById("tam");
    tama.innerHTML="100 GB";

    let gen=document.getElementById("gen");
    gen.innerHTML="Accion|Aventura|Tactico";

    let plat=document.getElementById("plat");
    plat.innerHTML="PC";

//Descripción
    let desc=document.querySelector(".text-desc");
        desc.innerHTML=`Metal Gear Solid Delta: Snake Eater es
        la reimaginación del juego de PlayStation 2 de Hideo Kojima
        para consolas como Xbox Series, PlayStation 5 y PC.
        El título, un juego de aventura y sigilo, actualizado técnicamente
        por Konami pero sin la participación del creativo japonés,
        combina sonidos y gráficos nunca vistos con una trama fascinante
        que permitirá a los jugadores volver al mundo de Metal Gear,
        concretamente al pasado, en plena Guerra Fría.`;

//Requisitos
    let req_min=[
        "Windows 10, Windows 11 (64-bit OS requerido)",
        "Intel i5-8600 o AMD Ryzen 5 3600",
        "16 GB de RAM",
        "RTX 2060 Super (8GB)",
        "Versión 12"
    ];

    const span_min=document.querySelectorAll(".min-list");


    span_min.forEach((span,index)=>{
        span.textContent=req_min[index];
    })

    let req_max=[
        "Windows 10 64-bitWindows 10, Windows 11 (64-bit OS requerido)",
        "Intel i7-8700K o AMD Ryzen 5 3600",
        "16 GB de RAM",
        "RTX 3080",
        "Versión 12"
    ];

    const span_max=document.querySelectorAll(".max-list");


    span_max.forEach((span,index)=>{
        span.textContent=req_max[index];
    })