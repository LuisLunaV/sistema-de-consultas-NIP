const { request, response } = require('express');

const { db } = require('../database/config.db');

const { Consult_detail } = require('../model/consults_detail.js');

const consults_detail = {

        /**
     * Ejecuta un procedimiento almacenado de la base de datos para obtener información de consultas por usuario y fecha.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene la información de consultas obtenida.
     * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
     */

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

    /**
     * Obtiene los detalles de una consulta específica por su ID.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene el recuento y las filas de los detalles de consulta encontrados.
     * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
     */

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

    /**
     * Crea un nuevo detalle de consulta.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene el detalle de consulta creado y el usuario autenticado.
     * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
     */
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