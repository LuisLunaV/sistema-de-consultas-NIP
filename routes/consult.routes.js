const { Router } = require('express');
const { check } = require('express-validator');

const { postConsult, putConsult } = require('../controllers/consult.controller.js');

const router = Router();

router.post('/', postConsult );
router.put('/:id',);


module.exports = router;