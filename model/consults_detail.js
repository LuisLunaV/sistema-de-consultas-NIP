const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Consult_detail = db.define('Consults_detail', {
    CD_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    CD_ConsultID:{
        type: DataTypes.INTEGER
    },
    CD_BradID:{
        type: DataTypes.INTEGER
    },
    CD_MethodID:{
        type: DataTypes.INTEGER
    },
    CD_ReferenceNum:{
        type: DataTypes.STRING,
        require: [true, 'El numero de referencia es obligatorio']
    },
    CD_NIP:{
        type: DataTypes.CHAR,
        require: true
    },
},{
    tableName: 'Consults_detail',
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

module.exports = {
    Consult_detail
}