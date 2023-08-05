const iconos = {
    1: '<i class="bi bi-ticket-detailed-fill Heading" style="font-size: 2.5em"></i>',
    2: '<i class="bi bi-person-vcard" style="font-size: 2.5rem"></i>',
    3: '<i class="bi bi-phone-fill" style="font-size: 2.5rem"></i> '
};

export const htmlMetodos =( { Method_Id, Method_Name, Method_Description } )=>{

    const contenedor = document.querySelector('.contenedor-mis-servicios');

    const html = `
    <div class="contenedor-de-servicio" data-value = "${ Method_Id }">
    <div class="titulo-de-servicios">
    ${iconos[ Method_Id ]}
    </div>
    <div class="informacion-del-servicio">
      <h3>${ Method_Name }</h3>
      <p>
      ${ Method_Description }
      </p>
    </div>
    <div class="card-boton centrar-texto" >
    <a href="#" >Consultar NIP</a>
  </div>
  </div>`;

  contenedor.innerHTML += html;
};