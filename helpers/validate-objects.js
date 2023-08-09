/**
 * Valida que no falte información en ninguno de los campos del objeto (body).
 * @param {Object} body - Objeto a validar.
 * @returns {boolean} - Indica si hay campos vacíos en el objeto.
 */
const validateObjectProperties =( body )=>{  
    return Object.values(body).some( value => value === '' );
 };

 module.exports = {
validateObjectProperties
 }