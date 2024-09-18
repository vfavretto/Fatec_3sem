use('geo')
db.municipios.aggregate([
    {
        //operador para relacionar documentos de diferentes coleções
        $lookup: {
            from: "estados",
            localField: "codigo_uf",
            foreignField: "codigo_uf",
            as: "estado"
        }
    },
    {
        $project: {
            "_id":0,
            "nome": 1,
            "local.coordinates": 1,
            "estado.nome": 1
        }
    }
])


use('geo')
db.estados.aggregate([
    {
        $lookup: {
            from: "municipios",
            localField: "codigo_uf",
            foreignField: "codigo_uf",
            as: "relacaoMunicipios"
        }
    },
    {$match : {
        nome: {$eq: "Acre"}
    }
    },
    {
        $project: {
            "_id":0,
            "nome": 1,
            "relacaoMunicipios.nome": 1
    }
    }
])