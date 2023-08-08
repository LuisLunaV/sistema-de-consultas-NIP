import { url, methods, brands, employes } from './index.js';

const getEmployesByNumber = async( number )=>{
    try {
        const resp = await fetch(`${ url }${ employes }/${number}`);
       
        if ( resp.ok ) {
            const { employed } = await resp.json();

            return employed;
 
        } else{
            const { errors } = await resp.json();
            throw errors;
        }
        
    } catch (error) {
        throw error;
    }
};

const getMetodos = async()=>{
     // Primero, verificamos si el metodo ya se encuentra en la caché
     const metodo = localStorage.getItem( 'metodos' );

     if( metodo ){
         // Si el metodo ya se encuentra en la caché, lo devolvemos
         localStorage.removeItem('metodos');
     }
    try {
        const resp = await fetch(`${ url }${ methods }`);
        
        if ( resp.ok ) {
         // Si la petición al servidor es exitosa, almacenamos el metodo en la caché.
            const { method } = await resp.json();
            sessionStorage.setItem('metodos', JSON.stringify( method ))
            
            return method;

        } else{
            const error = await resp.json();
            throw error;
        }
} catch (error) {
    throw error;
}

};

const getMarca = async()=>{
    // Primero, verificamos si el metodo ya se encuentra en la caché
    const marca = localStorage.getItem( 'marcas' );

    if( marca ){
        // Si el metodo ya se encuentra en la caché, lo devolvemos
       return JSON.parse( marca );
    }
   try {
       const resp = await fetch(`${ url }${ brands }`);
       
       if ( resp.ok ) {
        // Si la petición al servidor es exitosa, almacenamos el metodo en la caché.
           const { brand } = await resp.json();
           localStorage.setItem('marcas', JSON.stringify( brand ))
           
           return brand;

       } else{
           const error = await resp.json();
           throw error;
       }
} catch (error) {
   throw error;
}

}
export{
    getMetodos,
    getMarca,
    getEmployesByNumber
}