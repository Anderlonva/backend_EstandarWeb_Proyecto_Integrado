const {Schema, model} = require('mongoose');

const PuestoPolivalenteSchema = Schema({

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
    operario: {  
        type: String,              
        required: true              
    },
    turno: {
        type: String,
        required: true,
        enum: [
            'A',
            'B',
            'C'
        ]
    },
    familia: {
        type: String,
        required: true,
        enum: [
            'X52',
            'HJD',
            'X52 - HJD'
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

module.exports = model('PuestoPolivalente', PuestoPolivalenteSchema);