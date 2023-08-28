const { DataTypes, sequelize } = require('../../database.js');
const Proyecto = require('../models/proyecto.model.js')

const tarea = sequelize.define( 'tarea', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreTarea:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    proyecto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'tarea'
} );

Proyecto.hasMany(tarea, { foreignKey: "proyecto_id", as: "tareas" });
tarea.belongsTo(Proyecto, { foreignKey: "proyecto_id" });

tarea.sync({ force: false });

module.exports = tarea; 
