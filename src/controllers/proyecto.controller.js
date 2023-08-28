const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model')
const ctrl = {};

//Controlador para crear un proyecto
ctrl.crearProyecto = async (req, res) => {
    const {
        nombreProyecto
    } = req.body;

    try {
        const nuevoProyecto = await Proyecto.create({
            nombreProyecto,
            usuario_id: req.params.usuario_id,
        });
        return res.status(201).json(nuevoProyecto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
};

//Controlador para obtener todos los proyectos
ctrl.obtenerProyectos = async (req, res) => {
    try {
        const listaProyectos = await Proyecto.findAll({
            include: {
                model: Tarea,
                as: "tareas",
            },
        });
        return res.status(200).json(listaProyectos);
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
};

//Controlador para obtener un proyecto
ctrl.obtenerProyecto = async (req, res) => {
    try {
        const {proyecto_id} = req.params;
        const proyecto = await Proyecto.findByPk(proyecto_id, {
            include: {
                model: Tarea,
                as: "tareas",
            },
        });

        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        return res.status(200).json(proyecto);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({ message: error.message });
    }
};

// Controlador para actualizar un proyecto
ctrl.actualizarProyecto = async (req, res) => {
    const { proyecto_id } = req.params;
    const { nombreProyecto } = req.body;

    try {

        const proyecto = await Proyecto.findByPk(proyecto_id);
        //Verificamos si existe el proyecto
        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        const proyectoActualizado = await Proyecto.update(
            {
                nombreProyecto
            },
            {
                where: {
                    proyecto_id,
                },
            }
        );

        if (!proyectoActualizado) {
            throw {
                status: 400,
                message: "No se pudo actualizar la proyecto",
            };
        }

        return res.status(200).json({ message: "El proyecto se actualizo" });
    } catch (error) {
        console.log(error);
        return res
            .status(error.status || 500)
            .json(error.message || "Error interno del servidor");
            
    }
};

// controlador para eliminar un proyecto
ctrl.eliminarProyecto = async (req, res) => {
    const { proyecto_id } = req.params;

    try {
        const proyecto = await Proyecto.findByPk(proyecto_id);
        if (!proyecto) {
            return res.status(404).json({
                message: 'No se encontro el proyecto'
            })
        }
        const proyectoEliminado = await proyecto.destroy();

        return res.json({
            proyectoEliminado,
            message: "Proyecto fue eliminado correctamente",
        });
    } catch (error) {
        console.log(error);
        return res
            .status(error.status || 500)
            .json(error.message || "Error interno del servidor");
    }
};

module.exports = ctrl;