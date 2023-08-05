import { postUserCreate } from '../services/api-post.js';
import { compararPasswords, obtenerDatos } from '../helper/index.js'

const registerForm = document.querySelector('.form-registro');


export const formRegister =()=>{
    registerForm.addEventListener('submit', async( event )=>{
        event.preventDefault();
        
        //Validamos si los password en el registro son diferentes.
      if( !compararPasswords() ){
        alert('Las contraseñas no coinciden');
        location.reload();
        return;
      }     

        const formData = obtenerDatos( registerForm );

        //Purgamos la data del segundo password ya comparado
        const {repitePassword, ...data} = formData;
  

        //Enviamos la data para el registro
        const resp = await postUserCreate( data )
       .catch((err)=>{
        err.forEach( ( { msg } ) => {
            alert( msg );
        });
        location.reload();
       });

       //Validamos que nuestra respuesta haya sido positiva
       if( resp ){
        alert(`Usuario resgitrado con exito`)
            registerForm.reset();
            window.location.replace('/auth');
       }

    })
};

