import { formLogin, formRegister } from './controllers/index.js';
import { htmlMostrarUsuario } from './components/nombre-usuario.js';
import { validarToken } from './helper/index.js';
import { imprimirMetodos } from './utils/imprimir-metodos.js';
import { consultarNip, cerrarSesion } from './events/index.js';

export const init =()=>{
    
    // const nombrePagina = window.location.pathname.split('/').reverse()[0];
    const nombrePagina = window.location.pathname;

    if(nombrePagina === '/'){
        validarToken();
        htmlMostrarUsuario();
        imprimirMetodos();
        consultarNip();
        cerrarSesion();
    }
    
    if(nombrePagina === '/auth') formLogin();

    if(nombrePagina === '/register') formRegister();

}