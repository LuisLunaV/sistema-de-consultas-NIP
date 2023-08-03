import { postLogin } from '../services/api-post.js';
import { validarCamposLogin, obtenerDatos } from '../helper/index.js';

export const formLogin = ()=>{
    const loginForm          = document.querySelector('.form-login'),
          textBoxNumEmpleado = document.querySelector('#inputNumEmpleado'),
          textBoxPassword    = document.querySelector('#inputPassword');


    loginForm.addEventListener('submit', async( event )=>{

        event.preventDefault();

        const formData = obtenerDatos( loginForm );

        //Enviamos la data al backend y esperamos la respuesta
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

