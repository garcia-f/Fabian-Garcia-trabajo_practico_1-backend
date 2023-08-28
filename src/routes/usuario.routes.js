
const { Router } = require('express');
const router = Router();

const ctrl =require('../controllers/usuario.controller');
const validarUsuario = require('../schemas/usuario.schema');
const validateResultado  = require('../middlewares/validateHelper');

// ruta para crear un usuario
router.post('/crearUsuario', validarUsuario, validateResultado, ctrl.crearUsuario);

module.exports = router;