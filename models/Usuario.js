const {Schema, model} = require('mongoose');

const UsuariosSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    departamento: {
        type: String,
        required: true,
    },
    uet: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
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
    rol: {
        type: String,
        required: true,
        enum: [
            'Admin',
            'Usuario'
        ]
    },
    estado: {
        type: String,
        required: true,
        enum: [
            'Activo',
            'Inactivo'
        ]
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

module.exports = model('Usuarios', UsuariosSchema);