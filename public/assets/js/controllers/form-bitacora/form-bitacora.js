import { postBuscarPorUsuarioFecha } from '../../services/api-post.js';
import { htmlMostrarUsuariosBitacora, alertaNotificacion } from '../../components/index.js';
import { obtenerDatos } from '../../helper/index.js';
import { obtenerToken, limpiarTablaBody } from '../../utils/index.js';

export const formBitacora = () =>{
    const formBitacora = document.querySelector('.form-bitacora');

    formBitacora.addEventListener('submit', async( event )=>{
        event.preventDefault();

       const token = obtenerToken();
       const data = obtenerDatos( formBitacora );

       if( !data.consultDate ){
        const mensaje = 'Favor de especificar fecha de búsqueda';
        alertaNotificacion( mensaje );
        return;
       }

       if( !data.NumEmpleado ){
        const mensaje = 'Favor de especificar el numero de empleado para la busqueda';
        alertaNotificacion( mensaje );
        return;
       }

      const resp = await postBuscarPorUsuarioFecha( token, data )
                         .catch( ([err]) => {
                            alertaNotificacion(err.msg)
                            formBitacora.reset();
                         })
    
      const usuarios = Object.values(resp[0]);
      limpiarTablaBody();
      usuarios.forEach( htmlMostrarUsuariosBitacora );
       

    });
};