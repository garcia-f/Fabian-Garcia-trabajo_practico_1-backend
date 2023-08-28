const Usuario = require('../models/usuario.model');
const bcrypt=require('bcrypt');
const ctrl = {};

// crear usuario
ctrl.crearUsuario = async (req, res) => {
    const {
      nombre,
      apellido,
      correo,
      password
    } = req.body;
  
    try {
      // Se verifica si el usuario ya existe
      const existeUsuario = await Usuario.findOne({
        where: {
          correo,
        },
      });
      if (existeUsuario) {
        throw {
          status: 400,
          message: "El usuario ya existe",
        };
      }
  
      const nuevoUsuario = await Usuario.create({
        nombre,
        apellido,
        correo,
        password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      });
      return res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  };

  
  

module.exports = ctrl;