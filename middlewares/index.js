const { validarJWT } = require('./validate-jwt.js');
const { validateProperties } = require('./validate-properties.js');
const { isAdminRole } = require('../middlewares/validate-rol.js');

module.exports = {
    validarJWT,
    validateProperties,
    isAdminRole
}