const { Sequelize } = require('sequelize');

const db = new Sequelize( process.env.NAME_DB, process.env.USER_DB, process.env.PASS_DB,{
host: process.env.HOST_DB,
dialect: 'mysql'
});


/**
 * Establece la conexión con la base de datos.
 * @throws {Error} - Error en caso de que no se pueda establecer la conexión con la base de datos.
 */

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