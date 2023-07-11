import { formLogin, formRegister } from './controllers/index.js';
import { validarToken, validarRol, obtenerMarca } from './helper/index.js';
import { imprimirMetodos } from './utils/imprimir-metodos.js';
import { consultarNip, cerrarSesion } from './events/index.js';

export const init =()=>{
    
    // const nombrePagina = window.location.pathname.split('/').reverse()[0];
    const nombrePagina = window.location.pathname;

    if(nombrePagina === '/'){
        validarToken();
        validarRol();
        imprimirMetodos();
        consultarNip()
        cerrarSesion();
    }
    
    if( nombrePagina === '/bitacora'){ 
        validarToken();
        validarRol();
        cerrarSesion();
    };
    if(nombrePagina === '/auth'){
        obtenerMarca();
        formLogin()
    };

    if(nombrePagina === '/register') formRegister();

}