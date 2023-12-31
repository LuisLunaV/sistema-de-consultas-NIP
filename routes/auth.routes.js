const { Router } = require('express');
const { check  } = require('express-validator');

const { validateProperties } = require('../middlewares/validate-properties.js');

const { login } = require('../controllers/auth.controller.js');

const router = Router();

router.get('/', ( req, res )=>{
    res.render('login');
});

// Ruta para el logeo e inicio de sesión
router.post('/login', [
    check('User_NumEmpleado', 'El numero de empleado es obligatorio').not().isEmpty(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties 
], login);

module.exports = router;