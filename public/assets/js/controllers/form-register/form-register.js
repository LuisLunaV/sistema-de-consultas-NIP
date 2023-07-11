import { postUserCreate } from '../../services/api-post.js';
import { compararPasswords } from '../../helper/index.js'

const resgisterForm = document.querySelector('.form-registro');

export const formRegister =()=>{
    resgisterForm.addEventListener('submit', async( event )=>{
        event.preventDefault();
        
        //Validamos si los password en el registro son diferentes.
      if( !compararPasswords() ){
        resgisterForm.reset();
        return;
      }     
        const formData = {};

        for( let i of resgisterForm.elements ){
            if( i.name.length > 0) formData[i.name] = i.value;
        }

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
        resgisterForm.reset();
       });

       //Validamos que nuestra respuesta haya sido positiva
       if( resp ){
        alert(`Usuario resgitrado con exito`)
            resgisterForm.reset();
            window.location.replace('/auth');
       }

    })
};

