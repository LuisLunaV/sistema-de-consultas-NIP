import { postUserCreate } from '../../services/api-post.js';
import { compararPasswords } from '../../helper/index.js'

const resgisterForm = document.querySelector('.form-registro');

export const formRegister =()=>{
    resgisterForm.addEventListener('submit', async( event )=>{
        event.preventDefault();
        
      if( !compararPasswords() ){
        resgisterForm.reset();
        return;
      }     
        const formData = {};

        for( let i of resgisterForm.elements ){
            if( i.name.length > 0) formData[i.name] = i.value;
        }

        const {repitePassword, ...data} = formData;
    
        const resp = await postUserCreate( data )
       .catch((err)=>{
        err.forEach( ( { msg } ) => {
            alert( msg );
        });
        resgisterForm.reset();
       });

       if( resp ){
        alert(`Usuario resgitrado con exito`)
            resgisterForm.reset();
            window.location.replace('/auth');
       }

    })
};

