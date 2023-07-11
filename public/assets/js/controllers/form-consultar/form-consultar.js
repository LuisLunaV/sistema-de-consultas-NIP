import { obtenerMarca, crearConsulta } from "../../helper/index.js";
import { postConsultarNip } from "../../services/api-post.js";
import {
  mostrarNip,
  indicarIncompatibilidadBusqueda,
} from "../../components/index.js";

const metodos = {
  1: "TICKET",
  2: "ID_MEMBRESIA",
  3: "TELEFONO",
};

export const formRealizarConsulta = () => {
  const formConsultarNip = document.querySelector(".form-consultar-nip");

  formConsultarNip.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {};

    for (let i of formConsultarNip.elements) {
      if (i.name.length > 0) formData[i.name] = i.value;
    }

    const dataForm = formData;

    const method_id = event.target.closest(".form-consultar-nip").dataset.value;

    const { User_Id, User_BrandId } = JSON.parse(
      sessionStorage.getItem("user")
    );

    const { Brand_Name } = await obtenerMarca(
      dataForm.User_BrandId ? Number(dataForm.User_BrandId) : User_BrandId
    );

    const { Consult_Id } = await crearConsulta(User_Id);

    const data = {
      Metodo: metodos[method_id],
      Numero: dataForm.Numero,
      Marca: Brand_Name,
      CD_ConsultID: Consult_Id,
      CD_BradID: User_BrandId,
      CD_MethodID: method_id,
    };

    const token = sessionStorage.getItem("token");

    try {
      const informacionNip = await postConsultarNip(token, data);
      mostrarNip(informacionNip);
    } catch (error) {
      indicarIncompatibilidadBusqueda();
    }
  });
};
