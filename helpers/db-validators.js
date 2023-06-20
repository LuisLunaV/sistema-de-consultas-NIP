const { User } = require('../model/user.js');

const userExists = async( User_Name = '' )=>{
    const userExists = await User.findOne({
        where: { User_Name }
    });

    if( userExists ){
        throw new Error( `El usuario ${ User_Name } ya esta siendo utilizado` );
    }
};

module.exports = {
    userExists
};