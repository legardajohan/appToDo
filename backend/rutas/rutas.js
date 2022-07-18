// Importamos express
const express = require('express');

// Instanciamos Router de express
const router = express.Router(); 

// Importamos mongoose (find)
const mongoose = require('mongoose');

// Importamos los controladores 
const toDoController = require('../controladores/controladores');

// Crear objeto
router.post('/', toDoController.createToDo);

// Listas todos
router.get('/', toDoController.listAll);

// Listar por titulo
router.get('/title/:title', toDoController.listByTitle);

// Actualizar modelo por titulo
router.put('/:title/:newTitle', toDoController.updateToDo);

// Actualizar estado buscando por titulo
// router.put('/title/:title/state/:state', toDoController.actualizarColorPorModelo);

// Eliminar por titulo 
router.delete('/title/:title', toDoController.deleteToDo);

// Pagina no encontrada 
router.get('*', toDoController.error);

module.exports = router;