const { request, response } = require('express');

const { Employed } = require('../model/employes.js');

const employeds = {
    
    getEmployedNumber: async( req = request, res = response )=>{
        const { number } = req.params;
        
        const employed = await Employed.findOne({
            where:{
                Emp_Number: number
            }
        });

        res.status(200).json({
            employed
        });
    }
}

module.exports = employeds;