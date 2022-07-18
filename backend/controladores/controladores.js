// Importamos los servicios
const toDoService = require('../servicios/servicios');

// Controlador crear objeto
const createToDo = (request, response) => {
    toDoService.createToDo(request, response);
};

// Controlador de listar todo 
const listAll = (request, response) => {
    toDoService.listAll(request, response)
};

// Controlador listar por titulo
const listByTitle = (request, response) => {
    toDoService.listByTitle(request, response);
};

// Controlador actualizar por titulo
const updateToDo = (request, response) => {
    toDoService.updateToDo(request, response);
};

// Controlador eliminar por titulo
const deleteToDo = (request, response) => {
    toDoService.deleteToDo(request, response);
};

// Controlador de pagina no encontrada 
const error = (request, response) => {
    toDoService.error(request, response);
};

// Modulo donde se exportan todas las variables 
module.exports = {
    createToDo,
    listAll,
    listByTitle,
    updateToDo,
    deleteToDo, 
    error
};