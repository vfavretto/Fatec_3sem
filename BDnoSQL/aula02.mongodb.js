/* Tipos de Dados simples
* string, number, boolean, date, ObjectId

* Tipos de Dados complexos
* Array, Object, Geo, Binary
*/

use('aula02')
db.receitas.insertOne({
    _id: "123",
    nome: "Hambúrguer de costela",
    preco: 15.99,
    ingredientes: ["pao", "costela", "queijo"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe: {
        "calorias": 1500,
        "porcao": 1,
        "veggie": false
    }
})

use('aula02')
db.receitas.find() // select * from receitas

use('aula02')
db.receitas.find({}, {}) // 1º são os filtros, 2º são as projeções das colunas
//select nome, preco from receitas;
use('aula02')
db.receitas.find({},{nome:1, preco:1, _id:0}) //1 mostra o atributo, 0 oculta


use('aula02')
db.receitas.insertOne({
    nome: "Hambúrguer de Cogumelo",
    preco: 45.99,
    ingredientes: ["pao", "cogumelo", "queijo"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe: {
        "calorias": 700,
        "porcao": 1,
        "veggie": true
    }
})

use('aula02')
db.receitas.find()

//select * from receitas where vegetariano = true
use('aula02')
db.receitas.find({vegetariano: true},{nome:1, preco:1})

use('aula02')
db.receitas.find({vegetariano: {$eq:true}},{nome:1, preco:1})

//select nome, preco from receitas where nome = 'costela';
use('aula02')
db.receitas.find({nome: 'costela'},{nome:1, preco:1})

//select nome, preco from receitas where nome <>> 'costela';
use('aula02')
db.receitas.find({nome: {$ne: 'costela'}},{nome:1, preco:1})

//select nome, preco from receitas where nome like '%costela%';
use('aula02') //i = insensitive case
db.receitas.find({nome: /costela/i},{nome:1, preco:1})

//select nome, preco, calorias from receitas where preco > 20.00;
use('aula02') 
db.receitas.find({preco: {$gt: 20.00}},{nome:1, preco:1, "detalhe.calorias":1})

//select nome, preco, calorias from receitas where preco between 15 and 30;
use('aula02') 
db.receitas.find({preco: {
                    $gte: 15.00,
                    $lte: 30.00}},
                {nome:1, preco:1, "detalhe.calorias":1})

//select nome, preco from receitas where preco < 50 AND nome like %cofu&;
use('aula02') 
db.receitas.find({$and:[
                        {preco: {$lt:50}},
                        {nome: /cogu/i}
                    ]},
                {nome:1, preco:1})

//select nome, preco from receitas where preco < 20 OR nome like %cofu&;
use('aula02') 
db.receitas.find({$or:[
                        {preco: {$lt:20}},
                        {nome: /cogu/i}
                    ]},
                {nome:1, preco:1})

use('aula02') 
db.receitas.find({$nor:[
                        {preco: {$gte:15}},
                        {preco: {$lte:30}},
                    ]},
                {nome:1, preco:1})

//update receitas set preco = 25.00 where nome like '%costela%';
use('aula02')
db.receitas.updateOne(
                     {nome: /costela/i},
                     {$set: {preco: 25.00}})

use('aula02')
db.receitas.updateOne(
                     {_id: ObjectId('66ba91d82a80a4c1620946b5')},
                     {$set: {preco: 45.99}})

//update receitas set vegetariano = true where preco >= 10
use('aula02')
db.receitas.updateMany(
                     {preco: {$gte: 10}},
                     {$set: {vegetariano: true}}
                    )

//unset no update - remove o atributo especificado
use('aula02')
db.receitas.updateMany(
    {}, // no exemplo não há filtro
    {$unset: {vegetariano: ''}}
)

//$push -- Adiciona um novo elemento ao array no update
use('aula02')
db.receitas.updateOne(
    {nome: /cogu/i},
    {$push: {ingredientes: 'alface'}}
)

//$pull - Remove um elemento já existente no array
use('aula02')
db.receitas.updateMany(
    {},
    {$pull: {ingredientes: 'queijo'}}
    )

use('aula02')
db.receitas.find({}, {nome: 1, "detalhe.calorias": 1})

//incrementando ou decrementando um valor no update
use('aula02')
db.receitas.updateMany(
    {},
    {$inc: {"detalhe.calorias": 100}} //para decrementar usa negativo ex: -100
)

//delete from receitas where _id=123
use('aula02')
db.receitas.deleteOne(
    {_id: '123'}
)

//delete from receitas where preco > 10
use('aula02')
db.receitas.deleteMany(
    {preco: {$gt: 10}}
)

use('aula02')
db.receitas.find({}, {})