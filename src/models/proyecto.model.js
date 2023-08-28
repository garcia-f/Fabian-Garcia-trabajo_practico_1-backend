const { DataTypes, sequelize } = require('../../database.js');
const Usuario = require('../models/usuario.model.js')

const proyecto = sequelize.define( 'proyecto', {

    proyecto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProyecto:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    usuario_id: {
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
    tableName: 'proyecto'
} );

Usuario.hasMany(proyecto, { foreignKey: "usuario_id", as: "proyectos" });
proyecto.belongsTo(Usuario, { foreignKey: "usuario_id" });

proyecto.sync({ force: false });
module.exports = proyecto; 