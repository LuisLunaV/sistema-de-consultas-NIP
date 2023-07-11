import { postBuscarPorUsuarioFecha } from '../../services/api-post.js';
import { htmlMostrarUsuariosBitacora} from '../../components/index.js';
import { obtenerDatos } from '../../helper/index.js';
import { obtenerToken, limpiarTablaBody } from '../../utils/index.js';

export const formBitacora = () =>{
    const formBitacora = document.querySelector('.form-bitacora');

    formBitacora.addEventListener('submit', async( event )=>{
        event.preventDefault();

       const token = obtenerToken();
       const data = obtenerDatos( formBitacora );


      const resp = await postBuscarPorUsuarioFecha( token, data );
    
      const usuarios = Object.values(resp[0]);
      limpiarTablaBody();
      usuarios.forEach( htmlMostrarUsuariosBitacora );
       

    });
};