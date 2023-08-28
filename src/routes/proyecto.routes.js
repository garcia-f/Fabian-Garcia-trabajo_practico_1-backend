const { Router } = require('express');
const router = Router();
const validarProyecto = require('../schemas/proyecto.schema');
const validateResultado = require('../middlewares/validateHelper');

const {
    crearProyecto,
    obtenerProyectos,
    obtenerProyecto,
    actualizarProyecto,
    eliminarProyecto
} = require('../controllers/proyecto.controller');



// ruta para crear un proyecto
router.post("/crearProyecto/:usuario_id", validarProyecto, validateResultado, crearProyecto);

// ruta para obtener todos los proyectos
router.get('/obtererPryectos', obtenerProyectos);

// ruta para obtener un proyecto
router.get('/obtenerProyecto/:proyecto_id', obtenerProyecto);

// ruta para actualizar un proyecto
router.put('/actualizarProyecto/:proyecto_id', actualizarProyecto);

// ruta para eliminar un proyecto
router.delete('/eliminarProyecto/:proyecto_id', eliminarProyecto);

module.exports = router;