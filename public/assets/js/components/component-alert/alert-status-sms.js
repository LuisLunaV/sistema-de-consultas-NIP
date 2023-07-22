import { codigo } from '../../utils/codigos-sms.js';

export const statusSmS = ( success, code ) => {

    if( success ){
   return Swal.fire({
        title: `${codigo[ code ]}`,
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

       return Swal.fire({
            title: `${codigo[ code ]}`,
            icon:  "error",
    
            customClass: {
              popup: "popup-alert",
              title: "title-alert",
              text: "Por favor, comunícate con soporte.", 
              icon: "icon-succes",
              htmlContainer: "info-content-alert",
              confirmButton: 'cancelButtonWarning-alert',
              }
    
              });
};