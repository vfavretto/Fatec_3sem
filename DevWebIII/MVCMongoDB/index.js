const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoute = require('./src/routes/userRoute')

//acesso ao mongoose (BD)
const mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/Fatec'
let mongoDB = process.env.MONGODB_URI || url
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'))

//bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//rotas
app.use(userRoute)

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000')
})