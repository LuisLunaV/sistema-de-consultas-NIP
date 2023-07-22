const { request, response } = require('express');

const { Nipsacc } = require('../model/cliente.js');

const { postConsultDetail } = require('../controllers/consults_detail.controller.js');

const nips = {

    postNipClient: async( req = request, res = response )=>{
        try {

            //Obtenemos los valores del usuario logueado y el metodo de consulat
            const { 
                    Metodo,
                    Numero,
                    Marca,
                    CD_ConsultID,
                    CD_BradID,
                    CD_MethodID
                  } = req.body;

            //Buscamos la informacion del cliente
            const nip = await Nipsacc.findOne({
                where:{
                    Marca,
                    //Seleccionamos en metodo
                    [ Metodo === 'TICKET' ? 'TICKET': Metodo === 'ID_MEMBRESIA' ? 'ID_MEMBRESIA' : 'TELEFONO']
                    //Validamos el numero segun el metodo
                    : Metodo === 'TICKET' ? Numero : Metodo === 'ID_MEMBRESIA'  ? parseInt(Numero):  Numero               
                }
            });

            //Validamos si hay un error al ingresar los datos
            if( !nip ){
                return res.status(400).json({
                    msg: `El metodo ${ Metodo } y el numero ${ Numero } no estan ligados, favor de revisar los datos`
                })
            }

            //Obtenemos el nip
            const { NIP, TELEFONO } = nip;


            const info = {
                CD_ConsultID,
                CD_BradID,
                CD_MethodID,
                CD_ReferenceNum:Numero,
                CD_NIP: NIP
            }

            const result = await postConsultDetail({ ...info })
       

            return res.status(200).json({
                TELEFONO,
                NIP,
                result
            });

            
        } catch (error) {
            console.log(error)

            return res.status(500).json({
                err: error,
                msg: 'Hubo un error en el servidor no pudimos obtener el nip'
            })
        }
    }
}

module.exports = nips;
