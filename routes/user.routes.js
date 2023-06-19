const { Router } = require('express');
const { check } = require('express-validator');

const { postUser } = require('../controllers/user.controller.js');

const router = Router();

router.post('/', postUser );


module.exports = router;