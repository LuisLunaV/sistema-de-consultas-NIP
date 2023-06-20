
const validateProperties =( body )=>{  
    return Object.values(body).some( value => value === '' );
 };

 module.exports = {
    validateProperties
 }