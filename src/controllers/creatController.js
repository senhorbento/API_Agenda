const router = require('express').Router();

const Contato = require('../models/contato');

router.post('/creat', async(req, res) =>{
    try{
        if(await Contato.findOne({"nome":req.body.nome, "telefone": req.body.telefone, "email": req.body.email}))
            return res.status(400).send({erro: 'Usuario já existe'});
            
        if(!req.body.nome ||!req.body.telefone)
            return res.status(422).send({erro: 'Nome e telefone são necessários'});
            
        const contato = await Contato.create(req.body);
        return res.status(200).send({mensagem: 'Contato inserido com sucesso!'});
    }
    catch (err){
        return res.status(400).send({erro: err});
    }
});

module.exports = app => app.use(router);