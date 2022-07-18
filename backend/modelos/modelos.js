// Importamos mongoose 
const mongoose= require('mongoose');

// Importamos el esquema
const { ToDoSchema } = require('../esquemas/esquemas');

// Creamos una instancia del esquema
const toDoSchema = ToDoSchema;

// Creamos el modelo a partir del esquema 
const toDoModel = mongoose.model('todolists', ToDoSchema);

// Exportamos el modelo
module.exports = {
    toDoModel
};