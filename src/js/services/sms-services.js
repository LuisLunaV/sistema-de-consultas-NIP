import { urlSmS } from './index.js';

const smsServices = async( data )=>{
    try {
         // Formatear los datos de la carga como parámetros en la URL
        const queryParams = new URLSearchParams(data).toString();
        const urlWhitParams = `${urlSmS}?${queryParams}`;

        const resp = await fetch( urlWhitParams,{
            method: "POST"
        });

        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
        
    } catch (error) {
        throw error;    
    }

};


export{
    smsServices,
}