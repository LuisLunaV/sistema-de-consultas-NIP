const { Router } = require('express');

const { getBrands } = require('../controllers/brand.controller.js');

const router = Router();

router.get('/', getBrands )

module.exports = router;