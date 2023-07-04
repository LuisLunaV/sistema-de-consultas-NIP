const { Router } = require('express');
const { check  } = require('express-validator');

const { validateProperties } = require('../middlewares/validate-properties.js');

const { login } = require('../controllers/auth.controller.js');

const router = Router();

// Ruta para el logeo e inicio de sesión
router.post('/login', [
    check('User_Name', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties 
], login)

module.exports = router;