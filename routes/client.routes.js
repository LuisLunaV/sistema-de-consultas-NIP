const { Router } = require('express');

const { validateProperties, validarJWT } = require('../middlewares/index.js');

const { postNipClient } = require('../controllers/client.controller');

const router = Router();

router.post('/',[
    validarJWT,
    validateProperties
]
,postNipClient);

module.exports = router;