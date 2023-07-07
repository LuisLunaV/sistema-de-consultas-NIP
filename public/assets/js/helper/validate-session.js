//Validar el token generado desde el back-end para el cliente
export const validarToken = ( ) =>{

    const token = sessionStorage.getItem('token');

    if( !token ){
        window.location.replace('/auth');
    }

};

