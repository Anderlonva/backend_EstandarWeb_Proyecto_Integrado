const {Schema, model} = require('mongoose');

const PuestoSchema = Schema({

    departamento: {
        type: String,
        required: true,
    },

    uet: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    titularTurnoA: {
        type: String,
        required: true
    },

    titularTurnoB: {
        type: String,
        required: true
    },
    familia: {
        type: String,
        required: true,
        enum: [
            'X52',
            'HJD'
        ]
    },
    urlEstandar: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },

    fechaActualizacion: {
        type: Date,
        required: true
    }

});

module.exports = model('Puesto', PuestoSchema);