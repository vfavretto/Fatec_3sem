const express = require('express')
const app = express()

const loginRoute = require('./src/routes/loginRoutes')
app.use(loginRoute)

app.set('view engine', 'ejs');
app.set('views', './src/view/loginView')

app.listen(3000, function(){
    console.log('App rodando na porta 3000')
})
