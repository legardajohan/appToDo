// Importamos express y mongoose
const express = require('express');
const mongoose = require('mongoose');

// Instanciamos express 
const app = express(); 
const puerto = 8000;

// Importamos las rutas
const router = require('./rutas/rutas');

// Parsear los parametros a formato JSON
app.use(express.json());

// Importamos el middleware 
// const isAdminMW = require('./middleware/middleware');

// Usamos el middleware 
// app.use(isAdminMW);

// Usamos las rutas
app.use(router);

// Conectamos a la base de datos 
let promise = mongoose.connect('mongodb://localhost:27017/todolistdb');

app.listen(puerto, () => {
    promise
        .then(() => console.log('Conectado a la base de datos'))
        .catch(() => console.error('No se pudo conectar a la base de datos'))
    console.log(`La aplicacion esta corriendo en el puerto: ${puerto}`);
});