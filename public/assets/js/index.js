import { formLogin, formRegister } from './controllers/index.js';
import { validarToken } from './helper/index.js';

export const init =()=>{
    
    // const nombrePagina = window.location.pathname.split('/').reverse()[0];
    const nombrePagina = window.location.pathname;

    if(nombrePagina === '/'){
        validarToken();
    }
    
    if(nombrePagina === '/auth') formLogin();

    if(nombrePagina === '/register') formRegister();

}