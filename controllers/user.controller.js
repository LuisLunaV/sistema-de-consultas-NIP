const { request, response } = require('express');

const { User } = require('../model/user.js');

const { validateProperties } = require('../helpers/validate-objects.js');

const users = {
    
    getUserById: ()=>{

    },

    postUser: async( req = request, res = response)=>{
        
        const body = req.body;

        //Validamos si las propiedades del objeto estan vacias
       if( validateProperties( body ) ){

       return res.status(400).json({
            msg: 'Se necesitan llenar todos los campos'
           });        
       
        };
       
       const { User_Name , User_Password } = body;

       const user = new User({ User_Name , User_Password });

       user.User_Name = User_Name.toUpperCase();

       await user.save();

       return res.status('201').json({      
            user
        });

    },

    updateUser: ()=>{

    },

    deleteUser: ()=>{
        
    }
};

module.exports = users;