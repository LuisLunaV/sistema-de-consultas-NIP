import { postLogin } from '../../services/api-post.js';
import { validarCamposLogin } from '../../helper/validar-campos.js';

export const formLogin = ()=>{
    const loginForm          = document.querySelector('.form-login'),
          textBoxNumEmpleado = document.querySelector('#inputNumEmpleado'),
          textBoxPassword    = document.querySelector('#inputPassword');


    loginForm.addEventListener('submit', async( event )=>{

        event.preventDefault();

        const formData = {};

        for( let i of loginForm.elements ){
            if( i.name.length > 0) formData[i.name] = i.value;
        }


        const {token, user} = await postLogin(formData)
        .catch( validarCamposLogin );

        const { User_Password, createdAt, updatedAt, ...rest } = user;

        //Guardamos las credenciales de sesion
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify( rest ));

        window.location = '/';

        textBoxNumEmpleado.value = '';
        textBoxPassword.value = "";
    });
}

