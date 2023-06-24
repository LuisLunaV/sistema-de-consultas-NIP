const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Consult = db.define('Consults',{
    Consult_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Consult_UserID:{
        type: DataTypes.INTEGER    
    },
    Consult_Date:{
        type: DataTypes.DATE
    },
    Consult_Total:{
        type: DataTypes.INTEGER
    }
    
},{
    tableName: 'Consults',
    timestamps: false // Impide la creacion automatica de 'createdAt', 'updatedAt'
});

module.exports = {
    Consult
};