const { Router } = require('express');

const { check  } = require('express-validator');

const { validateProperties, 
        validarJWT, 
        isAdminRole } = require('../middlewares/index.js');
const { employeNumberExist } = require('../helpers/db-validators.js');        

const { postConsultDetail, 
        getConsultDetailId, 
        getStoredProcedure,
        patchConsultDetail } = require('../controllers/consults_detail.controller.js');

const router = Router();

router.post('/', [
    validarJWT,
    check('NumEmpleado').custom( employeNumberExist ),
    isAdminRole,
    validateProperties
    ], getStoredProcedure);

router.get('/:id', getConsultDetailId);

router.post('/', [
validarJWT,
check('CD_ConsultID','Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('CD_BradID','Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('CD_MethodID','Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('CD_ReferenceNum','Se debe ingresar un numero de referencia').not().isEmpty(),
check('CD_NIP','Este no es un nip valido').isInt(),
validateProperties ],
postConsultDetail);

router.patch('/:id', patchConsultDetail)

module.exports = router;