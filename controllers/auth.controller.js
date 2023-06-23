const { request, response } = require('express');

const { User } = require('../model/user.js');
const bcryptjs = require('bcryptjs');

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

    res.status(200).json({
        user
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