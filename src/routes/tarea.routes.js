const { Router } = require('express');
const router = Router();

const { 
    crearTarea,
    obtenerTareas
} = require('../controllers/tarea.controller');
const validarProyecto = require('../schemas/proyecto.schema');
const validateResultado = require('../middlewares/validateHelper');
const validarTarea = require('../schemas/tarea.schema');

//ruta para crear una tarea
router.post('/crearTarea/:proyecto_id', validarTarea, validateResultado, crearTarea);

// ruta para obtener todas las tareas
router.get('/obtenerTareas', obtenerTareas);

module.exports = router;