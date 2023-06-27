const { Router } = require('express');

const { check  } = require('express-validator');

const { postConsultDetail } = require('../controllers/consults_detail.controller');

const router = Router();

router.post('/', postConsultDetail);
module.exports = router;