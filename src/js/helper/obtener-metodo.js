export const obtenerMetodoDeConsulta = ( id )=>{
   
    const metodos = JSON.parse( sessionStorage.getItem('metodos'));

  const [ metodo ] = metodos.filter(metodo =>{
    if( metodo.Method_Id ===  id){
        return metodo;
    }
   });

   return metodo.Method_Name;
};