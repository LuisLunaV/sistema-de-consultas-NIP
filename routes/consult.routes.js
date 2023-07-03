const { Router } = require('express');
const { check } = require('express-validator');

const { postConsult } = require('../controllers/consult.controller.js');

const router = Router();

router.post('/',[
    check('CD_ConsultID','Solo IDs validos').matches(/^[0-9]+$/)
    ], postConsult );

module.exports = router;