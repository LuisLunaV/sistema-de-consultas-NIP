const { request, response } = require('express');

const jwt = require('jsonwebtoken');

const { User } = require('../model/user.js');

const validarJWT = async( req = request, res = response, next )=>{
    
    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            msg: 'No hay token de peticion'
        });
    }

    try {

        //Nos devuelve el objeto { id: 1, iat: 1687978892, exp: 1688022092 }
        const { id }  = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        const user = await User.findByPk( id );

        if( !user ){
            console.log('Error atrapado')
        }

        if( !user.User_Status){
            return res.status(401).json({
                msg: 'Token no valido - Usuario dado de baja'
            })
        }
 /**
  *Asignamos la información del usuario autenticado a la propiedad "user" del objeto "req" para hacerla accesible 
  *en los controladores y middlewares subsiguientes.* 
  */    req.user = user;
  
        next();

    } catch (error) {
    
        console.log(error);
    
       return res.status(401).json({
            msg: 'Token no valido'
        });

    }

};

module.exports = {
    validarJWT
}