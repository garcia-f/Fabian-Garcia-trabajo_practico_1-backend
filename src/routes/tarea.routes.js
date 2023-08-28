const { Router } = require('express');
const router = Router();

const { 
    crearTarea,
    obtenerTareas
} = require('../controllers/tarea.controller');

// crear una tarea
router.post('/crearTarea/:proyecto_id', crearTarea);

// obtener todas las tareas
router.get('/obtenerTareas', obtenerTareas);

module.exports = router;