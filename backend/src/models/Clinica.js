const mongoose = require('mongoose');

const ClinicaSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    tel: String,
    especialidade: String,
});

module.exports = mongoose.model('Clinica', ClinicaSchema);