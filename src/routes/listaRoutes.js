module.exports = function(app) {
    const listaDeTarefas = require('../controllers/listaController')
    app.route('/lista')
    .get(listaDeTarefas.listAll)
    .post(listaDeTarefas.createOne)
}