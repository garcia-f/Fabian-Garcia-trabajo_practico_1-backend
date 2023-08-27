
// import
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Se conecta la Base de Datos
const { conectarDB } = require('./database');
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