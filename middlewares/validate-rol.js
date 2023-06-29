const { request, response } = require('express');

const isAdminRole =( req = request, res = response, next )=>{
    
    if( !req.user ){
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { User_RolID, User_Name  } = req.user;

    if( User_RolID !== 2 ){
        return res.status(401).json({
            msg: `${ User_Name } sin credenciales de Administrador`
        });
    }

    next();
};