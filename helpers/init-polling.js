const { postConsultDetail } = require("../controllers/consults_detail.controller.js");
const { smsStatus }         = require("../service/sms-services.js");

const initigPolling = async( payload, info )=>{
    
    // Iniciar el polling para verificar la entrega del SMS
    const interval = 10000; // Intervalo de polling en milisegundos (10 segundos)
    let delivered = false;

    while ( !delivered ) {
      // Obtener el estado del SMS
      const resp = await smsStatus( payload );
      console.log(resp);
      if (resp.code === 3) {
        // SMS entregado, continuar con el proceso
        delivered = true;

        // Creamos la data que se guardara en la BD.
        const data = {
          ...info,
          CD_Status_SMS: resp.code,
        };

        await postConsultDetail({ ...data });
      } else {
        // Esperar el próximo ciclo de polling
        await new Promise((resolve) => setTimeout(resolve, interval));
      }
    }
}

module.exports = {
    initigPolling
}