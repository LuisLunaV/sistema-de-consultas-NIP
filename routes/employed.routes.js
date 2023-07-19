const { Router } = require('express');
const { check } = require('express-validator');

const { validateProperties } = require('../middlewares/validate-properties.js');

const { employedExist } = require('../helpers/db-validators.js');
const { getEmployedNumber } = require('../controllers/employed.controller.js');

const router = Router();

router.get('/:number',[
check('number').custom(employedExist),
validateProperties
], getEmployedNumber);

module.exports = router;