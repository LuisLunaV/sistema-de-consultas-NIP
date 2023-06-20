const { Router } = require('express');
const { check } = require('express-validator');

const { postUser } = require('../controllers/user.controller.js');

const { userExists } = require('../helpers/db-validators.js');
const { validateProperties } = require('../middlewares/validate-properties.js');

const router = Router();

router.post('/', [
    check('User_Name').custom( userExists ),
    check('User_Password', 'El password es obligatorio con mas de 9 caracteres').isLength({ min: 9 }),
    validateProperties
], postUser );


module.exports = router;