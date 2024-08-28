const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const loginRoute = require('./src/routes/loginRoute');
const temperatureRoute = require('./src/routes/temperatureRoute');


app.use(loginRoute);

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.set('view engine', 'ejs')
app.set('views', './src/views/')

app.listen(3000, function(){
    console.log('App rodando na porta 3000')
})