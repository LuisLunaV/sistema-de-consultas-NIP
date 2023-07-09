import { obtenerMarca, crearConsulta } from'../../helper/index.js';

const metodos = {
    1: "TICKET",
    2: "ID_MEMBRESIA",
    3: "TELEFONO"
}

export const formRealizarConsulta =()=>{
    
    const formConsultarNip = document.querySelector('.form-consultar-nip');

    formConsultarNip.addEventListener('submit', async( event )=>{

        event.preventDefault();
        
        const formData = {};

        for( let i of formConsultarNip.elements ){
            if( i.name.length > 0) formData[i.name] = i.value;
        }
        
        const { Numero } = formData;
        const method_id = event.target.closest(".form-consultar-nip").dataset.value;

        const {User_Id, User_BrandId } = JSON.parse( sessionStorage.getItem('user'));

        const { Brand_Name } = await obtenerMarca( User_BrandId );

        crearConsulta( User_Id );

        const data = {
            Metodo: metodos[method_id],
            Numero: Numero,
            Marca: Brand_Name,
            // CD_ConsultID:,
            CD_BradID: User_BrandId,
            CD_MethodID: method_id
        }

        // console.log(data)
    });
};