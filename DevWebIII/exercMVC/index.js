const express = require('express')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');


app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.set('view engine', 'ejs')
app.set('views', './src/view/')
app.use('/', userRoutes);

app.listen(3000, function(){
    console.log('App rodando na porta 3000')
})