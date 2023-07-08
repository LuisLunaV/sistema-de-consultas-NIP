const { request, response } = require('express');

const { Brand } = require('../model/brands.js');

const brands = {
    getBrands: async( req = request, res = response )=>{
        const brand = await Brand.findAll();

        res.status(200).json({
            brand
        });
    }
};

module.exports = brands;