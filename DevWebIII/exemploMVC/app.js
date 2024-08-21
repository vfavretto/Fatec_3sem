const express = require('express')
const app = express()

const loginRoute = require('./src/routes/loginRoute')

app.use(loginRoute)

app.set('view engine', 'ejs');
app.set('views', './views/login')

app.listen(3000, function(){
  console.log('APP rodando na porta 3000')
})