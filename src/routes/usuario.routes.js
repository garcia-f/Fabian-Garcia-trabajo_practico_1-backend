
const { Router } = require('express');
const router = Router();

const ctrl =require('../controllers/usuario.controller');


router.post('/crearUsuario', ctrl.crearUsuario);

module.exports = router;