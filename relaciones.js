const  usuario = require('./src/models/usuario.model');
const  tarea = require('./src/models/tarea.model');
const  proyecto = require('./src/models/proyecto.model');


const relaciones = () => {
    usuario.hasMany(proyecto, { foreignKey: "usuario_id", as: "proyectos" });
    proyecto.belongsTo(usuario, { foreignKey: "usuario_id" });


    proyecto.hasMany(tarea, { foreignKey: "proyecto_id", as: "tareas" });
    tarea.belongsTo(proyecto, { foreignKey: "proyecto_id" });

}

module.exports = relaciones;

