// Importamos mongoose 
const mongoose = require('mongoose');

// Imprime el query que se esta enviando 
mongoose.set("debug", function (coll, method, query, doc) {
    console.log('Esta es mi query: ', query);
  });

// Creamos el esquema, igual al documento que llega 
exports.ToDoSchema = mongoose.Schema({
    title: String, 
    description: String,
    creator: String,
    state: String
});