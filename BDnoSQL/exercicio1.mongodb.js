
// Exercicio 01
use('exercicio1')
db.funcionarios.insertMany([
    {
        _id: "1",
        nome: "Kauê Cunha Lima",
        cargo: "CEO",
        sexo: "Masculino",
        salario: 10363.52,
        departamento: "Administração",
        dataContratacao: new Date("2022-05-23"),
        projetos: ["Corte de custos", "Sustentabilidade Implementada"],
        dataCadastro: new Date()
    }, {
        _id: "2",
        nome: "Gabriel Dias Souza",
        cargo: "Diretor",
        sexo: "Masculino",
        salario: 7510.20,
        departamento: "Administração",
        dataContratacao: new Date("2022-05-23"),
        projetos: ["Melhoria da infraestrutura"],
        dataCadastro: new Date()
    }, {
        _id: "3",
        nome: "Clara Santos Goncalves",
        cargo: "Presidente",
        sexo: "Feminino",
        salario: 8361.10,
        departamento: "Administração",
        dataContratacao: new Date("2022-05-23"),
        projetos: ["Melhoria de rentabilidade a longo prazo"],
        dataCadastro: new Date()
    }, {
        _id: "4",
    	nome: "João Silva",
    	cargo: "Desenvolvedor",
        sexo: "Masculino",
    	salario: 5000,
    	departamento: "TI",
    	dataContratacao: new Date("2023-01-01"),
    	projetos: ["Projeto A", "Projeto B"],
        dataCadastro: new Date()
	}, {
        _id: "5",
    	nome: "Rebeca Carvalho Azevedo",
    	cargo: "Gerente",
        sexo: "Feminino",
    	salario: 5000,
    	departamento: "Contabilidade",
    	dataContratacao: new Date("2023-01-01"),
    	projetos: ["Projeto A"],
        dataCadastro: new Date()
    }
])


//Exercicio 02
use('exercicio1')
db.funcionarios.insertOne(
    {
        _id: "6",
        nome: "Clara Melo Barros",
        cargo: "Analista de Dados",
        sexo: "Feminino",
        salario: 4203.45,
        departamento: "TI",
        dataContratacao: new Date("2023-05-23"),
        projetos: [],
        dataCadastro: new Date()
    }
)
//teste
use('exercicio1')
db.funcionarios.insertOne(
    {
        _id: "9999",
        nome: "Clara Melo Barros",
        cargo: "Desenvolvedor",
        sexo: "Feminino",
        salario: 4203.45,
        departamento: "TI",
        dataContratacao: new Date("2023-05-23"),
        projetos: ["Projeto A", "Projeto B"],
        dataCadastro: new Date()
    }
)


//Exercicio 03
use('exercicio1')
db.funcionarios.updateMany(
    {},
    {$inc: {salario: 100}}
)


//Exercicio 04
use('exercicio1')
db.funcionarios.updateOne(
    {nome: /joão/i},
    {$push: {projetos: "Projeto C"}}
)

//Exercicio 05
use('exercicio1')
db.funcionarios.updateMany(
    {},
    {$unset: {dataContratacao: ''}}
)

//Exercicio 06
use('exercicio1')
db.funcionarios.updateMany(
    {departamento: /ti/i},
    {$set: {bonificacao: 500}}
)

//Exercicio 07
use('exercicio1')
db.funcionarios.deleteOne(
    {nome: /joão silva/i}
)

//Exercicio 08
use('exercicio1')
db.funcionarios.deleteMany(
    {departamento: /contabilidade/i},
)

//Exercicio 09
use('exercicio1')
db.funcionarios.find(
    {cargo: /desenvolvedor/i},
    {nome: 1, sexo: 1, salario: 1, _id:0}
)

//Exercicio 10
use('exercicio1')
db.funcionarios.find(
    {salario: {$gt: 4000}},
    {nome:1, _id:0}
)

//Exercicio 11
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {dataContratacao: {$gte: new Date('2023-01-01')}},
        {dataContratacao: {$lte: new Date('2023-12-31')}}
    ]}
)

//Exercicio 12
use('exercicio1')
db.funcionarios.find(
    {$or:[
        {projetos: "Projeto A"},
        {projetos: "Projeto B"}
    ]}
)

//Exercicio 13
use('exercicio1')
db.funcionarios.find(
    {projetos: {$ne: "Projeto B"}}
)

//Exercicio 14
use('exercicio1')
db.funcionarios.find(
    {sexo: /feminino/i},
    {nome: 1, salario: 1, departamento: 1, sexo: 1, _id: 0}
)

//Exercicio 15
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {dataContratacao: {$lte: new Date("2023-12-31")}},
        {salario: {$lt: 5000}}
    ]},
    {}
)

//Exercicio 16
use('exercicio1')
db.funcionarios.find(
    {projetos: {$size: 2}},
    {}
)

//Exercicio 17
use('exercicio1')
db.funcionarios.find(
    {dataCadastro: {$gte: new Date(new Date().getTime()-
          30 * 24 * 60 * 60 * 1000)}},
    {}
)

//Exercicio 18
use('exercicio1')
db.funcionarios.find(
    {nome: /^joâo/i}, // ^ que começa com tal palavra
    {}
)

//Exercicio 19
use('exercicio1')
db.funcionarios.find(
    {nome: /silva$/i}, // $ que a última palavra é
    {}
)

//Exercicio 20
use('exercicio1')
db.funcionarios.find(
    {nome: /lui[sz]/i}, // chama qualquer letra dentro do array luis ou luiz no caso
    {}
)

//Exercicio 21
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {cargo: /desenvolvedor/i},
        {departamento: /ti/i},
        {salario: {$gt: 4500}}
    ]},
    {}
)

//Exercicio 22
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {departamento: {$ne: "Desenvolvedor"}},
        {dataContratacao:$and[ 
            {$lte: new Date("2023-12-31")},
            {$gte: new Date("2023-01-01")}
        ]}
    ]},
    {}
)

//Exercicio 23
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {salario: {$lte: 5000}},
        {$or:[ 
            {projetos: "Projeto A"},
            {projetos: "Projeto B"}
        ]}
    ]},
    {}
)

//Exercicio 24
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {departamento: {$ne: "TI"}},
        {projetos: {$ne: "Projeto A"}}
    ]},
    {}
)

//Exercicio 25
use('exercicio1')
db.funcionarios.find(
    {$or:[
        {sexo: /feminino/i},
        {dataContratacao: {$lt: new Date("2023-01-01")}}
    ]},
    {}
)

//Exercicio 26
use('exercicio1')
db.funcionarios.find(
    {$and:[
        {$or: [
            {cargo: /analista/i},
            {cargo: /desenvolvedor/i}
        ]},
        {salario: {$gt: 4000}},
        {dataContratacao: {$gte: new Date("2023-01-01")}}
        
    ]},
    {}
)