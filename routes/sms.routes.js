const {Router}=require('express');
const { check } = require('express-validator');
const { sendMessage } = require('../controllers/sms.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

const router=Router();


router.post('/',[
  check('numberTo',"No es un numero de telefono").isMobilePhone(),
  check('numberTo',"La numero de telefono es obligatorio").not().isEmpty(),
  check('numberFrom',"No es un numero de telefono").isMobilePhone(),
  check('numberFrom',"La numero de telefono es obligatorio").not().isEmpty(),
  check('message',"El mensaje es obligatorio").not().isEmpty(),
  validarCampos
],sendMessage);




module.exports =router;