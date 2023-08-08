const axios = require('axios');

const urlSmS      = process.env.URL_SMS;
const urlStatuSmS = process.env.URL_STATUS_SMS;

const serviceSMS = {
  
  smsSend: async (data) => {
    try {
      // Formatear los datos de la carga como parámetros en la URL
      const queryParams = new URLSearchParams(data).toString();
   
      const urlWhitParams = `${urlSmS}?${queryParams}`;
   
      const resp = await axios.post( urlWhitParams )
      
      if (resp.status === 200){
   
        return resp.data;
   
      } else {

        const error = resp.data;
        throw error;

      }
    } catch (error) {
        throw error;
    }
  },

  smsStatus: async( data ) => {
    try {

      const queryParams   = new URLSearchParams( data ).toString();
      const urlWhitParams = `${ urlStatuSmS }${ queryParams }`;
  console.log(urlWhitParams)
      const resp = await axios.get( urlWhitParams );

      if ( resp.status === 200 ) {
            
        return resp.data;
          
      } else {
          const error = await resp.json();
          throw error;
      }
  } catch (error) {
      throw error;     
  }  
  },
};

module.exports = serviceSMS;
