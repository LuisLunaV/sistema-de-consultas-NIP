const { request, response } = require('express');

const { Method } = require('../model/methods.js');

const methods = {
    getMethods: async( req = request, res = response )=>{
        
        const method = await Method.findAll();

        res.status(200).json({
            method
        });
    }
};

module.exports = methods;