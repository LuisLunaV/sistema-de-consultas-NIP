const { request, response } = require('express');
const { Op } = require('sequelize');
const { db } = require('../database/config.db');

const { Consult } = require('../model/consult.js');

const { getDates } = require('../utils/get-current-date.js');

const consults = {

    postConsultDate: async( req = request, res = response )=>{
        try {
            const { Consult_UserID, Consult_Date } = req.body;

            const consult = await Consult.findOne({
                where:{
                    [Op.and]: [
                        { Consult_UserID: { [Op.eq]: Consult_UserID } },
                        { Consult_Date: { [Op.gte]: db.literal(`DATE('${Consult_Date}')`) } }
                      ]
                }
            });
            
            return res.status(200).json({
                consult,
             })

        } catch (error) {          
            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor'
            })
        }

    },
     /**
     * Crea una nueva consulta.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {Object} - Objeto JSON que contiene la consulta creada.
     * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
     */
    postConsult: async( req = request, res = response ) => {

        try {
            const { Consult_UserID } = req.body;

            const Consult_Date = getDates();

            const consult = new Consult({ Consult_UserID, Consult_Date }); 
            
            await consult.save();
 
            return res.status(200).json({
               consult,
            })
            
        } catch (error) {

            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor'
            })
        }
    }

};

module.exports = consults;