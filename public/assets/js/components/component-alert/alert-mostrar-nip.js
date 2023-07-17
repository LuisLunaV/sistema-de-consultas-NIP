export const mostrarNip = ( {NIP, result} )=>{

  if( result.CD_MethodID != 3 ){
        Swal.fire({
        title: "¡Datos verificados! NIP relacionado encontrado.",
        text: `${NIP}`, 
        icon:  "success",

        customClass: {
            popup: "popup-alert",
            title: "title-alert",
            icon: "icon-succes",
            htmlContainer: "info-content-alert",
            confirmButton: 'cancelButtonWarning-alert',
        }
          });
          return;
        }

        Swal.fire({
          title: "¿Deseas enviar el NIP al cliente que lo está solicitando?",
          text: `${NIP}`, 
          icon:  "question",
          confirmButtonColor: "#198744",
          confirmButtonText: "Enviar",

          showCancelButton: true,
          cancelButtonColor: "#E02835",
          cancelButtonText: "Salir",
 
          customClass: {
              popup: "popup-alert",
              title: "title-alert",
              icon: "icon-succes",
              htmlContainer: "info-content-alert",
              confirmButton: "button-reenviar",
              cancelButton: "button-salir"
          }
            }).then(( resp )=>{
              if(resp.isConfirmed){
                Swal.fire({
                  title: `¡NIP relacionado enviado con exito al numero ${result.CD_ReferenceNum}.`,
                  icon:  "success",

                  customClass: {
                    popup: "popup-alert",
                    title: "title-alert",
                    icon: "icon-succes",
                    htmlContainer: "info-content-alert",
                    confirmButton: 'cancelButtonWarning-alert',
                    }

                    });
              }

            });

};