const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListaSchema = new Schema({
    tarefa: {
        type: String,
        required: 'Favor informar o título da tarefa'
    },
    descricao:{
        type: String,
        required: 'Favor informar a descrição da tarefa'
    },
    status: {
        type: String,
        required: 'Favor informar o status da tarefa (Pendente, Em andamento ou Concluída)'
    },
    dataDeCriação: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('listaDeTarefas', ListaSchema)