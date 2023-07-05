const { DataTypes } = require('sequelize');

const { clientDb } = require('../database/cliente.db');

const Nipsacc = clientDb.define('nipsacc', {

    TICKET:{
        type: DataTypes.STRING,
        primaryKey: true
    },

    ID_MEMBRESIA:{
        type: DataTypes.STRING,
        primaryKey: true
    },

    NIP:{
        type: DataTypes.STRING
    },

    FECHA_CREACION:{
        type: DataTypes.DATE
    },

    TELEFONO:{
        type: DataTypes.STRING
    },

    MARCA:{
        type: DataTypes.STRING
    }
},{
    tableName: 'nipsacc',
    timestamps: false
});

module.exports = {
    Nipsacc,
}