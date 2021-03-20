const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Lista = require('./src/models/listaModel')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todolistDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const routes = require('./src/routes/listaRoutes')

routes(app)

app.route('/').get((req, res) => {
    res.send('Acessou a API ToDoList')
})


const port = process.env.PORT || 3000

app.listen(port)

console.log("Aplicação iniciada na porta", port)