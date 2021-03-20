const { response } = require('express')
const mongoose = require('mongoose')
const Lista = mongoose.model('listaDeTarefas')

exports.listAll = (req, res) => {
    Lista.find({}, (error, listaDeTarefas) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Todas as tarefas',
            data: listaDeTarefas
        }
        res.send(response)
    })
}

exports.createOne = (req, res) => {
    const { tarefa, descricao, status, dataDeCriacao } = req.body
    let novaTarefa = new Lista({ tarefa, descricao, status, dataDeCriacao })
    novaTarefa.save((error, listaDeTarefas) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Tarefa cadastrada com sucesso',
            data: listaDeTarefas
        }
        res.status(201).json(response)
    })
    
}

exports.showOne = (req, res) => {
    Lista.findById(req.params.id, (error, listaDeTarefas) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Tarefa encontrada com sucesso',
            data: listaDeTarefas
        }
        res.status(201).json(response)
    })
}

exports.update = (req, res) => {
    Lista.findOneAndUpdate({_id: req.params.id }, req.body, {new: true},
        (error, listaDeTarefas) => {
            if (error) {
                res.send(error)
            }
            res.send(listaDeTarefas)
        })
}

exports.delete = (req, res) => {
    Lista.remove({_id: req.params.id}, (error, listaDeTarefas) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: "Tarefa deletada com sucesso",
            data: listaDeTarefas
        }
        res.send(response)
    })
}
