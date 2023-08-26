
// import
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 4000;


// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


// Starting the server
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));