import { obtenerUsuarioMarca } from '../helper/obtener-usuario-marca.js';

export const htmlIngresarConsulta =( { Method_Name, Method_Id } )=>{
  
  const divModal = document.querySelector('#modelId');
  
     const { marca:{ Brand_Name }} =obtenerUsuarioMarca();
     
    const html = `
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title" >${ Method_Name }</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="col-md-7 w-100 form-consultar-nip" data-value = "${Method_Id}">   
      <div class="mb-3 row">
      ${( Brand_Name === 'GRG')?`
      <div class="mb-3">
      <select class="form-select" aria-label="Default select example" name="User_BrandId" required>
      <option value="1">TOKS</option>
      <option value="2">PANDA EXPRESS</option>
      <option value="3">BEER FACTORY</option>
      <option value="4">FAROLITO</option>
      <option value="5">SHAKE SHACK</option>
      </select>
      </div>`:''
      }
      <div class="w-100">
        <label for="userNempleado" class="col-4 col-form-label"
          >Ingresa el numero:</label
        >
        <input
          type="text"
          class="form-control mt-3"
          name="Numero"
          required
          pattern="[0-9]+"
        />
      </div>
      <div class="d-grid mt-4 text-center">
        <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Realizar consulta</button>
        </div>
    </div>   
        </form>
    </div>
    </div>
  </div>
    `;

    divModal.innerHTML += html;
};