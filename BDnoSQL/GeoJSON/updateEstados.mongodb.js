use('geo')
db.estados.find().forEach(function(estado) {
    db.estados.updateOne(
        {_id: estado._id},
        {
            $set: {
                local: {
                    type: 'Point',
                    coordinates: [estado.longitude, estado.latitude]
                }
            },
            $unset: {longitude: '', longitude: ''}
        }
    )
})

use('geo')
db.estados.find(
    {},
    {nome:1, local:1}
)