export const obtenerToken=()=>{
    const token = sessionStorage.getItem("token");
    return token;
};