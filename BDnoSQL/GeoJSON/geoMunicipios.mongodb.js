const fs = require('fs') //File System

const jsonMunicipios = fs.readFileSync("BDnoSQL/GeoJSON/JSON/municipios.json")
const dadosMunicipios = JSON.parse(jsonMunicipios)

use('geo')
db.municipios.insertMany(dadosMunicipios)
db.municipios.createIndex({codigo_ibge:1},{unique:true, name: "idx_municipios_codigoIbge"})
db.municipios.find().count()