import { url, methods } from './index.js';

const getMetodos = async()=>{
     // Primero, verificamos si el metodo ya se encuentra en la caché
     const metodo = localStorage.getItem( 'metodos' );

     if( metodo ){
         // Si el metodo ya se encuentra en la caché, lo devolvemos
        return JSON.parse( metodo );
     }
    try {
        const resp = await fetch(`${ url }${ methods }`);
        
        if ( resp.ok ) {
         // Si la petición al servidor es exitosa, almacenamos el metodo en la caché.
            const { method } = await resp.json();
            localStorage.setItem('metodos', JSON.stringify( method ))
            
            return method;

        } else{
            const error = await resp.json();
            throw error;
        }
} catch (error) {
    throw error;
}

}

export{
    getMetodos
}