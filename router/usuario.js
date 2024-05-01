const { Router } = require('express');
const Usuario = require('../models/Usuario');
const { validarUsuario } = require('../helpers/validacion-usuario');

const router = Router();

router.post('/registro', async function (req, res) {

    try {

        const validar = validarUsuario(req);

        if (validar.length > 0) {
            return res.status(400).send(validar);
        }

        const existeUsuario = await Usuario.findOne({ email: req.body.email })

        if (existeUsuario) {
            return res.status(400).send('Email ya existe');
        }

        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        usuario.departamento = req.body.departamento;
        usuario.uet = req.body.uet;
        usuario.puesto = req.body.puesto;
        usuario.turno = req.body.turno;
        usuario.rol = 'Usuario';
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();


        usuario = await usuario.save(); // lo guarda en la base de datos

        res.send(usuario); // para mostrarlo como respuesta 

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un Error');
    }

});

router.post('/registro/admin', async function (req, res) {

    try {

        const validar = validarUsuario(req);

        if (validar.length > 0) {
            return res.status(400).send(validar);
        }

        const existeUsuario = await Usuario.findOne({ email: req.body.email })

        if (existeUsuario) {
            return res.status(400).send('Email ya existe');
        }

        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        usuario.departamento = req.body.departamento;
        usuario.uet = req.body.uet;
        usuario.puesto = req.body.puesto;
        usuario.turno = req.body.turno;
        usuario.rol = 'Admin';
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();


        usuario = await usuario.save(); // lo guarda en la base de datos

        res.send(usuario); // para mostrarlo como respuesta 

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un Error');
    }

});


router.get('/', async function (req, res) {
    try {

        const usuarios = await Usuario.find();
        res.send(usuarios);

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error');
    }
});

router.put('/:usuarioId', async function (req, res) {
    try {

        let usuario = await Usuario.findById(req.params.usuarioId); // se obtiene el usuario por medio del id

        if (!usuario) {
            return res.status(400).send('El Ususario no existe');
        }

        let usuarioEmail = await Usuario.findOne({ email: req.body.email, _id: { $ne: usuario._id } });
        //$ne = no equals no igual 
        // busca en la tabla si exite el email y verifica que otro id diferente al que estoy buscando tenga este email, ya que si modifico el email y ya existe no me lo va a dejar actualizar
        if (usuarioEmail) {
            return res.status(400).send('El Email ya existe');
        }

        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        usuario.departamento = req.body.departamento;
        usuario.uet = req.body.uet;
        usuario.puesto = req.body.puesto;
        usuario.turno = req.body.turno;
        usuario.rol = req.body.rol;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date();


        usuario = await usuario.save(); // lo guarda en la base de datos

        res.send(usuario); // para mostrarlo como respuesta 

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un Error');
    }
});

router.get('/:usuarioId', async function (req, res) {
    try {
        const usuario = await Usuario.findById(req.params.usuarioId)
        if (!usuario) {
            return res.status(404).send('Usuario no existe')
        }
        res.send(usuario)
    } catch (error) {
        console.log(error);
    }
})

router.post('/login', async (req = request, res = response) => {

    const { email, password } = req.body

    try {
        const usuarioExiste = await Usuario.findOne({
            email: email
        })

        if (!usuarioExiste) {
            return res.status(400).json({
                msg: 'No existe usuario',
                token: false
            })
        }

        if (usuarioExiste.estado == 'Inactivo') {
            return res.status(400).json({
                msg: 'El usuario esta Inactivo',
                token: false
            })
        }

        if (password != usuarioExiste.password) {
            return res.status(400).json({
                msg: 'contraseña incorrecta',
                token: false
            })
        } // implementar JWT con expiracion del token desde .env la variable

        return res.json({ usuarioExiste, token: true })

    } catch (error) {

    }
});





module.exports = router