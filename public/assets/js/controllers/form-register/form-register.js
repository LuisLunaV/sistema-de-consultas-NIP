import { postUserCreate } from '../../services/api-post.js';
import { compararPasswords, obtenerDatos } from '../../helper/index.js'

const registerForm = document.querySelector('.form-registro');

export const formRegister =()=>{
    registerForm.addEventListener('submit', async( event )=>{
        event.preventDefault();
        
        //Validamos si los password en el registro son diferentes.
      if( !compararPasswords() ){
        registerForm.reset();
        alert('Las contraseñas no coinciden');
        return;
      }     

        const formData = obtenerDatos( registerForm );

        //Purgamos la data del segundo password ya comparado
        const {repitePassword, ...data} = formData;
    
        //Validamos si se selecciono una marca valida en el formulario
        if (data.User_BrandId === "Seleccione su marca") {
          alert("Por favor, seleccione una marca.");
          return;
        }

        //Enviamos la data para el registro
        const resp = await postUserCreate( data )
       .catch((err)=>{
        err.forEach( ( { msg } ) => {
            alert( msg );
        });
        registerForm.reset();
       });

       //Validamos que nuestra respuesta haya sido positiva
       if( resp ){
        alert(`Usuario resgitrado con exito`)
            registerForm.reset();
            window.location.replace('/auth');
       }

    })
};

