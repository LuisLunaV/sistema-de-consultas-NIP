import { getMarca } from '../services/api-get.js';
export const obtenerMarca = async( id )=>{

    //Obtenemos las marcas de la BD o las ya guardadas en localStorage.
    const marcas = await getMarca();

    //Obtenemos la marca actual del usuario
  const [ marca ] = marcas.filter( marcas =>{
        if(marcas.Brand_Id === id ) return marcas.Brand_Name;
    });

    return marca;
}