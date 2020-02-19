const axios = require('axios');
const Clinica = require('../models/Clinica');

module.exports = {
    async index(request, response) {
        const clinicas = await Clinica.find();

        return response.json(clinicas);
    },

    async store(request, response) {
        const { nome, endereco, tel, especialidade } = request.body;
    
        let clinica = await Clinica.findOne({ nome });

        if (!clinica) {
            clinica = await Clinica.create({
                nome,
                endereco,
                tel,
                especialidade,
            });
        }

        return response.json(clinica);
    },

};