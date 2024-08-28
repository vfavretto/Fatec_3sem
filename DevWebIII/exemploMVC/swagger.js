const swaggerAutogen = require('swagger-autogen')({ openapi: '3.1.0'});

const doc = {
    info: {
        title: 'MVC Documentation',
        version: '1.0.0',
        description: 'API RESTful para gerenciar dados.',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'API de clientes',
        },
    ],
};

const outputFile = "./swagger-output.json";
const endpointsFile = ['./index.js'];

swaggerAutogen(outputFile, endpointsFile, doc).then(() =>{
    require('./');
});