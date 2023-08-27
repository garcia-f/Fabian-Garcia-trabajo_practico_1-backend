
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

// Se conecta la Base de Datos
const { conectarDB } = require('./database.js');

conectarDB()



const app = express();
const port = process.env.PORT || 4000;


// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes

// Starting the server
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));