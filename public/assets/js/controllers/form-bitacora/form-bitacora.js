import { obtenerDatos } from '../../helper/index.js';
export const formBitacora =()=>{
    const formBitacora = document.querySelector('.form-bitacora');

    formBitacora.addEventListener('submit', ( event )=>{
        event.preventDefault();

        obtenerDatos( formBitacora );

    });
};