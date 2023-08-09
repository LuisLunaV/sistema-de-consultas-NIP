const { Router } = require('express');
const { validateProperties, validarJWT } = require('../middlewares/index.js');

const { postPhoneAndMembership } = require('../controllers/consult_phone_membership.js');

const router = Router();

router.post('/',[
    // validarJWT,
    validateProperties
], postPhoneAndMembership)

module.exports = router;