export const componentesCargados = () => {
  
  //Esperamos que los componentes se cargen completamente
  window.onload = () => {
  
    const loader = document.querySelector(".loader");
    
    //Agregamos la clase ocultar que agrega opacity: 0
    loader.classList.add("ocultar");

    //Agregamos display = "none" para que el elemento con la animacion desaparesca y no consuma recursos
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);

  };

};
