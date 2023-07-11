import { htmlMostrarUsuario, htmlMostrarAdmin } from '../components/index.js';

export const validarRol =()=>{
    const { User_RolID } = JSON.parse(sessionStorage.getItem('user'));
    if(User_RolID === 2){
       htmlMostrarAdmin();
        return;
    }
    htmlMostrarUsuario();
}