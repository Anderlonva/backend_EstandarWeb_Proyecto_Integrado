const { Router } = require('express');
const PuestoPolivalente = require('../models/PuestoPolivalente')
const { validarPuestoPolivalente } = require('../helpers/validacion-puestoPolivalente')


const router = Router();

router.post('/', async function (req, res) {

    try {
        const validar = validarPuestoPolivalente(req)

        if (validar.length > 0) {
            return res.status(400).send(validar);
        }

        let newPuesto = new PuestoPolivalente()
        newPuesto.departamento = req.body.departamento
        newPuesto.uet = req.body.uet
        newPuesto.puesto = req.body.puesto
        newPuesto.operario = req.body.operario
        newPuesto.turno = req.body.turno
        newPuesto.familia = req.body.familia
        newPuesto.urlEstandar = req.body.urlEstandar
        newPuesto.fechaCreacion = new Date();
        newPuesto.fechaActualizacion = new Date();

        newPuesto = await newPuesto.save()
        res.send(newPuesto)

    } catch (error) {

        console.log(error)
        res.status(500).send('Ocurrio un error');

    }
})

router.get('/', async function (req, res) {
    try {
        let puestos = await PuestoPolivalente.find()
        res.send(puestos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error');
    }
})

router.put('/:puestoId', async function (req, res) {

    try {
        let updatePuesto = await PuestoPolivalente.findById(req.params.puestoId);

        if (!updatePuesto) {
            return res.status(400).send('Puesto no existe');
        }


        updatePuesto.departamento = req.body.departamento
        updatePuesto.uet = req.body.uet
        updatePuesto.puesto = req.body.puesto
        updatePuesto.operario = req.body.operario
        updatePuesto.turno = req.body.turno
        updatePuesto.familia = req.body.familia
        updatePuesto.urlEstandar = req.body.urlEstandar
        updatePuesto.fechaActualizacion = new Date();


        updatePuesto = await updatePuesto.save(); // lo guarda en la base de datos

        res.send(updatePuesto);


    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error');
    }

});

router.get('/:puestoId', async function (req, res) {
    try {
        const puesto = await PuestoPolivalente.findById(req.params.puestoId)
        if (!puesto) {
            return res.status(404).send('Puesto no existe')
        }
        res.send(puesto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ocurrio un error');
    }
})

module.exports = router