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

      /**
     * Actualiza un usuario existente.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene el usuario actualizado.
     */
    putUser: async( req = request, res = response  )=>{
        
        const { id } = req.params;
        /**
         * Ignoramos las propiedades { User_Id, User_Password, ...rest }, y lo que actualizaremos se guardara en el campo rest lo que esta en el campo rest.
         */
        const { User_Id,  ...rest } = req.body;
        console.log(rest)

        //Volvemos a cifrar la contraseña
        if( rest.User_Password ){
            const salt = bcryptjs.genSaltSync();
            rest.User_Password = bcryptjs.hashSync( rest.User_Password, salt );   
        }
        
        const user = await User.findByPk( id );

        rest.User_Name = rest.User_Name.toUpperCase();
        /**
         * Guardamos los cambios
         */
        await user.update( rest, {
            new: true
        });

        return res.status(200).json({
            msg:'Usuario actualizado',
            user
        });

    },

      /**
     * Desactiva un usuario existente.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene el mensaje de éxito.
     */
    deleteUser: async( req = request, res = response )=>{

        const { id } = req.params;

        const user = await User.findByPk( id );

        //Validamos el status del usuario solicitado
        if( !user.User_Status ){
            return res.status(200).json({
                msg: `El usuario cons id ${ id } no existe en la BD`
            });
        }

        await user.update({
            User_Status: false
        });

        return res.status(200).json({
            msg:`El usuario con el id:${ id } ha sido eliminado`
        });
    }

};

module.exports = users;