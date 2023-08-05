import { formLogin, formRegister, formBitacora } from './controllers/index.js';
import { validarToken, validarRol, obtenerMarca } from './helper/index.js';
import { imprimirMetodos, componentesCargados  } from './utils/index.js';
import { consultarNip, cerrarSesion, obtenerDatosDelEmpleado } from './events/index.js';

export const init =()=>{
    
    // const nombrePagina = window.location.pathname.split('/').reverse()[0];
    const nombrePagina = window.location.pathname;

    //Validamos si todos los componentes se han cargado correctamente
    componentesCargados();

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
        formBitacora();
        cerrarSesion();
    };
    if(nombrePagina === '/auth'){
        obtenerMarca();
        formLogin()
    };

    if(nombrePagina === '/register'){ 
        obtenerDatosDelEmpleado();
        formRegister();
    };
}