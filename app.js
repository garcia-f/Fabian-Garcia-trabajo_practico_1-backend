
// import
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { sequelize } = require('./database'); // Ajusta la ruta según la ubicación de tu archivo de configuración de Sequelize
const { usuario } = require('./src/models/usuario.model');
const { proyecto } = require('./src/models/proyecto.model');
const { tarea } = require('./src/models/tarea.model');


const app = express();
const port = process.env.PORT || 4000;


// Se conecta la Base de Datos
const { conectarDB } = require('./database.js');
conectarDB()




// Middlewares
app.use(cors());
app.use(helmet({contentSecurityPolicy: false,}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Sincroniza y crea las tablas en la base de datos
sequelize.sync({ force: false }) // Si force es true, eliminará las tablas existentes y las volverá a crear
  .then(() => {
    console.log("Tablas sincronizadas y creadas en la base de datos.");
  })
  .catch((error) => {
    console.error("Error al sincronizar y crear tablas:", error);
  });


// configuracion de rutas
app.use(require('./src/routes/usuario.routes'));
app.use(require('./src/routes/proyecto.routes'));
app.use(require('./src/routes/tarea.routes'));


// Starting the server
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));