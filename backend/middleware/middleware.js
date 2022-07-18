// Verificacion si es admin a traves de header
const isAdminMW = (request, response, next) => {
    if (request.headers['isadmin'] === undefined) {
        response.status(500).send('Internal error server');
    } else if (JSON.parse(request.headers['isadmin'])) {
        next();
    } else {
        response.status(403).send('Forbiden access dennied');
    }
}

module.exports = isAdminMW;