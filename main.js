const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const btnApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1); // -1 hace referencia al ultimo numero
      }
      return;
    }

    // Operaciones
    try {
      if (boton.id === "igual") {
        pantalla.textContent = eval(pantalla.textContent);
        return;
      }
    } catch {
      pantalla.textContent = "Error!";
      return;
    }

    // if(pantalla.textContent === "0" || pantalla.textContent === "Error!" ){
    //     pantalla.textContent = btnApretado;
    // }else{
    //     pantalla.textContent += btnApretado;
    // }

    // Operador Ternario
    pantalla.textContent === "0" || pantalla.textContent === "Error!"
      ? (pantalla.textContent = btnApretado)
      : (pantalla.textContent += btnApretado);
  });
});
