// Importamos el modelo 
const { toDoModel } = require('../modelos/modelos');

// Servicio creacion de un objeto
const createToDo = (request, response) => {
    // Se crea un objeto con los datos enviados a traves del body (.body)
    const newToDo = {
        title: request.body.title,
        description: request.body.description,
        creator: request.body.creator,
        state: request.body.state
    };
    // Se instancia el modelo y se pasa el objeto creado
    const instanceToDo = new toDoModel(newToDo);
    // Se toma la instancia y guarda con .save
    instanceToDo.save((err, resp) => {
        response.json(resp);
        console.log(`Se creo el objeto ${resp}`);
    });
};

// Servicio listar todos 
const listAll = (request, response) => {
    toDoModel.find((err, res) => {
        response.json(res)
    })
};

// Servicio listar por titulo 
const listByTitle = (request, response) => {
    console.log(request);
    const titleRequest = request.params.title; 
    console.log(titleRequest);
    toDoModel.find({title: titleRequest}, (err, resp) => {
        response.json(resp); 
    })
};

// Servicio de actualizar modelo 
const updateToDo = (request, response) => {
    const titleRequest = request.params.title;
    // revisar
    const newTitleRequest = request.params.newTitle;
    toDoModel.updateOne({title: titleRequest}, {title: newTitleRequest}, (err, resp) => {
        response.json(resp); 
        console.log(`El ${titleRequest} fue actualizado por ${newTitleRequest}`);
    })
};

// Servicio eliminar por placa 
const deleteToDo = (request, response) => {
    const titleRequest = request.params.title;
    toDoModel.deleteOne({title: titleRequest}, (err, resp) => {
        response.json(resp);
        console.log(`La tarea con titulo ${titleRequest} fue eliminada`);
    });
};

// Servicio pagina no encontrada
const error = (request, response) => {
    response.send('Página no encontrada');
};

module.exports = {
    createToDo,
    listAll, 
    listByTitle,
    updateToDo, 
    deleteToDo,
    error
};