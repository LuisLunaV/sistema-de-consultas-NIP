const { Router } = require('express');

const { validateProperties, validarJWT } = require('../middlewares/index.js');

const { getNipClient } = require('../controllers/client.controller');

const router = Router();

router.get('/:number',[
    validarJWT,
    validateProperties
]
,getNipClient);

module.exports = router;