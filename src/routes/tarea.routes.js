const { Router } = require('express');
const router = Router();

const { 
    crearTarea,
    obtenerTareas
} = require('../controllers/tarea.controller');

//ruta para crear una tarea
router.post('/crearTarea/:proyecto_id', crearTarea);

// ruta para obtener todas las tareas
router.get('/obtenerTareas', obtenerTareas);

module.exports = router;