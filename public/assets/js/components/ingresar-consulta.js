export const htmlIngresarConsulta =( { Method_Name } )=>{

  const divModal = document.querySelector('#modelId');

    const html = `
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title" >${ Method_Name }</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="col-md-7 w-100 form-editar">   
      <div class="mb-3 row">
      <div class="w-100">
        <label for="userNempleado" class="col-4 col-form-label"
          >Ingresa el numero:</label
        >
        <input
          type="text"
          class="form-control mt-3"
          name="User_NumEmpleado"
          id="inputNumEmpleado"
          required
          pattern="[0-9]+"
        />
      </div>
      <div class="d-grid mt-4 text-center">
        <button type="submit" class="btn btn-primary">Realizar consulta</button>
        </div>
    </div>   
        </form>
    </div>
    </div>
  </div>
    `;

    divModal.innerHTML += html;
};