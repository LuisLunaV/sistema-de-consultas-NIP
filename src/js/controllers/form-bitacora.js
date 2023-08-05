import { postBuscarPorUsuarioFecha } from '../services/api-post.js';
import { htmlMostrarUsuariosBitacora, alertaNotificacion } from '../components/index.js';
import { obtenerDatos } from '../helper/index.js';
import { obtenerToken, limpiarTablaBody } from '../utils/index.js';

export const formBitacora = () =>{
    const formBitacora = document.querySelector('.form-bitacora');

    formBitacora.addEventListener('submit', async( event )=>{
        event.preventDefault();

       const token = obtenerToken();
       const data = obtenerDatos( formBitacora );

        // Verificar si la fecha de búsqueda está especificada
       if( !data.consultDate ){
        const mensaje = 'Favor de especificar fecha de búsqueda';
        alertaNotificacion( mensaje );
        limpiarTablaBody();
        return;
       }

       // Verificar si el número de empleado está especificado
       if( !data.NumEmpleado ){
        const mensaje = 'Favor de especificar el numero de empleado para la busqueda';
        alertaNotificacion( mensaje );
        limpiarTablaBody();
        return;
       }

        // Realizar una solicitud HTTP utilizando la función postBuscarPorUsuarioFecha con el token de autenticación y los datos del formulario.
        // Si hay un error en la solicitud, muestra una notificación de alerta y restablece el formulario.
      const resp = await postBuscarPorUsuarioFecha( token, data )
                         .catch( ( err ) => {
                             if(err.errors){
                                 const [ info ] = err.errors;
                                 alertaNotificacion(info.msg)
                                 formBitacora.reset();
                                 return;
                             }
                            alertaNotificacion(err.msg)
                            formBitacora.reset();
                         });


      // Extraer los valores del objeto 'resp' en un array utilizando Object.values.
      // Si 'resp' es nulo o indefinido, se utiliza un array vacío.
      const usuarios = Object.values((resp)?resp[0]:'');

      limpiarTablaBody();
      usuarios.forEach(( value, index )=>{ 
        htmlMostrarUsuariosBitacora( value, index ) 
    });
       

    });
};