const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const  Employed = db.define('Employes', {
    
Emp_Id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
},
Emp_Name:{
    type: DataTypes.STRING
},
Emp_Number:{
    type: DataTypes.STRING
},
Emp_Email:{
    type: DataTypes.STRING
}},{
    tableName: 'Employes',
    timestamps: false 
},{

});

module.exports = {
    Employed
}