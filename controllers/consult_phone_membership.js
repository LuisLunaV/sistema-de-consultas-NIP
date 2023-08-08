const { request, response } = require('express');

const { Nipsacc }            = require('../model/cliente.js');
const { postConsultDetail } = require('../controllers/consults_detail.controller.js')

const { smsSend, smsStatus } = require('../service/sms-services.js');
const { generateSmsPayload, statusSmsPayload } = require('../helpers/generate-sms.js');

const consult_phone_membership ={

    postPhoneAndMembership: async( req = request, res = response )=>{

       const { MARCA, 
               TELEFONO, 
               ID_MEMBRESIA,                    
               CD_ConsultID,
               CD_BradID,
               CD_MethodID,
             } = req.body;

       const nip = await Nipsacc.findOne({
        where:{
            MARCA,
            TELEFONO,
            ID_MEMBRESIA: parseInt(ID_MEMBRESIA),
        }
       });

       if( !nip ){
        return res.status(400).json({
            error:"No hay NIP relacionado con los datos recibidos"
        })
       };

       const { NIP } = nip;

       //Generamos la carga SMS
       const smsPayload = generateSmsPayload( NIP, TELEFONO );
       //Enviamos el SMS al cliente
       const { id } = await smsSend( smsPayload );
       
      
       //Generamos la carga para obtener el status del SMS
       const getStatuPayload = statusSmsPayload( id )

         // Iniciar el polling para verificar la entrega del SMS
         const interval  = 10000; // Intervalo de polling en milisegundos (10 segundos)
         let   delivered = false;

         while (!delivered) {
            // Obtener el estado del SMS
            const resp = await smsStatus(getStatuPayload);
            console.log(resp)
            if (resp.code === 3) {
                // SMS entregado, continuar con el proceso
                delivered = true;

                const info = {
                    CD_ConsultID,
                    CD_BradID,
                    CD_MethodID,
                    CD_ReferenceNum:`${TELEFONO}/${ID_MEMBRESIA}`,
                    CD_NIP: NIP,
                    CD_Status_SMS: resp.code
                }
            
               const result = await postConsultDetail( {...info} );
            
                  return res.status(200).json({
                    TELEFONO,
                    NIP,
                    result
                   });
            } else {
                // Esperar el próximo ciclo de polling
                await new Promise(resolve => setTimeout(resolve, interval));
            }
        }


    }
};

module.exports = consult_phone_membership;