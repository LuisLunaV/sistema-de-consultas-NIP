const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Brand = db.define('Brands',{
    Brand_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Brand_Name:{
        type: DataTypes.STRING    
    }
    
},{
    tableName: 'Brands',
    timestamps: false // Impide la creacion automatica de 'createdAt', 'updatedAt'
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

module.exports = {
    Brand
};