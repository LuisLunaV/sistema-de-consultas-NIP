const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const { User } = require('../model/user.js');

const { validateProperties } = require('../helpers/validate-objects.js');

const users = {

      /**
     * Crea un nuevo usuario.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene el usuario creado.
     * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
     */
    
    postUser: async( req = request, res = response)=>{
        
        const body = req.body;

        try{
        //Validamos si las propiedades del objeto estan vacias
       if( validateProperties( body ) ){

       return res.status(400).json({
            msg: 'Se necesitan llenar todos los campos'
           });        
       
        };
       
       const { User_Name , User_Password } = body;

       const user = new User({ User_Name , User_Password });

       user.User_Name = User_Name.toUpperCase();

       const salt = bcryptjs.genSaltSync();
       user.User_Password = bcryptjs.hashSync( User_Password, salt );

       await user.save();

       return res.status('201').json({      
            user
        });
        
    }catch(error){
        return res.status(500).json({
            error,
            msg: 'Hubo un error en el servidor'
        });
    }
    },


};

module.exports = users;