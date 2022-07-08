const router = require('express').Router();

const Contato = require('../models/contato');

router.get('/read', async(req, res) =>{
    try{
        const contatos = await Contato.find();
        return res.status(200).send(contatos);
    }
    catch (err){
        return res.status(400).send({erro: 'Falha na requisição'});
    }
});

module.exports = app => app.use(router);