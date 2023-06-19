const { Sequelize } = require('sequelize');

const db = new Sequelize( process.env.NAME_DB, process.env.USER_DB, process.env.PASS_DB,{
host: process.env.HOST_DB,
dialect: 'mysql'
});

const dbConnection = async () => {
    try {
        await db.authenticate();
        console.log('Data base in line')
    } catch (error) {
        throw new Error( error );
    }
};

module.exports =  {
    db,
    dbConnection
}