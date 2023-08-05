import { getMetodos } from '../services/api-get.js';
import { htmlMetodos } from '../components/index.js';

export const imprimirMetodos = async()=>{
   const metodos = await getMetodos();
   metodos.forEach( htmlMetodos ); 
}