import { smsServices } from '../../services/sms-services.js';
import { patchConsultDetails } from '../../services/api-post.js';
import { formarDataDeSmS } from '../../helper/obtener-datos-sms.js';
import { statusSmS } from './alert-status-sms.js';

export const mostrarNip = ( { NIP, TELEFONO, result } )=>{

        Swal.fire({
          title: `¿Deseas enviar el NIP al numero ${TELEFONO} del cliente?`,
          text: `NIP solicitado: ${NIP}`, 
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

                //Formamos la carga que se enviara al servicio de mensajeria
                const dataSmS = formarDataDeSmS( NIP, TELEFONO )
                
                //Enviamos el nip y el numero tel. para realizar el envio del sms
                const { id, success, code } = await smsServices( dataSmS )
                .catch((err) =>{
                  console.log(`El erro es: ${err}`)
                });

                //Creamos la carga para realizar la auditoria SMS y acutalizar la consulta
                const payload = {
                  ...result,
                  messageid: id
                }


              const resp = await patchConsultDetails( payload )
                console.log(resp)

                //Devuelve la respuesta de entrega de sms.
                statusSmS( success, code );
               


              }

            });

};