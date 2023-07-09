import { postConsultCreate, postBuscarConsulta } from '../services/api-post.js';
import { fechaActual } from '../utils/index.js';
export const crearConsulta = async( id )=>{

    //Obtenemos el id del usuario y el token guardado de la sesion
    const token = sessionStorage.getItem('token');
    const data = {
        Consult_UserID: id
    }
    

    //Obtenemos la fecha actual
    const fechaHoy = fechaActual();

    //Creamos el objeto con los datos necesarios para validar si ya se creo una consulta con la fecha de hoy en la BD
    const existeConsulta = {
        Consult_UserID: id,
        Consult_Date: fechaHoy.replace(/\//g, "-")
    };

    //Validamos la existencia de la consulta buscandola en la BD
   const { consult } = await postBuscarConsulta( existeConsulta )
  
   //Si no existe ninguna consulta creada con la fecha de hoy, la creamos. Si no, no hacemos nada.
    if( !consult ) await postConsultCreate( token, data );

};