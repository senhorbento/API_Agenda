const express = require('express');

const Contato = require('../models/contato');

const router = express.Router();

router.post('/register', async(req, res) =>{
    
    try{
        if(await Contato.findOne({"nome":req.body.nome, "telefone": req.body.telefone, "email": req.body.email}))
            return res.status(400).send({erro: 'Usuario já existe'});
        if(!req.body.nome ||!req.body.telefone)
            return res.status(422).send({erro: 'Nome e telefone são necessários'});
            
        const contato = await Contato.create(req.body);
        return res.status(200).send({mensagem: 'Contato inserido com sucesso!'});
    }
    catch (err){
        return res.status(400).send({erro: 'Falha no registro'});
    }
});

module.exports = app => app.use('/creat', router);