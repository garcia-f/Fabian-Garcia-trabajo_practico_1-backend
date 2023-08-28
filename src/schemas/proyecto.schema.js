const { checkSchema } = require('express-validator');

const validarProyecto = checkSchema({
    nombreProyecto: {
        notEmpty: {
            errorMessage: 'El nombre es obligatorio'
        },
        isLength: {
            errorMessage: 'El nombre no debe tener menos de 7 caracteres',
            options: { min: 7 }
        }
    }
})

module.exports = validarProyecto;