const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/:id', ( req, res)=>{
    res.status(200).json({
        msg:'ok'
    });
});


module.exports = router;