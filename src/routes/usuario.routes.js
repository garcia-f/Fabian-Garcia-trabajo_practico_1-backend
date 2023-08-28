
const { Router } = require('express');
const router = Router();

const ctrl =require('../controllers/usuario.controller');

// ruta para crear un usuario
router.post('/crearUsuario', ctrl.crearUsuario);

module.exports = router;