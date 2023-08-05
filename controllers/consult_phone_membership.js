const { request, response } = require('express');

const { Nipsacc } = require('../model/cliente.js');
const consult_phone_membership ={

    postPhoneAndMembership: async( req = request, res = response )=>{

       const { MARCA, 
               TELEFONO, 
               ID_MEMBRESIA,                    
               CD_ConsultID,
               CD_BradID,
               CD_MethodID,
               CD_Status_SMS
             } = req.body;

       const nip = await Nipsacc.findOne({
        where:{
            MARCA,
            TELEFONO,
            ID_MEMBRESIA: parseInt(ID_MEMBRESIA),
        }
       });

       if( !nip ){
        return res.status(400).json({
            error:"No hay NIP relacionado con los datos recibidos"
        })
       };

       //Obtenemos el nip
       const { NIP } = nip;

       const info = {
        CD_ConsultID,
        CD_BradID,
        CD_MethodID,
        CD_ReferenceNum:`${TELEFONO}/${ID_MEMBRESIA}`,
        CD_NIP: NIP,
        CD_Status_SMS
    }

       res.status(200).json({
        info
       });
    }
};

module.exports = consult_phone_membership;