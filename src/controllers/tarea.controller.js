const Tarea = require('../models/tarea.model');
const ctrl = {};

// crear tarea
ctrl.crearTarea = async (req, res) => {
    const {
      nombreTarea,
      descripcion
    } = req.body;
  
    try {
       // Se verifica si la tarea existe
      const existeTarea = await Tarea.findOne({
        where: {
          nombre,
        },
      });
      if (existeTarea) {
        throw {
          status: 400,
          message: "La tarea ya existe",
        };
      }
        const nuevaTarea = await Tarea.create({
            nombreTarea,
            descripcion,
            proyecto_id: req.params.proyecto_id,
        });
        return res.status(201).json(nuevaTarea);
        } catch (error) {
          console.log(error);
         return res.status(500).json({
            message: error.message,
        });
    }
};
  
// obtener todas las tareas
ctrl.obtenerTareas = async (_req, res) => {
    try {
      const listaTareas = await Tarea.findAll();
      return res.status(200).json(listaTareas);
    } catch (error) {
      return res.status(error.status || 500).json({ message: error.message });
    }
};
  
module.exports = ctrl;