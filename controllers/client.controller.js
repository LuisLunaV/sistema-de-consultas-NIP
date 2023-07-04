const { request, response } = require('express');

const { Nip } = require('../model/clienteNip.js');

const { postConsultDetail } = require('../controllers/consults_detail.controller.js');

const nips = {

    getNipClient: async( req = request, res = response )=>{
        try {

            //Recibimos Número de Ticket, Número de Folio y Número de Membresía,
            const { number } = req.params;

            //Obtenemos los valores del usuario logueado y el metodo de consulat
            const { CD_ConsultID,
                    CD_BradID,
                    CD_MethodID
                  } = req.body;

            //Buscamos la informacion del cliente
            const nip = await Nip.findOne({
                where:{
                    Local_Refernc: number
                }
            });

            //Obtenemos el nip
            const { Local_Nip } = nip;


            const info = {
                CD_ConsultID,
                CD_BradID,
                CD_MethodID,
                CD_ReferenceNum:number,
                CD_NIP: Local_Nip
            }

            const result = await postConsultDetail({ ...info })
       

            return res.status(200).json({
                nip,
                result
            });

            
        } catch (error) {
            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor'
            })
        }
    }
}

module.exports = nips;
