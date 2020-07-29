const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear el ser.config()vidor de express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Direcctorio Publico
app.use( express.static('public') );

// Lector de JSON
app.use( express.json() );

// Rutas
//? AUTH
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});