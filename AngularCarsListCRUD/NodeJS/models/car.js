const mongoose = require('mongoose');

var Car = mongoose.model('Car', {
    placa: { type: String },
    chassi: { type: String },
    renavam: { type: String },
    modelo: { type: String },
    marca: { type: String },
    ano: { type: Number },
});

module.exports = { Car };