//Vlidamos que no falte informacion en ninguno de los campos del objeto (body)
const validateProperties =( body )=>{  
    return Object.values(body).some( value => value === '' );
 };

 module.exports = {
    validateProperties
 }