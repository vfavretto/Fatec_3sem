const fs = require('fs') //File System

const jsonRestaurantes = fs.readFileSync("BDnoSQL/ExercRestaurantes/restaurantes.json")
const dadosRestaurantes = JSON.parse(jsonRestaurantes)

use('restaurantes')
db.restaurantes.insertMany(dadosRestaurantes)
db.restaurantes.find().count()

//Exercicio 1 - Defina a query NoSQL para exibir os campos restaurante_id, nome, bairro e cozinha de todos os documentos da collection restaurantes.
use('restaurantes')
db.restaurantes.find({}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 2 - Defina a query NoSQL para exibir os campos restaurante_id, nome,bairro e cozinha, porém, excluindo o campo _id de todos os documentos da collection restaurantes.
use('restaurantes')
db.restaurantes.find({}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 3 - Defina a query NoSQL para exibir os campos restaurante_id, nome, bairro e cep, porém, excluindo o campo _id de todos os documentos da collection restaurantes.
use('restaurantes')
db.restaurantes.find({}, {restaurante_id: 1, nome: 1, bairro: 1, cep: 1, _id: 0})

//Exercicio 4 -  Defina a query NoSQL para exibir todos os restaurantes que estão localizados no bairro Bronx.
use('restaurantes')
db.restaurantes.find({bairro: 'Bronx'}, {restaurante_id: 1, nome: 1, bairro: 1, cep: 1, _id: 0})

//Exercicio 5 - Defina a query NoSQL para exibir os 5 primeiros restaurantes que estão localizados no bairro Bronx.
use('restaurantes')
db.restaurantes.find({bairro: 'Bronx'}).limit(5)

//Exercicio 6 - .Defina a query NoSQL para exibir os próximos 5 restaurantes após “pular” os 5 primeiros que estão localizados no bairro Bronx.
use('restaurantes')
db.restaurantes.find({bairro: 'Bronx'}).skip(5).limit(5)

//Exercicio 7 - Defina a query NoSQL para exibir o id, nome, bairro e cozinha dos restaurantes cujo nome comecem com o texto Wil. Dica: /^ /
use('restaurantes')
db.restaurantes.find({nome: /^Wil/i}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 8 - Defina a query NoSQL para exibir o Id, nome, bairro e cozinha dos restaurantes cujo nome terminem com o texto ces. Dica : / $/
use('restaurantes')
db.restaurantes.find({nome: /ces$/i}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 9 - Defina a query NoSQL para exibir o Id, nome, bairro e cozinha dos restaurantes cujo nome contém o texto 'Reg' em alguma parte do nome. Dica : / /
use('restaurantes')
db.restaurantes.find({nome: /Reg/i}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 10 -  Defina a query NoSQL para exibir os restaurantes que estão no bairro Bronx e preparam a cozinha American ou Chinese. (utilize o operador $or)
use('restaurantes')
db.restaurantes.find({bairro: 'Bronx', $or: [{cozinha: 'American'}, {cozinha: 'Chinese'}]}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 11 - Defina a query NoSQL para exibir o Id, nome, bairro e cozinha de todos os restaurantes que estão em um dos seguintes bairros: Staten Island, Queens, Bronx ou Brooklyn. (utilize o operador $in)
use('restaurantes')
db.restaurantes.find({bairro: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 12 - Defina a query NoSQL para exibir o Id, nome, bairro e cozinha de todos os restaurantes que não estão em um dos seguintes bairros: Staten Island, Queens, Bronx ou Brooklyn. (utilize o operador $nin)
use('restaurantes')
db.restaurantes.find({bairro: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurante_id: 1, nome: 1, bairro: 1, cozinha: 1, _id: 0})

//Exercicio 13 - Encontrar os 5 restaurantes mais próximos a 1km do ponto (-73.935242, 40.730610):

