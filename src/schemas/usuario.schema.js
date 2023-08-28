const { checkSchema } = require('express-validator');

const validarUsuario = checkSchema({ 
    nombre: {
        notEmpty: {
            errorMessage: 'El nombre es obligatorio'
        },
        isLength: {
            errorMessage: 'El nombre no debe tener menos de 5 caracteres',
            options: { min: 5 }
        }
    },
    apellido:{
        notEmpty: {
            errorMessage: 'El apellido es obligatorio'
        },
        isLength: {
            errorMessage: 'El nombre no debe tener menos de 5 caracteres',
            options: { min: 5 }
        }
    },
    correo:{
        notEmpty: {
            errorMessage: 'Este campo no puede estar vacio'
        },
        isEmail: {
            errorMessage: 'Debe ser un email valido'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'La contraseña es obligatoria'
        },
        isLength: {
            errorMessage: 'La contraseña debe tener un minimo de 5 y un maximo de 10 caracteres',
            options: { min: 5 , max: 10 }
        }
    }
 })

 module.exports = validarUsuario;