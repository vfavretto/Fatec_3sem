use('geo')
db.municipios.find().forEach(function(municipio) {
    db.municipios.updateOne(
        {_id: municipio._id},
        {
            $set: {
                local: {
                    type: 'Point',
                    coordinates: [municipio.longitude, municipio.latitude]
                }
            },
            $unset: {longitude: '', longitude: ''}
        }
    )
})

use('geo')
db.municipios.find(
    {},
    {nome:1, local:1}
)