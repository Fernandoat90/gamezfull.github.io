//Imagen Principal
        let imagen=document.querySelector(".game-port");
        imagen.src="./src/image/portadas/port_dbz_kakarot.jpeg";
        imagen.alt="dragon ball Kakarot";

//Titulo
        let titulo=document.querySelector(".titulo");
        titulo.innerHTML="Dragon Ball Z:Kakarot";

//Video gameplay
        let video=document.querySelector(".game-play");
        video.src="https://www.youtube.com/embed/0--bfgjf3_4";
        video.title="The First 17 Minutes of Dragon Ball Z: Kakarot Gameplay";

//Lista desc
        let tama=document.getElementById("tam");
        tama.innerHTML="41.3 GB";

        let gen=document.getElementById("gen");
        gen.innerHTML="Anime|Accion|Rol";

        let plat=document.getElementById("plat");
        plat.innerHTML="PC";

//Descripción
        let desc=document.querySelector(".text-desc");
        desc.innerHTML=`Dragon Ball Game Project Z: Action RPG es un nuevo videojuego de rol y acción
        basado en Dragon Ball para Xbox One, PC y PS4 que nos narrará las aventuras de Goku durante
        la saga de Dragon Ball Z. Según ha confirmado CyberConnect2, responsables del videojuego,
        el título se centra en una de las etapas doradas del manga y el anime, contándonos los eventos
        sucedidos en aquellos momentos de una forma inédita y muy espectacular.`;

//Requisitos
        let req_min=[
                "Windows 7 SP1 64-bit",
                "Intel Core i5-2400 or AMD Phenom II X6 1100T",
                "4 GB de RAM",
                "GeForce GTX 750 Ti or Radeon HD 7950",
                "Versión 11"
        ];

        const span_min=document.querySelectorAll(".min-list");


        span_min.forEach((span,index)=>{
                span.textContent=req_min[index];
        })

        let req_max=[
                "Windows 10 64-bit",
                " Intel Core i5-3470 or AMD Ryzen 3 1200",
                "8 GB de RAM",
                "GeForce GTX 960 or Radeon R9 280X",
                "Versión 11"
        ];

        const span_max=document.querySelectorAll(".max-list");


        span_max.forEach((span,index)=>{
                span.textContent=req_max[index];
        })