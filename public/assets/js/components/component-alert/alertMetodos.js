export const indicarIncompatibilidadBusqueda = async( )=>{

    const resp = await Swal.fire({
        title: "Datos no compatibles", 
        text:  "Los datos ingresados no cumplen con los criterios de búsqueda.", 
        icon:  "error",

        customClass: {
            popup: "popup-alert",
            title: "title-alert",
            icon: "icon-succes",
            htmlContainer: "info-content-alert",
            confirmButton: 'cancelButtonWarning-alert',
        }
          });

          return resp;

}