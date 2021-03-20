module.exports = function(app) {
    const listaDeTarefas = require('../controllers/listaController')
    app.route('/lista')
    .get(listaDeTarefas.listAll)
    .post(listaDeTarefas.createOne)

    app.route('/lista/:id')
    .get(listaDeTarefas.showOne)
    .put(listaDeTarefas.update)
    .delete(listaDeTarefas.delete)
}