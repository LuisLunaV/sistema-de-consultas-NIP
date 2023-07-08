import { htmlIngresarConsulta } from '../components/index.js';
import { mostrarModalConsulta, limpiarModalProductos } from '../utils/index.js';
import { formRealizarConsulta } from '../controllers/index.js';

export const consultarNip =()=>{
    const contenedorMetodo = document.querySelector('.contenedor-mis-servicios');
    
    contenedorMetodo.addEventListener('click', async( event )=>{

        const btnConsultarNip = event.target.closest('.card-boton');

        if( btnConsultarNip ){
            const id = event.target.closest(".contenedor-de-servicio").dataset.value;
            const metodos = JSON.parse( localStorage.getItem('metodos'));

            limpiarModalProductos();

           const [ data ] = metodos.filter( metodo =>{
                return metodo.Method_Id === Number(id);
            });

            htmlIngresarConsulta( data );
            mostrarModalConsulta()
           
            formRealizarConsulta();
        }
    });
}