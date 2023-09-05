// const { postConsultDetail } = require("../controllers/consults_detail.controller.js");
const { smsStatus } = require("../service/sms-services.js");

const initigPolling = async( payload )=>{
    
    // Iniciar el polling para verificar la entrega del SMS
    const interval = 10000; // Intervalo de polling en milisegundos (10 segundos)
    let   succes   = false;

    while ( !succes ) {
      // Obtener el estado del SMS
      const resp = await smsStatus( payload );
      console.log(resp);
      if (resp.code != 6) {
        // SMS entregado, continuar con el proceso
        succes = true;
        
        return resp;
      } else {
        // Esperar el próximo ciclo de polling
        await new Promise((resolve) => setTimeout(resolve, interval));
      }
    }
}

module.exports = {
    initigPolling
}