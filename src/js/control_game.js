document.querySelectorAll("a[id]").forEach(titulo=>{
  titulo.onclick=()=> localStorage.setItem("game",titulo.id);
})

const id=localStorage.getItem("game");

  if (id) {
    switch (id) {
      case "dbzk":
        import("./game_comp/dra_kak.js");
        break;
      case "metal_g":
        import("./game_comp/met_gear.js");
        break;
      case "darksouls":
        import("./game_comp/darksoul.js");
        break;
      case "farCry":
        import("./game_comp/far_primal.js");
        break;
      case "cmw3":
          import("./game_comp/callmw3.js");
          break;
      case "sims4":
          import("./game_comp/sims4.js");
          break;
      case "ff12":
        import("./game_comp/ffx12.js");
        break;
      case "f1_23":
        import("./game_comp/f1_23.js");
        break;
      case "alien_inso":
        import("./game_comp/alien_iso.js");
        break;
      // Agrega más casos según los ID de tus juegos
      default:
        console.log("Juego no reconocido");
    }
  } else {
    console.log("No se seleccionó ningún juego.");
  }