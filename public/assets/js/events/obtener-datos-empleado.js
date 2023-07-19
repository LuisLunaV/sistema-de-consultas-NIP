import { getEmployesByNumber } from "../services/api-get.js";
import { alertaEmpleadoNoExiste } from "../components/component-alert/alert-empleado-inexistente.js";

//Validamos la existencia del usuario, buscamos sus datos y los imprimimos en los texbox del apartado registro.

export const obtenerDatosDelEmpleado = () => {
  const textBoxNumEmpleado = document.querySelector("#NumEmpleadoCompleto"),
    textBoxNombre = document.querySelector("#nombreCompleto"),
    textBoxEmail = document.querySelector("#email"),
    btnDeRegistro = document.querySelector("#btn-registro");

  textBoxNumEmpleado.addEventListener("keyup", async (event) => {
    event.preventDefault();

    const number = textBoxNumEmpleado.value;

    if (event.keyCode === 13 && textBoxNumEmpleado.value.length > 0) {
      try {
       const resp = await getEmployesByNumber(number);
        if (resp) {
          textBoxNombre.value = resp.Emp_Name;
          textBoxEmail.value = resp.Emp_Email;
          btnDeRegistro.disabled = false;
        }
      } catch (err) {
        const [info]  = err;
        const mensaje = info.msg;
        alertaEmpleadoNoExiste( mensaje )
      }
    }
  });
};
