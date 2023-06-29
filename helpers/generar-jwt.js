const jwt = require('jsonwebtoken');

/**
 * Genera un token JWT (JSON Web Token) con el ID proporcionado.
 * @param {string} id - ID para incluir en el token.
 * @returns {Promise<string>} - Promesa que resuelve con el token generado.
 * @throws {Error} - Error en caso de que no se pueda generar el token.
 */

const generarJWT = ( id = '') => {

    return new Promise(( resolve, reject )=>{

        //Creamos el objeto payload { id: User_id }
        const payload = { id };


        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '12h'
        }, ( err, token )=>{

            if( err ){
                console.log(err);
                reject( 'No se pudo generar el token' )
            }else{
                resolve( token );
            }
        });

    });
};

module.exports = {
    generarJWT
};