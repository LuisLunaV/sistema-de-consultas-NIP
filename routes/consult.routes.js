const { Router } = require('express');
const { check } = require('express-validator');

const { validateProperties } = require('../middlewares/validate-properties.js');

const { userExistById } = require('../helpers/db-validators.js');
const { postConsult } = require('../controllers/consult.controller.js');

const router = Router();

router.post('/',[
    check('Consult_UserID','Solo IDs validos').matches(/^[0-9]+$/),
    check('Consult_UserID').custom( userExistById ),
    validateProperties
    ], postConsult );

module.exports = router;