import { getMetodos } from '../services/api-get.js';
import { htmlMetodos } from '../components/index.js';

export const imprimirMetodos = async()=>{
   const metodos = await getMetodos();

   //Filtramos los metodos para evitar que se imprima la opcion de combinados.
  const imprimirMetodos = metodos.filter(metodo =>{
      if(metodo.Method_Id != 4) return metodo; 
   })

   imprimirMetodos.forEach( htmlMetodos );

}