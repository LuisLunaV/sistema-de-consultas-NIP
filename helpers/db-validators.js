const { User } = require('../model/user.js');
const { Employed } = require('../model/employes.js');
/**
 * Verifica si ya existe un usuario con el mismo nombre.
 * @param {string} User_NumEmpleado- Nombre de usuario a verificar.
 * @throws {Error} - Error en caso de que el usuario ya exista.
 */

const userExists = async( User_NumEmpleado = '' )=>{

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
    const emailExist = await User.findOne({ where: { User_Email }});

    if( emailExist ){
        throw new Error(`El correo ${ User_Email } ya ha sido registrado`);
    }
};

const employeNumberExist = async( User_NumEmpleado = '')=>{
    
    const employeNumberExist = await User.findOne({ where: { User_NumEmpleado }});

    if( !employeNumberExist ){
        throw new Error(`El empleado con numero: ${ User_NumEmpleado }, no existe`);
    }
};

const employedExist = async( number = '' )=>{

    const employed = await Employed.findOne({ where: { Emp_Number: number }});
    if( !employed ){
        throw new Error(`El empleado ${ number } no esta registrado en la Base de datos`);
    }
}

module.exports = {
    userExists,
    userExistById,
    emailExist,
    employeNumberExist,
    employedExist
};