const { Sequelize } = require('sequelize');

const clientDb = new Sequelize( process.env.NIP_NAME_DB, process.env.NIP_USER_DB, process.env.NIP_PASS_DB,{
    host: process.env.NIP_HOST_DB,
    dialect: 'mysql'
});

/**
 * Establece la conexión con la base de datos cliente.
 * @throws {Error} - Error en caso de que no se pueda establecer la conexión con la base de datos.
 */

const clientDbConnection = async () => {
    try {
        await clientDb.authenticate();
        console.log('Data base client nip in line')
    } catch (error) {
        throw new Error( error );
    }
};

module.exports =  {
    clientDb,
    clientDbConnection
}