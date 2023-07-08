export const htmlMostrarUsuario =()=>{
    const liUsuario = document.querySelector('.nav-usernumber');
    const { User_NumEmpleado } = JSON.parse( sessionStorage.getItem('user'));
    
    const html = `<div id="cont-name-perfil">    
                   <span id="numero-empleado">
                    <i class="bi bi-star"></i> 
                    ${ User_NumEmpleado }
                    </span>
                  </div>`;
                  
    liUsuario.innerHTML += html;
    
    };