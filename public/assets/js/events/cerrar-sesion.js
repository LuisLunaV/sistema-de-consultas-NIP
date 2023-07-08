import { limpiarSessionStorage } from '../utils/limpiar-session-storage.js';

export const cerrarSesion =()=>{
const btnCerrar = document.querySelector('#cerrar-sesion');

btnCerrar.addEventListener('click', ()=>{
    limpiarSessionStorage();
});
};