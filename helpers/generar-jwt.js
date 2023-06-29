const jwt = require('jsonwebtoken');

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