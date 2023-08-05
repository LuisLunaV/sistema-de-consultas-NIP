import { postConsultarNip } from "../services/api-post.js";
import { mostrarNip, indicarIncompatibilidadBusqueda } from "../components/index.js";
import { obtenerMarca, crearConsulta, obtenerDatos } from "../helper/index.js";
import { obtenerToken } from '../utils/obtener-token.js';

//Nombres de las columnas de la BD cliente donde se filtraran los NIP
const metodos = {
  1: "TICKET",
  2: "ID_MEMBRESIA",
  3: "TELEFONO",
};

export const formRealizarConsulta = () => {
  const formConsultarNip = document.querySelector(".form-consultar-nip");

  formConsultarNip.addEventListener("submit", async (event) => {
    event.preventDefault();


    //Obtenemos todos los valores de los input o select del formulario donde se ingresaran los numeros
    const formData =  obtenerDatos( formConsultarNip );
  

    //Obtenemos el data-value que se encotrara en la etiqueta form, el cual es el metodo de consulta.
    const method_id = event.target.closest(".form-consultar-nip").dataset.value;

    const { User_Id, User_BrandId } = JSON.parse(
      sessionStorage.getItem("user")
    );

    //Dependiendo si se obtuvo un valor de select dentro del formulario, se realizara una condicion, si el valor es true o false(null).
    const { Brand_Name } = await obtenerMarca(
      formData.User_BrandId ? Number(formData.User_BrandId) : User_BrandId
    );

    //Creamos la consulta por dia en la BD.
    const { Consult_Id } = await crearConsulta(User_Id);

    const data = {
      Metodo: metodos[method_id],
      Numero: formData.Numero,
      Marca: Brand_Name,
      CD_ConsultID: Consult_Id,
      CD_BradID: User_BrandId,
      CD_MethodID: method_id,
    };

    const token = obtenerToken();
    
    //Enviamos el token y la data para realizar la consulta al backend
    try {
      const informacionNip = await postConsultarNip(token, data);
      mostrarNip(informacionNip);
    } catch (error) {
      indicarIncompatibilidadBusqueda();
    }
  });
};
