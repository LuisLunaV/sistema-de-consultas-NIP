const { request, response } = require('express');

const { Consult } = require('../model/consult.js');

const getDate = require('../utils/get-current-date.js');

const consults = {

    getConsultID: async( req= request, res = response )=>{

        const { id } = req.params;

        
    },

    postConsult: async( req = request, res = response ) => {

        try {
            const { Consult_UserID } = req.body;
            
            const Consult_Date = getDate();

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
    },

    putConsult: ()=>{}

};

module.exports = consults;