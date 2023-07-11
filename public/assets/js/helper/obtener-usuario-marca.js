export const obtenerUsuarioMarca =()=>{
    const { User_NumEmpleado, User_BrandId } = JSON.parse( sessionStorage.getItem('user'));
    const marcas =JSON.parse( localStorage.getItem('marcas'));

    const [ marca ] = marcas.filter( marca =>{
      return marca.Brand_Id === User_BrandId;
    });
    
    const info = {
        User_NumEmpleado,
        marca
    }

    return info;
};