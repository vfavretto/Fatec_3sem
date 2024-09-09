//Criando os índices 2dsphere

use('geo')
db.estados.createIndex({ local: '2dsphere' })

use('geo')
db.municipios.createIndex({ local: '2dsphere' })

//Encontrar um ponto próximo a uma localização específica
use('geo')
db.municipios.find(
    {
        local: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [-47.4495, -23.5313] //Fatec
                },
                $maxDistance: 50000 //em metros(50km)
            }
        }
    },
    { nome: 1, _id: 0 }
)

//Encontrar pontos em um raio (círculo)
use('geo')
db.municipios.find(
    {
        local: {
            $geoWithin: {
                $centerSphere: [[-47.4495, -23.5313],
                20 / 6378.1] //raio em radianos
            }
        }
    }, { nome: 1, _id: 0 }
).sort({ nome: 1 })
//6378.10 é o raio médio da Terra em km, 
//necessário para converter em radianos

//Encontrar pontos dentro de um polígono
use('geo')
db.municipios.find(
    {
        local: {
            $geoWithin: {
                $polygon: [

                    [
                        -48.14363121923327,
                        -25.199575398121183
                    ],
                    [
                        -44.11250374823794,
                        -22.781169585546195
                    ],
                    [
                        -44.80073919339219,
                        -22.27777022644318
                    ],
                    [
                        -46.343185885189484,
                        -22.841485471189003
                    ],
                    [
                        -47.49408884875777,
                        -20.015213011183135
                    ],
                    [
                        -51.19165664040577,
                        -19.924933382159793
                    ],
                    [
                        -53.19634041282394,
                        -22.64584214211071
                    ],
                    [
                        -49.93058423854552,
                        -22.93465524060177
                    ],
                    [
                        -49.250532166472965,
                        -24.707496198665012
                    ],
                    [
                        -48.14363121923327,
                        -25.199575398121183
                    ]

                ]
            }
        }
    },
    { nome: 1, _id: 0 }
).count()

//Localizando todos os pontos dentro de uma caixa (box)
use('geo')
db.municipios.find(
    {
        local: {
            $geoWithin: {
                $box: [
                    [-48.42320082158324,
                     -23.188451924486202], //canto inferior esquerdo
                    [-45.777568019712675,
                     -23.869355122767388] //canto superior direito
                ]
            }
        }
    },
    { nome:1, _id:0 }
)