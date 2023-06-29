const { request, response } = require('express');

const { db } = require('../database/config.db');

const { Consult_detail } = require('../model/consults_detail.js');

const consults_detail = {

    //Ejecutamos el procedimiento almacenado de la BD.
    getStoredProcedure: async( req = request, res = response )=>{
    
    try {
        
       const { userId, consultDate } = req.body;

       const information = await db.query('CALL MostrarConsultasPorUsuario(:userId, :consultDate)', {

        replacements: { userId, consultDate },
        type: db.QueryTypes.SELECT

      });
    
      return res.status(200).json({
        information
      });

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            err: error,
            msg: 'Hubo un error en el servidor'
        })
    }
    },

    //Obtenemos la informacion de consulta detalles por el id de la tabla consulta principal relacionada al usuario.
    getConsultDetailId: async( req = request, res = response )=>{
        
        try {
            
            const { id } = req.params;
        
            const { count, rows } = await Consult_detail.findAndCountAll({
                where:{
                    CD_ConsultID: id
                }
            });
    
            return res.status(200).json({        
                count, 
                rows            
            });

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor'
            })
        }


    },

    //Guardamos los movimiento del usuario en la BD
    postConsultDetail: async( req = request, res = response ) => {

        try {

            const { CD_ConsultID, CD_BradID, CD_MethodID, CD_ReferenceNum, CD_NIP } = req.body;    

            const consults_detail = new Consult_detail({ CD_ConsultID, CD_BradID, CD_MethodID, CD_ReferenceNum, CD_NIP });

            //Obtenemos el valor del usuario autenticado desde el archivo validarJWT.
            const usuarioAutenticado = req.user;
            
            await consults_detail.save();
            
            return res.status(200).json({
                consults_detail,
                usuarioAutenticado    
            });
            
        } catch (error) {

            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor'
            })
        }
    }
};

module.exports = consults_detail;