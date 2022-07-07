const express = require('express');

const Contato = require('../models/contato');

const router = express.Router();

router.post('/register', async(req, res) =>{
    try{
        if(await Contato.findOne({"email": req.body.email, "telefone": req.body.telefone, "nome":req.body.nome}))
            return res.status(400).send({erro: 'Usuario já existe'})

        const contato = await Contato.create(req.body);
        return res.send({contato});
    }
    catch (err){
        return res.status(400).send({erro: 'Falha no registro'});
    }
});

module.exports = app => app.use('/creat', router);