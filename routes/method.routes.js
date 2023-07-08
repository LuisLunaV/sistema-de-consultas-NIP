const { Router } = require('express');

const { getMethods } = require('../controllers/methods.controller.js');

const router = Router();

router.get('/', getMethods )

module.exports = router;