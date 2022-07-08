const router = require('express').Router();

const { request } = require('https');
const Contato = require('../models/contato');

router.get('/read', async(req, res) =>{
    try{
        const contatos = await Contato.find();

        if(!contatos)
            return res.status(422).send({erro: 'Não foram encontrados registros'});

        return res.status(200).send(contatos);
    }
    catch (err){
        return res.status(400).send({erro: err});
    }
});

router.get('/read/:id', async(req, res) =>{
    const id = req.params.id;
    try{
        const contatos = await Contato.findOne({_id: id});

        if(!contatos)
            return res.status(422).send({erro: 'Contato não encontrado'});
            
        return res.status(200).send(contatos);
    }
    catch (err){
        return res.status(400).send({erro: err});
    }
});

module.exports = app => app.use(router);