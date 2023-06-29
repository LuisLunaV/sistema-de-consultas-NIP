const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const { User } = require('../model/user.js');

const { generarJWT } = require('../helpers/generar-jwt.js');

const login = async(req = request, res = response) => {

    const { User_Name , User_Password } = req.body;

    try{

    const user = await User.findOne({
        where: {
            User_Name
        }
    });

    if( !user){
       return res.status(400).json({
            Error: 'Usuario no existe'
        })        
    }

    if( !user.User_Status ){
        return res.status(401).json({
            Error: 'Usuario dado de baja'
        })        
    }

    const isMatched = bcryptjs.compareSync( User_Password, user.User_Password );

    if( !isMatched ){
        return res.status(401).json({
            Error: 'Password incorrecto'
        })
    }

    const token = await generarJWT( user.User_Id );
    
    res.status(200).json({
        user,
        token
    })

}catch( error ){

    return res.status(500).json({
        error,
        msg: 'Hubo un error en el servidor'
    });

}

};

module.exports = {
    login
}