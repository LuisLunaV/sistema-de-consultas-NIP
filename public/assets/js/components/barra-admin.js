import { obtenerUsuarioMarca } from "../helper/index.js";

export const htmlMostrarAdmin = () => {
    const ulUsuario = document.querySelector(".navbar-nav");

  const { User_NumEmpleado, marca } = obtenerUsuarioMarca();

  const html = `<li class="nav-item nav-usernumber">
  <div id="cont-name-perfil">    
  <span id="numero-empleado">
  <i class="bi bi-person-square"></i> 
  ${User_NumEmpleado}
  </span>
  -
  <span id="numero-empleado">
  ${marca.Brand_Name}
  </span>
  </div>
  </li>
  <li class="nav-item">
  <a id="ver-bitacora" class="nav-link active" href="/bitacora">Ver bitacora</a>
  </li>
  <li class="nav-item">
  <a id="cerrar-sesion" class="nav-link active" href="/auth">Cerrar sesion</a>
  </li>`;

  ulUsuario.innerHTML += html;
};
