use('geo')
db.municipios.find().count()
 
//Listar todos municípios terminados em tu $ força o termino
use('geo')
db.municipios.find({nome: /tu$/i},{nome:1, codigo_uf:1, _id:0}).
                                    sort({codigo_uf:1, nome:1})//1 crescente -1 decrescente

// Colocar em ordem o resultado
use('geo')
db.municipios.find().sort({nome:-1})
 
// count
use('geo')
db.municipios.find({capital:true}).count()

// Limite em 5 o número de registros retornados que sejam capital = true    
use('geo')
db.municipios.find({capital:true}).limit(5)

// Use o skip para pular n registros ao obter a consulta
const registros = 10
const pagina = 2
 use('geo')
 db.municipios.find({capital:true}).sort({nome:1})
        .skip(registros*pagina)
        .limit(registros)

//----- Usando expressão regular ------

// ^ Que inicie com tu
 use('geo')
 db.municipios.find({nome:/^tu/i},{nome:1, codigo_uf:1, _id:0})

 // Usando o operador $regex para começar com tu
 use('geo')
 db.municipios.find({nome: {$regex: /^tu/i}},{nome:1, _id:0})



