const { User } = require('../model/user.js');
/**
 * Verifica si ya existe un usuario con el mismo nombre.
 * @param {string} User_NumEmpleado- Nombre de usuario a verificar.
 * @throws {Error} - Error en caso de que el usuario ya exista.
 */

const userExists = async( User_NumEmpleado = '' )=>{
    console.log(User_NumEmpleado)

    const userExists = await User.findOne({
        where: { User_NumEmpleado }
    });

    if( userExists ){
        throw new Error( `El usuario ${ User_NumEmpleado} ya esta siendo utilizado` );
    }
};

const userExistById = async( id )=>{
    
    const userExist = await User.findByPk( id );

    if( !userExist ){
        throw new Error(`El usuario con id: ${ id }, no existe`);
    }
};

const emailExist = async( User_Email = '')=>{
    console.log(User_Email)
    const emailExist = await User.findOne({ where: { User_Email }});
    console.log(emailExist)

    if( emailExist ){
        throw new Error(`El correo ${ User_Email } ya ha sido registrado`);
    }
}

module.exports = {
    userExists,
    userExistById,
    emailExist
};