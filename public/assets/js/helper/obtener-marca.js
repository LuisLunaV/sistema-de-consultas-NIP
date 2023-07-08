import { getMarca } from '../services/api-get.js';
export const obtenerMarca = async( id )=>{
    
    const marcas = await getMarca();
// console.log( id );
  const [ marca ] = marcas.filter( marcas =>{
        if(marcas.Brand_Id === id ) return marcas.Brand_Name;
    });

    return marca;
}