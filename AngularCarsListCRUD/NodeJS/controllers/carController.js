const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Car } = require('../models/car');

// => localhost:3000/cars/
router.get('/', (req, res) => {
    Car.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Cars :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Car.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving car :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Car({
        placa: req.body.placa,
        chassi: req.body.chassi,
        renavam: req.body.renavam,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in car Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        placa: req.body.placa,
        chassi: req.body.chassi,
        renavam: req.body.renavam,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
    };
    Car.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in car Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Car.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in car Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;