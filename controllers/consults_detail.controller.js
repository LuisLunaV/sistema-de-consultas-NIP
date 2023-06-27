const { request, response } = require('express');

const { Consult_detail } = require('../model/consults_detail.js');

const consults_detail = {

    postConsultDetail:( req = request, res = response ) => {
       const body = req.body;

       return res.status(200).json({
        msg: 'Hola mundo'
       })
    }
}

module.exports = consults_detail;