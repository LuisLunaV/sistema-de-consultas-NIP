const { DataTypes } = require('sequelize');

const { clientDb } = require('../database/cliente.db');

const Nip = clientDb.define('NIPS', {

    Local_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Local_tipoRef:{
        type: DataTypes.STRING
    },
    Local_Refernc:{
        type: DataTypes.STRING
    },
    Local_Cliente:{
        type: DataTypes.STRING
    },
    Local_Nip:{
        type: DataTypes.CHAR
    }
},{
    tableName: 'NIPS',
    timestamps: false
});

module.exports = {
    Nip,
}