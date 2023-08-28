const { checkSchema } = require('express-validator');

const validarTarea = checkSchema({
    nombreTarea: {
        notEmpty: {
            errorMessage: 'El nombre es obligatorio'
        },
        isLength: {
            errorMessage: 'La tarea no debe tener menos de 5 caracteres',
            options: { min: 5 }
        }
    },
    descripcion: {
        notEmpty: {
            errorMessage: 'La descripcion es obligatoria'
        },
        isLength: {
            errorMessage: 'La descripcion no debe tener menos de 15 caracteres',
            options: { min: 15 }
        }
    }
})

module.exports = validarTarea;