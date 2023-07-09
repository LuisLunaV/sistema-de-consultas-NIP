export const mostrarNip = async( data )=>{
   const resp = await Swal.fire({
        title: "¡Datos verificados! NIP relacionado encontrado.",
        text: `${data.NIP}`, 
        // text:  "Tu pedido ha sido eliminado, ¡pero no te preocupes! Seguiremos siendo amigos de compras.🙂", 
        icon:  "success",

        customClass: {
            popup: "popup-alert",
            title: "title-alert",
            icon: "icon-succes",
            htmlContainer: "info-content-alert",
            confirmButton: 'cancelButtonWarning-alert',
        }
          });
};