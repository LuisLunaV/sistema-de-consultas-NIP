const { Router } = require('express');
const { check } = require('express-validator');

const { postUser, putUser, deleteUser } = require('../controllers/user.controller.js');

const { userExists, userExistById } = require('../helpers/db-validators.js');
const { validateProperties } = require('../middlewares/validate-properties.js');
const { validarJWT } = require('../middlewares/validate-jwt.js');

const router = Router();

// Ruta para crear un nuevo usuario
router.post('/',[
    check('User_Name').custom( userExists ),
    check('User_Password', 'El password es obligatorio con mas de 9 caracteres').isLength({ min: 9 }),
    validateProperties
], postUser );

// Ruta para actualizar un usuario existente por su ID
router.put('/:id',[
    check('id').custom( userExistById ),
    validateProperties
], putUser);

// Ruta para eliminar un usuario existente por su ID
router.delete('/:id',[
    validarJWT,
    check('id').custom( userExistById ),
    validateProperties
], deleteUser);

module.exports = router;