const validarUsuario = (req) => {

    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('Nombre requerido')
    }

    if (!req.body.apellido) {
        validacion.push('Apellido requerido')
    }

    if (!req.body.email) {
        validacion.push('Email requerido')
    }

    if (!req.body.password) {
        validacion.push('Password requerido')
    }

    if (!req.body.departamento) {
        validacion.push('Departamento requerido')
    }

    if (!req.body.uet) {
        validacion.push('UET requerida')
    }

    if (!req.body.turno) {
        validacion.push('Turno requerido')
    }

    if (!req.body.rol) {
        validacion.push('Rol requerido')
    }

    if (!req.body.estado) {
        validacion.push('Estado requerido')
    }

    return validacion;

}

module.exports = { validarUsuario };