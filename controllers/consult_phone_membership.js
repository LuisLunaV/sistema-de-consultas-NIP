const { request, response }        = require("express");

const { Nipsacc }                  = require("../model/cliente.js");

const { validateObjectProperties } = require("../helpers/validate-objects.js");
const { smsSend }                  = require("../service/sms-services.js");
const { generateSmsPayload,
        statusSmsPayload,
        initigPolling }            = require("../helpers/index.js");

const consult_phone_membership = {
  postPhoneAndMembership: async (req = request, res = response) => {
    const body = req.body;

    //Validamos que los campos no esten vacios
    if (validateObjectProperties(body)) {
      return res.status(400).json({
        msg: "Se necesitan llenar todos los campos",
      });
    }

    const {
      MARCA,
      TELEFONO,
      ID_MEMBRESIA,
      CD_ConsultID,
      CD_BradID,
      CD_MethodID,
    } = body;

    const nip = await Nipsacc.findOne({
      where: {
        MARCA,
        TELEFONO,
        ID_MEMBRESIA: parseInt(ID_MEMBRESIA),
      },
    });

    if (!nip) {
      return res.status(400).json({
        error: "No hay NIP relacionado con los datos recibidos",
      });
    }

    const { NIP } = nip;

    //Generamos la carga SMS
    const smsPayload = generateSmsPayload(NIP, TELEFONO);
    //Enviamos el SMS al cliente
    const { id, success, code } = await smsSend(smsPayload);

    //Mostramos el nip y el numero telefonico del cliente
    res.status(200).json({
      TELEFONO,
      NIP,
      Enviado: success,
      CODIGO: code,
    });

    //Generamos la carga para obtener el status del SMS
    const getStatuPayload = statusSmsPayload(id);

    const info = {
      CD_ConsultID,
      CD_BradID,
      CD_MethodID,
      CD_ReferenceNum: `${ID_MEMBRESIA}/${TELEFONO}`,
      CD_NIP: NIP,
    };

    //Inicia el sondeo al servidor para validar si el mensaje fue entregado al cliente 
    await initigPolling( getStatuPayload, info)
    .catch( error =>{
      console.error( error );
    });

  }
};

module.exports = consult_phone_membership;
