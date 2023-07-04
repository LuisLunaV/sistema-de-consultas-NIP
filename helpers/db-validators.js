const { User } = require('../model/user.js');

/**
 * Verifica si ya existe un usuario con el mismo nombre.
 * @param {string} User_Name - Nombre de usuario a verificar.
 * @throws {Error} - Error en caso de que el usuario ya exista.
 */

const userExists = async( User_Name = '' )=>{
    const userExists = await User.findOne({
        where: { User_Name }
    });

    if( userExists ){
        throw new Error( `El usuario ${ User_Name } ya esta siendo utilizado` );
    }
};
const userExistById = async( id = '')=>{

    const userExist = await User.findByPk( id );

    if( !userExist ){
        throw new Error(`El usuario con id: ${ id }, no existe`);
    }
}

module.exports = {
    userExists,
    userExistById
};