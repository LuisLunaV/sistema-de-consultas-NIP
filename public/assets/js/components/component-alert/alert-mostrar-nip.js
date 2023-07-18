import { smsServices } from '../../services/sms-services.js';
export const mostrarNip = ( {NIP, result} )=>{

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
            }).then( async( resp )=>{
              //Esto se ejecutara si el usuario acepta realizar el envio del nip al cliente.
              if(resp.isConfirmed){
                
                const phoneNumber = result.CD_ReferenceNum;

                //Enviamos el nip y el numero tel. para realizar el envio del sms
                const resp = await smsServices( NIP, phoneNumber )
                .catch((err) =>{
                  console.log(`El erro es: ${err}`)
                });

                console.log(resp)
                
                Swal.fire({
                  title: `¡NIP relacionado enviado con exito al numero ${ phoneNumber }!.`,
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