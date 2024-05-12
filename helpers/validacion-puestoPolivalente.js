const validarPuestoPolivalente = (req) => {

    const validacion = [];

    if (!req.body.departamento) {
        validacion.push('departamento requerido')
    }

    if (!req.body.uet) {
        validacion.push('uet requerido')
    }

    if (!req.body.puesto) {
        validacion.push('puesto requerido')
    }

    if (!req.body.operario) {
        validacion.push('Operario requerido')
    }

    if (!req.body.familia) {
        validacion.push('familia requerida')
    }

    if (!req.body.urlEstandar) {
        validacion.push('urlEstandar requerida')
    }

    return validacion;

}


module.exports = { validarPuestoPolivalente }