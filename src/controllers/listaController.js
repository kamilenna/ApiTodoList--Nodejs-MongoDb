exports.listAll = (req, res) => {
    let listaDeTarefas = [
        {
            tarefa: 'Arrumar o quarto',
            descricao: 'Trocar roupa de cama e arrumar a escrivaninha',
            status: 'Pendente',
            dataDeCriacao: '2021-03-20'
        },
        {
            tarefa: 'Estudar para prova',
            descricao: 'Estudar o capítulo 5 do livro e fazer os exercícios de revisão',
            status: 'Concluída',
            dataDeCriacao: '2021-03-18'
        }
    ]
    res.send(listaDeTarefas)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Tarefa cadastrada com sucesso',
        data: req.body
    }
    res.status(201).json(response)
}