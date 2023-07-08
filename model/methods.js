const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Method = db.define('Method_consult',{
    Method_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Method_Name:{
        type: DataTypes.STRING    
    },
    Method_Status:{
        type: DataTypes.BOOLEAN
    },
    Method_Description:{
        type: DataTypes.STRING
    }
    
},{
    tableName: 'Method_consult',
    timestamps: false // Impide la creacion automatica de 'createdAt', 'updatedAt'
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

module.exports = {
    Method
};