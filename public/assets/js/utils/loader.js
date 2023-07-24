export const componentesCargados = () => {
  
  //Esperamos que los componentes se cargen completamente
  window.onload = () => {
  
    const loader = document.querySelector(".loader");
    loader.classList.add("ocultar");
  
    setTimeout(() => {
      loader.style.display = "none";
      loader.classList.remove("hide");
    }, 300);

  };

};
