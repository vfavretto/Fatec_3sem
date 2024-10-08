const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoute = require('./src/routes/userRoute')
const projectRoute = require('./src/routes/projectRoute')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

//acesso ao mongoose (BD)
const mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/DevWebIII'
let mongoDB = process.env.MONGODB_URI || url
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'))

//bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

//rotas
app.use(userRoute)
app.use(projectRoute)

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000')
})